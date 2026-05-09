# Event Management System - Deployment Guide

## Overview
This guide will help you deploy the Event Management System with three custom doctypes:
- **Angalia Event** - Main event doctype
- **Angalia Event Highlight** - Child table for event highlights
- **Angalia Event Registration** - Registration submissions

## Prerequisites
- Frappe/ERPNext instance running
- Access to bench commands
- Node.js and npm/yarn installed for frontend

---

## Step 1: Install Doctypes in ERPNext

### 1.1 Navigate to Bench Directory
```bash
cd /home/aicl/frappe-bench
```

### 1.2 Install the App (if not already installed)
```bash
bench --site [your-site-name] install-app angaliawebapp
```

### 1.3 Migrate Database
This will create the new doctypes in the database:
```bash
bench --site [your-site-name] migrate
```

### 1.4 Clear Cache
```bash
bench --site [your-site-name] clear-cache
bench --site [your-site-name] clear-website-cache
```

### 1.5 Restart Bench
```bash
bench restart
```

---

## Step 2: Verify Doctypes in ERPNext

1. Log in to your ERPNext instance
2. Go to **Desk** → **Customize** → **DocType List**
3. Search for and verify these doctypes exist:
   - Angalia Event
   - Angalia Event Highlight
   - Angalia Event Registration

---

## Step 3: Configure Permissions

### 3.1 Angalia Event Permissions
- **System Manager**: Full access (Create, Read, Write, Delete)
- **Guest**: Read only (for public website access)

### 3.2 Angalia Event Registration Permissions
- **System Manager**: Full access
- **Guest**: Create and Read (for public registration)

### 3.3 Verify Permissions
```bash
bench --site [your-site-name] console
```

Then in the console:
```python
import frappe
# Check Angalia Event permissions
frappe.get_doc("DocType", "Angalia Event").permissions

# Check Angalia Event Registration permissions
frappe.get_doc("DocType", "Angalia Event Registration").permissions
```

---

## Step 4: Build and Deploy Frontend

