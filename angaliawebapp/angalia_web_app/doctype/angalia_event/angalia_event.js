// Copyright (c) 2025, ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
// For license information, please see license.txt

frappe.ui.form.on("Angalia Event", {
    refresh(frm) {
        // Add custom button to preview event on website
        if (frm.doc.name && frm.doc.published) {
            frm.add_custom_button(__('Preview on Website'), function() {
                const base_url = window.location.origin;
                const event_url = `${base_url}/events/${frm.doc.name}`;
                window.open(event_url, '_blank');
            });
        }
        
        // Auto-update status when event date changes
        if (frm.doc.event_date) {
            frm.trigger('update_status');
        }
    },
    
    event_date(frm) {
        // Auto-update status when event date is changed
        frm.trigger('update_status');
    },
    
    update_status(frm) {
        if (frm.doc.event_date) {
            const event_date = new Date(frm.doc.event_date);
            const now = new Date();
            
            if (event_date < now) {
                frm.set_value('status', 'Past');
            } else {
                frm.set_value('status', 'Upcoming');
            }
        }
    }
});
