# Event Management System - Implementation Guide

## Overview
This guide provides complete instructions for implementing and using the Event Management System for your ReactJS website with ERPNext backend.

## What Has Been Implemented

### Backend (ERPNext Doctypes)

#### 1. **Event Highlight** (Child Doctype)
- **Location:** `angaliawebapp/angalia_web_app/doctype/event_highlight/`
- **Purpose:** Stores individual highlights/key points for events
- **Fields:**
  - `highlight` (Data) - The highlight text

#### 2. **Event** (Main Doctype)
- **Location:** `angaliawebapp/angalia_web_app/doctype/event/`
- **Purpose:** Stores event information
- **Fields:**
  - `title` (Data) - Event title
  - `event_date` (Datetime) - Event date and time
  - `status` (Select) - Upcoming/Past (auto-updated based on date)
  - `published` (Check) - Controls visibility on website
  - `location` (Data) - Event venue/location
  - `registration_link` (Data) - External registration URL (optional)
  - `recording_link` (Data) - Link to event recording (for past events)
  - `short_description` (Small Text) - Brief description for listing
  - `description` (Text Editor) - Full event description
  - `highlights` (Table) - Event highlights (child table)
  - `who_should_attend` (Text) - Target audience description
  - `flyer` (Attach Image) - Event flyer/banner image
- **Auto-naming:** `EVT-{#####}`
- **Features:**
  - Auto-updates status based on event date
  - URL validation for links
  - Guest read permissions
  - Preview button to view event on website

#### 3. **Event Registration** (Main Doctype)
- **Location:** `angaliawebapp/angalia_web_app/doctype/event_registration/`
- **Purpose:** Stores event registrations from website
- **Fields:**
  - `event` (Link) - Links to Event doctype
  - `event_title` (Data) - Auto-fetched from event
  - `registration_date` (Datetime) - Auto-set to current time
  - `full_name` (Data) - Registrant's full name
  - `email` (Data) - Email address
  - `phone` (Data) - Phone number
  - `organization` (Data) - Company/organization (optional)
  - `position` (Data) - Job position/role (optional)
- **Auto-naming:** `EVT-REG-{#####}`
- **Features:**
  - Email validation
  - Phone number validation
  - Checks if event is published before allowing registration
  - Sends confirmation emails to both admin and registrant
  - Guest create permissions

### Frontend (React Components)

#### 1. **Events Listing Page** (`/events`)
- **Location:** `landing/src/pages/Events.jsx`
- **Features:**
  - Tabbed interface for Upcoming and Past events
  - Event cards with flyer, title, date, location, and description
  - "Register Now" button for upcoming events
  - "View Recording" link for past events (if available)
  - Responsive grid layout
  - Loading states and error handling
  - Empty state messages

#### 2. **Event Detail Page** (`/events/:eventId`)
- **Location:** `landing/src/pages/EventDetail.jsx`
- **Features:**
  - Full event details display
  - Large event banner/flyer
  - Event highlights list
  - Who should attend section
  - Registration sidebar (for upcoming events)
  - Embedded registration form
  - Support for external registration links
  - Recording link for past events
  - Back to events navigation
  - Loading and error states

#### 3. **Event Registration Form Component**
- **Location:** `landing/src/components/sections/EventRegistrationForm.jsx`
- **Features:**
  - Form validation using react-hook-form
  - Required fields: Full Name, Email, Phone
  - Optional fields: Organization, Position
  - Success/error message display
  - Loading states during submission
  - Privacy notice
  - Auto-scroll to success message

## Installation Steps

### Step 1: Install Doctypes in ERPNext

Run the following command from your frappe-bench directory:

```bash
cd /home/aicl/frappe-bench
bench --site [your-site-name] migrate
```

This will install all three doctypes (Event Highlight, Event, Event Registration) in your ERPNext instance.

### Step 2: Verify Doctype Installation

1. Log in to your ERPNext instance
2. Go to: **Desk → Angalia Web App module**
3. You should see three new doctypes:
   - Event
   - Event Highlight
   - Event Registration

### Step 3: Build Frontend

Navigate to the landing directory and build the React app:

```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing
yarn install  # If not already installed
yarn build
```

### Step 4: Copy Built Files to Public Directory

```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp
cp -r landing/dist/* angaliawebapp/public/landing/
```

### Step 5: Clear Cache and Restart

```bash
cd /home/aicl/frappe-bench
bench --site [your-site-name] clear-cache
bench restart
```

## Usage Guide

### Creating an Event

1. **Navigate to Event List:**
   - Go to: **Desk → Angalia Web App → Event → New**

2. **Fill in Event Details:**
   - **Title:** Enter the event name
   - **Event Date & Time:** Select date and time
   - **Status:** Will auto-update based on date (Upcoming/Past)
   - **Published:** Check this box to make the event visible on website
   - **Location:** Enter venue or "Online" for virtual events
   - **Registration Link:** (Optional) External registration URL
   - **Recording Link:** (Optional) For past events

3. **Add Description:**
   - **Short Description:** Brief summary for event cards
   - **Full Description:** Detailed event information (supports rich text)

