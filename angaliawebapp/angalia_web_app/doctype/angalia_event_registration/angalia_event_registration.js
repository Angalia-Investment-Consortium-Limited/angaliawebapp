// Copyright (c) 2025, ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
// For license information, please see license.txt

frappe.ui.form.on("Angalia Event Registration", {
    refresh(frm) {
        // Add custom button to view the event
        if (frm.doc.event) {
            frm.add_custom_button(__('View Event'), function() {
                frappe.set_route('Form', 'Angalia Event', frm.doc.event);
            });
        }
        
        // Add button to resend confirmation email
        if (frm.doc.name && frm.doc.email) {
            frm.add_custom_button(__('Resend Confirmation Email'), function() {
                frappe.call({
                    method: 'angaliawebapp.angalia_web_app.doctype.angalia_event_registration.angalia_event_registration.resend_confirmation_email',
                    args: {
                        registration_name: frm.doc.name
                    },
                    callback: function(r) {
                        if (!r.exc) {
                            frappe.msgprint(__('Confirmation email sent successfully'));
                        }
                    }
                });
            });
        }
    }
});
