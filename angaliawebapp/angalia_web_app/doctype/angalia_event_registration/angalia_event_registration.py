# Copyright (c) 2025, ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import validate_email_address


class AngaliaEventRegistration(Document):
    def validate(self):
        """Validate registration data before saving"""
        # Validate email address
        if self.email:
            try:
                validate_email_address(self.email, throw=True)
            except frappe.InvalidEmailAddressError:
                frappe.throw(f"Invalid email address: {self.email}")
        
        # Validate phone number (basic validation)
        if self.phone:
            # Remove common separators
            phone = self.phone.replace(" ", "").replace("-", "").replace("(", "").replace(")", "")
            if not phone.replace("+", "").isdigit():
                frappe.throw("Phone number should contain only digits, spaces, hyphens, or + symbol")
    
    def after_insert(self):
        """Send email notifications after new registration is submitted"""
        self.send_admin_notification_email()
        self.send_user_confirmation_email()
    
    def send_admin_notification_email(self):
        """Send email notification to admin about new event registration"""
        try:
            # Get admin email from system settings or use default
            admin_email = frappe.db.get_single_value("System Settings", "email_footer_address") or "business@aicl.co.tz"
            
            # Get event details
            event = frappe.get_doc("Angalia Event", self.event)
            
            # Prepare email content
            subject = f"New Event Registration: {event.title}"
            
            message = f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c3e50;">New Event Registration</h2>
                <p>A new registration has been received for the following event:</p>
                
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #3498db; margin-top: 0;">{event.title}</h3>
                    <p><strong>Event Date:</strong> {frappe.utils.format_datetime(event.event_date, "dd MMM yyyy, hh:mm a")}</p>
                    <p><strong>Location:</strong> {event.location or 'Not specified'}</p>
                </div>
                
                <h3 style="color: #2c3e50;">Registrant Details:</h3>
                <table style="border-collapse: collapse; width: 100%;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name:</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">{self.full_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">{self.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">{self.phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Organization:</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">{self.organization or 'Not provided'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Position:</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">{self.position or 'Not provided'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Registration ID:</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">{self.name}</td>
                    </tr>
                </table>
                
                <p style="margin-top: 20px;">
                    <a href="{frappe.utils.get_url()}/app/angalia-event-registration/{self.name}" 
                       style="background-color: #3498db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                        View in ERPNext
                    </a>
                </p>
            </div>
            """
            
            # Send email to admin
            frappe.sendmail(
                recipients=[admin_email],
                subject=subject,
                message=message,
                now=True
            )
            
        except Exception as e:
            # Log error but don't prevent document creation
            frappe.log_error(f"Failed to send admin notification email: {str(e)}", "Angalia Event Registration Admin Notification")
    
    def send_user_confirmation_email(self):
        """Send confirmation email to the registrant"""
        try:
            # Get event details
            event = frappe.get_doc("Angalia Event", self.event)
            
            # Prepare email content
            subject = f"Registration Confirmed: {event.title}"
            
            message = f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #3498db; color: white; padding: 20px; text-align: center;">
                    <h1 style="margin: 0;">Registration Confirmed!</h1>
                </div>
                
                <div style="padding: 20px;">
                    <p>Dear {self.full_name},</p>
                    
                    <p>Thank you for registering for our event. Your registration has been successfully confirmed.</p>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <h2 style="color: #3498db; margin-top: 0;">{event.title}</h2>
                        <p><strong>📅 Date & Time:</strong> {frappe.utils.format_datetime(event.event_date, "dd MMM yyyy, hh:mm a")}</p>
                        <p><strong>📍 Location:</strong> {event.location or 'To be announced'}</p>
                        <p><strong>🎫 Registration ID:</strong> {self.name}</p>
                    </div>
                    
                    <h3 style="color: #2c3e50;">What to Expect:</h3>
                    <p>{event.short_description or 'We look forward to seeing you at the event!'}</p>
                    
                    <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
                        <p style="margin: 0;"><strong>Important:</strong> Please save this email for your records. You may need your Registration ID for check-in.</p>
                    </div>
                    
                    <h3 style="color: #2c3e50;">Need Help?</h3>
                    <p>If you have any questions or need to make changes to your registration, please contact us:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>📧 Email: <a href="mailto:business@aicl.co.tz" style="color: #3498db;">business@aicl.co.tz</a></li>
                        <li>📞 Phone: <a href="tel:+255768017100" style="color: #3498db;">+255 768 017 100</a></li>
                        <li>📞 Phone: <a href="tel:+255696240077" style="color: #3498db;">+255 696 240 077</a></li>
                    </ul>
                </div>
                
                <div style="background-color: #f8f9fa; padding: 20px; text-align: center; margin-top: 30px;">
                    <p style="margin: 0; color: #7f8c8d; font-size: 12px;">
                        This is an automated confirmation email from AICL Event Management System.<br>
                        POSTA, Plot No.1249/11, Bibi Titi Mohammed Road, First Floor, Dar es Salaam, Tanzania
                    </p>
                </div>
            </div>
            """
            
            # Send email to user
            frappe.sendmail(
                recipients=[self.email],
                subject=subject,
                message=message,
                now=True
            )
            
        except Exception as e:
            # Log error but don't prevent document creation
            frappe.log_error(f"Failed to send user confirmation email: {str(e)}", "Angalia Event Registration User Confirmation")


@frappe.whitelist()
def resend_confirmation_email(registration_name):
    """Resend confirmation email to registrant"""
    try:
        doc = frappe.get_doc("Angalia Event Registration", registration_name)
        doc.send_user_confirmation_email()
        return {"success": True, "message": "Confirmation email sent successfully"}
    except Exception as e:
        frappe.log_error(f"Failed to resend confirmation email: {str(e)}", "Angalia Event Registration Resend Email")
        frappe.throw("Failed to send confirmation email. Please try again.")
