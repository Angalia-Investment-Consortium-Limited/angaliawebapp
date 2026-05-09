# Event Management System - Testing Checklist

## Pre-Testing Setup

### 1. Install Doctypes
```bash
cd /home/aicl/frappe-bench
bench --site [your-site-name] migrate
```

**Expected Result:** Three new doctypes should be installed:
- Event Highlight
- Event
- Event Registration

### 2. Verify Installation
- [ ] Log in to ERPNext
- [ ] Navigate to Angalia Web App module
- [ ] Confirm all three doctypes are visible

### 3. Build and Deploy Frontend
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing
yarn build
cd ..
cp -r landing/dist/* angaliawebapp/public/landing/
bench --site [your-site-name] clear-cache
bench restart
```

## Backend Testing (ERPNext)

### Test 1: Create Event Highlight (Child Doctype)
- [ ] This is a child table, no direct testing needed
- [ ] Will be tested as part of Event creation

### Test 2: Create Event
1. **Navigate to Event List:**
   - [ ] Go to: Desk → Angalia Web App → Event → New

2. **Fill Basic Information:**
   - [ ] Enter Title: "Test Event - Digital Transformation Workshop"
   - [ ] Set Event Date: [Future date and time]
   - [ ] Verify Status auto-sets to "Upcoming"
   - [ ] Check "Published" checkbox
   - [ ] Enter Location: "AICL Office, Dar es Salaam"

3. **Add Descriptions:**
   - [ ] Short Description: "Learn about digital transformation strategies"
   - [ ] Full Description: Add detailed HTML content

4. **Add Highlights:**
   - [ ] Click "Add Row" in Highlights table
   - [ ] Add highlight: "Cloud Computing Strategies"
   - [ ] Add another: "AI and Machine Learning"
   - [ ] Add another: "Digital Marketing Trends"

5. **Add Target Audience:**
   - [ ] Fill "Who Should Attend": "Business owners, IT managers, and entrepreneurs"

6. **Upload Flyer:**
   - [ ] Click "Attach" in Event Flyer section
   - [ ] Upload a test image (recommended: 1200x600px)
   - [ ] Verify image appears in form

7. **Save Event:**
   - [ ] Click "Save"
   - [ ] Verify event is saved successfully
   - [ ] Note the Event ID (e.g., EVT-00001)

8. **Test Preview Button:**
   - [ ] Click "Preview on Website" button
   - [ ] Verify it opens the event detail page in new tab

### Test 3: Create Past Event
1. **Create Another Event:**
   - [ ] Title: "Past Event - ERP Implementation Seminar"
   - [ ] Set Event Date: [Past date]
   - [ ] Verify Status auto-sets to "Past"
   - [ ] Check "Published"
   - [ ] Add Recording Link: "https://youtube.com/example"
   - [ ] Save

### Test 4: Test Event Registration (Manual)
1. **Navigate to Event Registration:**
   - [ ] Go to: Desk → Angalia Web App → Event Registration → New

2. **Fill Registration Form:**
   - [ ] Select Event: [Your test event]
   - [ ] Full Name: "John Doe"
   - [ ] Email: "john.doe@example.com"
   - [ ] Phone: "+255768123456"
   - [ ] Organization: "Test Company"
   - [ ] Position: "Manager"

3. **Save Registration:**
   - [ ] Click "Save"
   - [ ] Verify registration is saved
   - [ ] Check if confirmation emails were sent (check email logs)

## Frontend Testing (Website)

### Test 5: Events Listing Page
1. **Navigate to Events Page:**
   - [ ] Open browser: `https://your-domain.com/events`
   - [ ] Verify page loads without errors

2. **Test Upcoming Events Tab:**
   - [ ] Verify "Upcoming Events" tab is active by default
   - [ ] Verify your test upcoming event appears
   - [ ] Check event card displays:
     - [ ] Event flyer/image
     - [ ] Event title
     - [ ] Date and time (formatted correctly)
     - [ ] Location
     - [ ] Short description
     - [ ] "Register Now" button

3. **Test Past Events Tab:**
   - [ ] Click "Past Events" tab
   - [ ] Verify past event appears
   - [ ] Check event card displays:
     - [ ] Event flyer/image
     - [ ] Event title
     - [ ] Date and time
     - [ ] "View Details" button
     - [ ] "View Recording" button (if recording link exists)

4. **Test Empty States:**
   - [ ] If no upcoming events, verify empty state message
   - [ ] If no past events, verify empty state message

5. **Test Responsive Design:**
   - [ ] Resize browser to mobile size
   - [ ] Verify cards stack properly
   - [ ] Verify tabs work on mobile
   - [ ] Test on actual mobile device if possible

### Test 6: Event Detail Page
1. **Navigate to Event Detail:**
   - [ ] Click "Register Now" on an upcoming event
   - [ ] Verify URL is: `/events/EVT-00001`
   - [ ] Verify page loads without errors

2. **Verify Event Details Display:**
   - [ ] Large event banner/flyer displays correctly
   - [ ] Event title is prominent
   - [ ] Date and time formatted correctly
   - [ ] Location displays with icon
   - [ ] Status badge shows "Upcoming Event"
   - [ ] Full description renders (with HTML formatting)
   - [ ] Highlights list displays all items
   - [ ] "Who Should Attend" section displays

3. **Test Registration Sidebar:**
   - [ ] Registration sidebar is visible (sticky on scroll)
   - [ ] "Register for This Event" heading displays
   - [ ] "Register Now" button is present
   - [ ] Privacy notice displays

4. **Test Back Navigation:**
   - [ ] Click "Back to Events" button
   - [ ] Verify it returns to events listing page

5. **Test Past Event Detail:**
   - [ ] Navigate to a past event detail page
   - [ ] Verify status badge shows "Past Event"
   - [ ] Verify "Event Concluded" message in sidebar
   - [ ] If recording link exists, verify "Watch Event Recording" button
   - [ ] Verify registration form is NOT shown

### Test 7: Event Registration Form
1. **Open Registration Form:**
   - [ ] On upcoming event detail page
   - [ ] Click "Register Now" button
   - [ ] Verify form appears/scrolls into view

2. **Test Form Validation:**
   - [ ] Try submitting empty form
   - [ ] Verify required field errors appear:
     - [ ] Full Name required
     - [ ] Email required
     - [ ] Phone required
   
3. **Test Email Validation:**
   - [ ] Enter invalid email: "notanemail"
   - [ ] Try to submit
   - [ ] Verify "Invalid email address" error

4. **Test Phone Validation:**
   - [ ] Enter invalid phone: "abc123"
   - [ ] Try to submit
   - [ ] Verify phone validation error

5. **Test Successful Registration:**
   - [ ] Fill all required fields correctly:
     - Full Name: "Jane Smith"
     - Email: "jane.smith@example.com"
     - Phone: "+255712345678"
     - Organization: "ABC Company" (optional)
     - Position: "Director" (optional)
   - [ ] Click "COMPLETE REGISTRATION"
   - [ ] Verify loading state shows "SUBMITTING..."
   - [ ] Verify success message appears
   - [ ] Verify form is reset after submission

6. **Test Optional Fields:**
   - [ ] Submit form without Organization and Position
   - [ ] Verify submission succeeds

### Test 8: Email Notifications
1. **Check Admin Notification:**
   - [ ] After registration, check admin email (business@aicl.co.tz)
   - [ ] Verify email received with:
     - [ ] Subject: "New Event Registration: [Event Title]"
     - [ ] Event details table
     - [ ] Registrant information
     - [ ] Link to view in Frappe

2. **Check User Confirmation:**
   - [ ] Check registrant's email
   - [ ] Verify confirmation email received with:
     - [ ] Subject: "Registration Confirmed: [Event Title]"
     - [ ] Event details
     - [ ] What to expect section
     - [ ] Contact information
     - [ ] Professional formatting

3. **Test Email Logs:**
   - [ ] In ERPNext: Setup → Email → Email Queue
   - [ ] Verify both emails are in the queue
   - [ ] Check status (Sent/Failed)

## Integration Testing

### Test 9: End-to-End Flow
1. **Create Event in ERPNext:**
   - [ ] Create new event with all details
   - [ ] Upload flyer
   - [ ] Add highlights
   - [ ] Publish event

2. **View on Website:**
   - [ ] Navigate to /events
   - [ ] Verify event appears in listing
   - [ ] Click to view details

3. **Register for Event:**
   - [ ] Fill registration form
   - [ ] Submit registration
   - [ ] Verify success message

4. **Verify in ERPNext:**
   - [ ] Check Event Registration list
   - [ ] Verify new registration appears
   - [ ] Check all fields are populated correctly

5. **Verify Emails:**
   - [ ] Check both admin and user emails received

### Test 10: Permission Testing
1. **Test Guest Access:**
   - [ ] Open website in incognito/private mode
   - [ ] Navigate to /events
   - [ ] Verify events are visible
   - [ ] Try to register
   - [ ] Verify registration works without login

2. **Test ERPNext Permissions:**
   - [ ] Log in as System Manager
   - [ ] Verify full access to all doctypes
   - [ ] Try to create/edit/delete events
   - [ ] Try to view registrations

## Performance Testing

### Test 11: Load Testing
- [ ] Create 10+ events
- [ ] Navigate to events listing page
- [ ] Verify page loads quickly
- [ ] Check for any console errors
- [ ] Verify images load properly

### Test 12: Mobile Testing
- [ ] Test on actual mobile device (iOS/Android)
- [ ] Verify responsive design
- [ ] Test form submission on mobile
- [ ] Verify images scale properly
- [ ] Test touch interactions

## Error Handling Testing

### Test 13: Error Scenarios
1. **Invalid Event ID:**
   - [ ] Navigate to: /events/INVALID-ID
   - [ ] Verify "Event Not Found" page displays
   - [ ] Verify "Back to Events" button works

2. **Network Error:**
   - [ ] Disconnect internet
   - [ ] Try to load events page
   - [ ] Verify error message displays

3. **Form Submission Error:**
   - [ ] Simulate API error (if possible)
   - [ ] Verify error message displays
   - [ ] Verify form data is not lost

## Browser Compatibility Testing

### Test 14: Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Final Checklist

- [ ] All backend doctypes installed successfully
- [ ] Events can be created and edited in ERPNext
- [ ] Events display correctly on website
- [ ] Registration form works properly
- [ ] Email notifications are sent
- [ ] Responsive design works on all devices
- [ ] No console errors in browser
- [ ] Guest permissions work correctly
- [ ] Images load properly
- [ ] All links work correctly

## Issues Found

Document any issues found during testing:

| Test # | Issue Description | Severity | Status |
|--------|------------------|----------|--------|
|        |                  |          |        |

## Sign-Off

- [ ] All critical tests passed
- [ ] All issues documented
- [ ] System ready for production

**Tested By:** ___________________
**Date:** ___________________
**Signature:** ___________________
