// Copyright (c) 2025, ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
// For license information, please see license.txt

frappe.ui.form.on('CEPRA Free Trial', {
    refresh: function(frm) {
        // Add custom button to send follow-up email
        if (!frm.is_new()) {
            frm.add_custom_button(__('Send Follow-up Email'), function() {
                frappe.call({
                    method: 'angaliawebapp.angalia_web_app.doctype.cepra_free_trial.cepra_free_trial.send_followup_email',
                    args: {
                        docname: frm.doc.name
                    },
                    callback: function(r) {
                        if (!r.exc) {
                            frappe.show_alert({
                                message: __('Follow-up email sent successfully'),
                                indicator: 'green'
                            });
                        }
                    }
                });
            });
        }
        
        // Make email and phone clickable
        if (frm.doc.email_address) {
            frm.fields_dict.email_address.$wrapper.find('input').css('cursor', 'pointer');
        }
        if (frm.doc.phone_number) {
            frm.fields_dict.phone_number.$wrapper.find('input').css('cursor', 'pointer');
        }
    }
});
