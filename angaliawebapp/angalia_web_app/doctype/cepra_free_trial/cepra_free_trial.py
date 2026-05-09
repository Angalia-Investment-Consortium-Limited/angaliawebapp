# Copyright (c) 2025, ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import validate_email_address

class CEPRAFreeTrial(Document):
    def validate(self):
        """Validate email and phone number before saving"""
        # Validate email address
        if self.email_address:
            try:
                validate_email_address(self.email_address, throw=True)
            except frappe.InvalidEmailAddressError:
                frappe.throw(f"Invalid email address: {self.email_address}")
        
        # Validate phone number (basic validation)
        if self.phone_number:
            # Remove common separators
            phone = self.phone_number.replace(" ", "").replace("-", "").replace("(", "").replace(")", "")
            if not phone.replace("+", "").isdigit():
                frappe.throw("Phone number should contain only digits, spaces, hyphens, or + symbol")
    
    def after_insert(self):
        """Send email notifications after new trial request is submitted"""
        self.send_admin_notification_email()
        self.send_user_confirmation_email()
    
    def send_admin_notification_email(self):
        """Send email notification to admin about new trial request"""
        try:
            # Get admin email from system settings or use default
            admin_email = frappe.db.get_single_value("System Settings", "email_footer_address") or "business@aicl.co.tz"
            
            # Prepare email content
            subject = f"New CEPRA Free Trial Request from {self.full_name}"
            
            message = f"""
            <h3>New CEPRA Free Trial Request</h3>
            <p>A new trial request has been submitted with the following details:</p>
            
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.full_name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company/Organization:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.company_name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email Address:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.email_address}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.phone_number}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Role/Position:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.role_position or 'Not provided'}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Industry:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.industry}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Module(s):</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.preferred_modules}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">{self.message or 'No message provided'}</td>
                </tr>
            </table>
            
            <p style="margin-top: 20px;">
                <a href="{frappe.utils.get_url()}/app/cepra-free-trial/{self.name}" 
                   style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
                   View in Frappe
                </a>
            </p>
            """
            
            # Send email
            frappe.sendmail(
                recipients=[admin_email],
                subject=subject,
                message=message,
                now=True
            )
            
        except Exception as e:
            # Log error but don't prevent document creation
            frappe.log_error(f"Failed to send admin notification email: {str(e)}", "CEPRA Free Trial Admin Notification")
    
    def send_user_confirmation_email(self):
        """Send confirmation email to the user who submitted the trial request"""
        try:
            subject = "Thank You for Your Interest in CEPRA - Trial Request Received"
            
            message = f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c3e50;">Thank You for Your Interest in CEPRA!</h2>
                
                <p>Dear {self.full_name},</p>
                
                <p>We have successfully received your free trial request for CEPRA (Customization Enterprise Resource Planning Application).</p>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #2c3e50; margin-top: 0;">Your Request Details:</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Company/Organization:</td>
                            <td style="padding: 8px 0;">{self.company_name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Industry:</td>
                            <td style="padding: 8px 0;">{self.industry}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Preferred Module(s):</td>
                            <td style="padding: 8px 0;">{self.preferred_modules}</td>
                        </tr>
                    </table>
                </div>
                
                <h3 style="color: #2c3e50;">What Happens Next?</h3>
                <ol style="line-height: 1.8;">
                    <li>Our team will review your request within 24 hours</li>
                    <li>We will contact you to discuss your specific requirements</li>
                    <li>We'll set up your personalized CEPRA trial account</li>
                    <li>You'll receive access credentials and onboarding support</li>
                </ol>
                
                <div style="background-color: #e8f4f8; padding: 15px; border-left: 4px solid #3498db; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Need immediate assistance?</strong></p>
                    <p style="margin: 10px 0 0 0;">Feel free to contact us:</p>
                    <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                        <li>Email: <a href="mailto:business@aicl.co.tz" style="color: #3498db;">business@aicl.co.tz</a></li>
                        <li>Phone: <a href="tel:+255768017100" style="color: #3498db;">+255 768 017 100</a></li>
                        <li>Phone: <a href="tel:+255696240077" style="color: #3498db;">+255 696 240 077</a></li>
                    </ul>
                </div>
                
                <p>We're excited to help you transform your business operations with CEPRA!</p>
                
                <p style="margin-top: 30px;">
                    Best regards,<br>
                    <strong>AICL Team</strong><br>
                    <em>Angalia Investment Consortium Limited</em>
                </p>
                
                <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                
                <p style="font-size: 12px; color: #7f8c8d; text-align: center;">
                    This is an automated confirmation email. Please do not reply directly to this message.<br>
                    POSTA, Plot No.1249/11, Bibi Titi Mohammed Road, First Floor, Dar es Salaam, Tanzania
                </p>
            </div>
            """
            
            # Send email to user
            frappe.sendmail(
                recipients=[self.email_address],
                subject=subject,
                message=message,
                now=True
            )
            
        except Exception as e:
            # Log error but don't prevent document creation
            frappe.log_error(f"Failed to send user confirmation email: {str(e)}", "CEPRA Free Trial User Confirmation")

@frappe.whitelist(allow_guest=True)
def send_followup_email(docname):
    """Send follow-up email to the trial applicant"""
    doc = frappe.get_doc("CEPRA Free Trial", docname)
    
    subject = "Thank you for your interest in CEPRA"
    
    message = f"""
    <p>Dear {doc.full_name},</p>
    
    <p>Thank you for requesting a free trial of CEPRA (Customization Enterprise Resource Planning Application).</p>
    
    <p>Our team will review your request and get back to you shortly to set up your trial account and provide you with access credentials.</p>
    
    <p>If you have any immediate questions, please don't hesitate to contact us:</p>
    <ul>
        <li>Email: business@aicl.co.tz</li>
        <li>Phone: +255 768 017 100</li>
    </ul>
    
    <p>Best regards,<br>
    AICL Team</p>
    """
    
    frappe.sendmail(
        recipients=[doc.email_address],
        subject=subject,
        message=message
    )
    
    frappe.msgprint(f"Follow-up email sent to {doc.email_address}")
