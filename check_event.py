#!/usr/bin/env python3
import frappe
from frappe.utils import get_datetime

frappe.init(site='aicl.co.tz')
frappe.connect()

try:
    # Get the event
    event = frappe.get_doc("Angalia Event", "AEVT-00005")
    
    print("=" * 60)
    print("EVENT DATA CHECK")
    print("=" * 60)
    print(f"Name: {event.name}")
    print(f"Title: {event.title}")
    print(f"Event Date (raw): {event.event_date}")
    print(f"Event Date (type): {type(event.event_date)}")
    print(f"Status: {event.status}")
    print(f"Published: {event.published}")
    print(f"Location: {event.location}")
    print(f"Description: {event.description[:100] if event.description else 'None'}...")
    print(f"Short Description: {event.short_description}")
    print(f"Flyer: {event.flyer}")
    print(f"Registration Link: {event.registration_link}")
    print(f"Recording Link: {event.recording_link}")
    print(f"Who Should Attend: {event.who_should_attend[:100] if event.who_should_attend else 'None'}...")
    
    print("\nHighlights:")
    if hasattr(event, 'highlights') and event.highlights:
        for i, h in enumerate(event.highlights):
            print(f"  {i+1}. {h.highlight}")
    else:
        print("  No highlights")
    
    print("\n" + "=" * 60)
    print("TESTING API FUNCTION")
    print("=" * 60)
    
    # Test the API function
    from angaliawebapp.angalia_web_app.doctype.angalia_event.angalia_event import get_event_details
    result = get_event_details("AEVT-00005")
    
    print("\nAPI Response:")
    import json
    print(json.dumps(result, indent=2, default=str))
    
except Exception as e:
    print(f"Error: {str(e)}")
    import traceback
    traceback.print_exc()

finally:
    frappe.destroy()