### 4.1 Navigate to Landing Directory
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing
```

### 4.2 Install Dependencies (if needed)
```bash
yarn install
# or
npm install
```

### 4.3 Build Production Bundle
```bash
yarn build
# or
npm run build
```

### 4.4 Copy Build to Public Directory
```bash
cp -r dist/* ../angaliawebapp/public/landing/
```

### 4.5 Clear Website Cache
```bash
cd /home/aicl/frappe-bench
bench --site [your-site-name] clear-website-cache
```

---

## Step 5: Test the System

### 5.1 Create a Test Event
1. Log in to ERPNext
2. Go to **Angalia Event** list
3. Click **New**
4. Fill in the details:
   - Title: "Test Event"
   - Event Date: Future date
   - Status: Upcoming
   - Published: ✓ (checked)
   - Short Description: "This is a test event"
   - Upload a flyer image
   - Add some highlights
5. Save the event

### 5.2 Test Events Listing Page
Visit: `https://your-domain.com/events`

You should see:
- The test event in the "Upcoming Events" tab
- Event card with flyer, title, date, and "Register Now" button

### 5.3 Test Event Detail Page
Click on the event to visit: `https://your-domain.com/events/AEVT-00001`

You should see:
- Full event details
- Event flyer
- Highlights list
- Registration form or button

### 5.4 Test Registration
1. Fill out the registration form
2. Submit
3. Check for:
   - Success message on the page
   - Confirmation email sent to registrant
   - Notification email sent to admin
   - Registration record created in ERPNext

### 5.5 Verify in ERPNext
1. Go to **Angalia Event Registration** list
2. You should see the new registration
3. Click to view details
4. Try the "Resend Confirmation Email" button

---

## Step 6: Email Configuration

### 6.1 Configure Email Account
1. Go to **Email Account** in ERPNext
2. Set up your SMTP settings
3. Test email sending

### 6.2 Update Admin Email
1. Go to **System Settings**
2. Set **Email Footer Address** to your admin email (e.g., business@aicl.co.tz)

### 6.3 Test Email Notifications
Create a test registration and verify:
- User receives confirmation email
- Admin receives notification email

---

## Step 7: Production Checklist

### 7.1 Security
- [ ] SSL certificate installed and working
- [ ] CORS configured properly
- [ ] Guest permissions reviewed and minimal
- [ ] Rate limiting enabled for API endpoints

### 7.2 Performance
- [ ] Production build created and deployed
- [ ] Static assets cached properly
- [ ] Database indexes created (automatic with migration)
- [ ] Redis cache configured

### 7.3 Monitoring
- [ ] Error logging enabled
- [ ] Email delivery monitoring
- [ ] Form submission tracking
- [ ] Regular database backups

### 7.4 Content
- [ ] Default event flyer image added
- [ ] Email templates reviewed and customized
- [ ] Contact information updated in emails
- [ ] Privacy policy link added (if needed)

---

## Troubleshooting

### Issue: Doctypes not appearing
**Solution:**
```bash
bench --site [your-site-name] migrate
bench --site [your-site-name] clear-cache
bench restart
```

### Issue: Frontend not updating
**Solution:**
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing
yarn build
cp -r dist/* ../angaliawebapp/public/landing/
cd /home/aicl/frappe-bench
bench --site [your-site-name] clear-website-cache
```

### Issue: Emails not sending
**Solution:**
1. Check Email Account configuration in ERPNext
2. Verify SMTP settings
3. Check error logs: `bench --site [your-site-name] logs`
4. Test email manually from ERPNext

### Issue: Permission denied errors
**Solution:**
```bash
# Check doctype permissions
bench --site [your-site-name] console

# In console:
import frappe
frappe.get_doc("DocType", "Angalia Event Registration").permissions
```

### Issue: Images not displaying
**Solution:**
1. Check file upload permissions
2. Verify file path in database
3. Check nginx/apache configuration for serving static files
4. Ensure public folder has correct permissions

---

## Maintenance

### Regular Tasks
1. **Weekly**: Review new registrations
2. **Monthly**: Clean up old event data (optional)
3. **Quarterly**: Review and update email templates
4. **As needed**: Update event status (Upcoming → Past)

### Backup Strategy
```bash
# Backup database
bench --site [your-site-name] backup

# Backup files
bench --site [your-site-name] backup --with-files
```

### Update Procedure
1. Pull latest code changes
2. Run migrations: `bench --site [your-site-name] migrate`
3. Rebuild frontend: `cd landing && yarn build`
4. Copy build files to public directory
5. Clear cache and restart

---

## Support

For issues or questions:
- Email: business@aicl.co.tz
- Phone: +255 768 017 100
- Phone: +255 696 240 077

---

## Appendix: File Structure

```
angaliawebapp/
├── angalia_web_app/
│   └── doctype/
│       ├── angalia_event/
│       │   ├── __init__.py
│       │   ├── angalia_event.json
│       │   ├── angalia_event.py
│       │   ├── angalia_event.js
│       │   └── test_angalia_event.py
│       ├── angalia_event_highlight/
│       │   ├── __init__.py
│       │   ├── angalia_event_highlight.json
│       │   ├── angalia_event_highlight.py
│       │   ├── angalia_event_highlight.js
│       │   └── test_angalia_event_highlight.py
│       └── angalia_event_registration/
│           ├── __init__.py
│           ├── angalia_event_registration.json
│           ├── angalia_event_registration.py
│           ├── angalia_event_registration.js
│           └── test_angalia_event_registration.py
└── landing/
    └── src/
        ├── pages/
        │   ├── Events.jsx
        │   └── EventDetail.jsx
        └── components/
            └── sections/
                └── EventRegistrationForm.jsx
```

---

**Last Updated:** January 2025
**Version:** 1.0.0
