# Copyright (c) 2025, ANGALIA INVESTMENT CONSORTIUM LIMITED and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import now_datetime, get_datetime
from urllib.parse import urlparse


class AngaliaEvent(Document):
    def validate(self):
        """Validate event data before saving"""
        # Auto-update status based on event date
        self.update_status()
        
        # Validate URLs if provided
        if self.registration_link:
            self.validate_url(self.registration_link, "Registration Link")
        
        if self.recording_link:
            self.validate_url(self.recording_link, "Recording Link")
    
    def update_status(self):
        """Automatically update status based on event date"""
        if self.event_date:
            event_datetime = get_datetime(self.event_date)
            current_datetime = now_datetime()
            
            if event_datetime < current_datetime:
                self.status = "Past"
            else:
                self.status = "Upcoming"
    
    def validate_url(self, url, field_name):
        """Validate URL format"""
        try:
            result = urlparse(url)
            if not all([result.scheme, result.netloc]):
                frappe.throw(f"{field_name} must be a valid URL (e.g., https://example.com)")
        except Exception:
            frappe.throw(f"{field_name} must be a valid URL")


@frappe.whitelist(allow_guest=True)
def get_published_events(status=None):
    """Get all published events for the website"""
    filters = {"published": 1}
    
    if status:
        filters["status"] = status
    
    events = frappe.get_all(
        "Angalia Event",
        filters=filters,
        fields=[
            "name",
            "title",
            "event_date",
            "status",
            "location",
            "short_description",
            "flyer",
            "registration_link",
            "recording_link"
        ],
        order_by="event_date desc"
    )
    
    return events


@frappe.whitelist(allow_guest=True)
def get_event_details(event_name):
    """Get full details of a specific event"""
    try:
        # Log the incoming request
        frappe.logger().info(f"Fetching event details for: {event_name}")
        
        event = frappe.get_doc("Angalia Event", event_name)
        
        # Log event data
        frappe.logger().info(f"Event found: {event.name}, Published: {event.published}")
        
        if not event.published:
            frappe.throw("Event not found or not published")
        
        # Get highlights as a list of objects (to match frontend expectations)
        highlights = []
        if hasattr(event, 'highlights') and event.highlights:
            for highlight in event.highlights:
                highlights.append({
                    "highlight": highlight.highlight
                })
        
        # Convert datetime to ISO 8601 format that JavaScript can reliably parse
        event_date_str = None
        if event.event_date:
            try:
                # Ensure we have a datetime object
                dt = get_datetime(event.event_date)
                # Convert to ISO 8601 format with 'T' separator (e.g., "2025-10-07T18:00:00")
                # This is the most universally supported format across all browsers
                event_date_str = dt.isoformat()
                frappe.logger().info(f"Event date formatted to ISO 8601: {event_date_str}")
            except Exception as e:
                frappe.log_error(f"Error formatting event date: {str(e)}")
                # Fallback to string representation
                event_date_str = str(event.event_date)
        else:
            frappe.logger().warning(f"Event {event.name} has no event_date set")
        
        result = {
            "name": event.name,
            "title": event.title or "",
            "event_date": event_date_str,
            "status": event.status or "Upcoming",
            "location": event.location or "",
            "registration_link": event.registration_link or "",
            "recording_link": event.recording_link or "",
            "short_description": event.short_description or "",
            "description": event.description or "",
            "highlights": highlights,
            "who_should_attend": event.who_should_attend or "",
            "flyer": event.flyer or ""
        }
        
        # Log the result
        frappe.logger().info(f"Returning event data: {result}")
        
        return result
        
    except Exception as e:
        error_msg = f"Error fetching event details for {event_name}: {str(e)}"
        frappe.log_error(error_msg, "Event Details API Error")
        frappe.logger().error(error_msg)
        frappe.throw("Event not found")