4. **Add Highlights:**
   - Click "Add Row" in the Highlights table
   - Enter key points or topics to be covered
   - Add multiple highlights as needed

5. **Target Audience:**
   - Fill in "Who Should Attend" field
   - Describe the ideal attendees

6. **Upload Flyer:**
   - Click "Attach" in the Event Flyer section
   - Upload an image (recommended size: 1200x600px)

7. **Save and Publish:**
   - Click "Save"
   - Ensure "Published" is checked
   - Event will now appear on the website

### Viewing Events on Website

**Events Listing Page:**
- URL: `https://your-domain.com/events`
- Shows all published events in tabs (Upcoming/Past)

**Event Detail Page:**
- URL: `https://your-domain.com/events/EVT-00001`
- Shows full event details and registration form

### Managing Registrations

1. **View Registrations:**
   - Go to: **Desk → Angalia Web App → Event Registration**
   - Filter by event to see specific event registrations

2. **Export Registrations:**
   - Click "Menu" → "Export"
   - Choose format (Excel, CSV)

3. **Email Notifications:**
   - Admin receives notification for each new registration
   - Registrant receives confirmation email automatically

### Email Configuration

Ensure your ERPNext email settings are configured:

1. Go to: **Setup → Email → Email Account**
2. Configure your SMTP settings
3. Test email sending

Default admin email is set to: `business@aicl.co.tz`
You can change this in the Python files if needed.

## API Endpoints

The following API endpoints are available for the frontend:

### Get Published Events
```javascript
// Get all published events filtered by status
GET /api/method/angaliawebapp.angalia_web_app.doctype.event.event.get_published_events
Parameters: status (optional) - "Upcoming" or "Past"
```

### Get Event Details
```javascript
// Get detailed information about a specific event
GET /api/method/angaliawebapp.angalia_web_app.doctype.event.event.get_event_details
Parameters: event_name (required) - Event ID (e.g., "EVT-00001")
```

### Create Event Registration
```javascript
// Create a new event registration
POST /api/resource/Event Registration
Body: {
  event: "EVT-00001",
  full_name: "John Doe",
  email: "john@example.com",
  phone: "+255123456789",
  organization: "Company Name",
  position: "Manager"
}
```

## Customization Options

### Changing Email Templates

Edit the email templates in:
- `angaliawebapp/angalia_web_app/doctype/event_registration/event_registration.py`

Look for the `send_admin_notification_email()` and `send_user_confirmation_email()` methods.

### Changing Styles

The React components use inline styles and Bootstrap classes. To customize:
1. Edit the component files in `landing/src/pages/` and `landing/src/components/sections/`
2. Rebuild the frontend
3. Copy to public directory

### Adding More Fields

To add fields to Event or Event Registration:
1. Edit the JSON file in the doctype directory
2. Run `bench migrate` to update the database
3. Update the React components to display/collect the new fields

## Troubleshooting

### Events Not Showing on Website

1. **Check if event is published:**
   - Open event in ERPNext
   - Ensure "Published" checkbox is checked

2. **Check permissions:**
   - Guest role should have read permission on Event doctype

3. **Clear cache:**
   ```bash
   bench --site [your-site-name] clear-cache
   ```

### Registration Form Not Working

1. **Check Guest permissions:**
   - Guest role should have create permission on Event Registration

2. **Check email configuration:**
   - Verify SMTP settings in ERPNext

3. **Check browser console:**
   - Open browser developer tools
   - Look for JavaScript errors

### Images Not Loading

1. **Check file permissions:**
   ```bash
   chmod -R 755 /home/aicl/frappe-bench/sites/[your-site]/public/files
   ```

2. **Verify image upload:**
   - Ensure image was uploaded successfully in ERPNext
   - Check the flyer field has a value

## File Structure

```
angaliawebapp/
├── angalia_web_app/
│   └── doctype/
│       ├── event/
│       │   ├── __init__.py
│       │   ├── event.json
│       │   ├── event.py
│       │   ├── event.js
│       │   └── test_event.py
│       ├── event_highlight/
│       │   ├── __init__.py
│       │   ├── event_highlight.json
│       │   ├── event_highlight.py
│       │   ├── event_highlight.js
│       │   └── test_event_highlight.py
│       └── event_registration/
│           ├── __init__.py
│           ├── event_registration.json
│           ├── event_registration.py
│           ├── event_registration.js
│           └── test_event_registration.py
└── landing/
    └── src/
        ├── pages/
        │   ├── Events.jsx
        │   └── EventDetail.jsx
        ├── components/
        │   └── sections/
        │       └── EventRegistrationForm.jsx
        └── App.jsx
```

## Support

For issues or questions:
- Email: business@aicl.co.tz
- Phone: +255 768 017 100 / +255 696 240 077

## Next Steps

1. Run `bench migrate` to install the doctypes
2. Create your first event in ERPNext
3. Test the events page on your website
4. Test the registration form
5. Verify email notifications are working

## Notes

- Events automatically change status from "Upcoming" to "Past" based on the event date
- All registrations are stored in ERPNext for easy management
- Email notifications are sent automatically upon registration
- The system supports both built-in registration forms and external registration links
- Images are stored in ERPNext's file system and served via the public URL
