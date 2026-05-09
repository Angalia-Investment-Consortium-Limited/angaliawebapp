# Event Management System - Quick Start Guide

## 🚀 Quick Installation (5 Minutes)

### Step 1: Install Doctypes
```bash
cd /home/aicl/frappe-bench
bench --site [your-site-name] migrate
```

### Step 2: Build Frontend
```bash
cd apps/angaliawebapp/landing
yarn build
cd ..
cp -r landing/dist/* angaliawebapp/public/landing/
```

### Step 3: Restart
```bash
bench --site [your-site-name] clear-cache
bench restart
```

## ✅ Verify Installation

1. **Check ERPNext:**
   - Login to ERPNext
   - Go to: Angalia Web App module
   - You should see: Event, Event Highlight, Event Registration

2. **Check Website:**
   - Open: `https://your-domain.com/events`
   - Page should load (may be empty if no events created)

## 📝 Create Your First Event

### In ERPNext:

1. **Navigate:** Desk → Angalia Web App → Event → New

2. **Fill Required Fields:**
   - Title: "Digital Transformation Workshop"
   - Event Date: [Select future date and time]
   - ✅ Check "Published"
   - Location: "AICL Office, Dar es Salaam"

3. **Add Description:**
   - Short Description: "Learn digital transformation strategies"
   - Full Description: Add detailed information

4. **Add Highlights:**
   - Click "Add Row"
   - Add 3-5 key points

5. **Upload Flyer:**
   - Click "Attach"
   - Upload image (recommended: 1200x600px)

6. **Save:** Click "Save" button

## 🌐 View on Website

1. Open: `https://your-domain.com/events`
2. Your event should appear in "Upcoming Events"
3. Click "Register Now" to see event details
4. Test the registration form

## 📧 Email Configuration

Ensure emails are configured in ERPNext:
- Setup → Email → Email Account
- Configure SMTP settings
- Test email sending

## 🎯 Key Features

### Events Listing Page (`/events`)
- ✅ Tabbed view: Upcoming / Past events
- ✅ Event cards with images
- ✅ Register Now buttons
- ✅ View Recording links (past events)

### Event Detail Page (`/events/EVT-00001`)
- ✅ Full event information
- ✅ Event highlights
- ✅ Registration form
- ✅ Email confirmations

### Event Registration
- ✅ Form validation
- ✅ Auto-save to ERPNext
- ✅ Email to admin
- ✅ Email to registrant

## 📊 Managing Registrations

**View Registrations:**
- Desk → Angalia Web App → Event Registration
- Filter by event
- Export to Excel/CSV

**Email Notifications:**
- Admin: business@aicl.co.tz
- User: Confirmation email sent automatically

## 🔧 Common Tasks

### Make Event Visible
- Open event in ERPNext
- Check "Published" checkbox
- Save

### Add Recording Link (Past Events)
- Open event
- Fill "Recording Link" field
- Save

### Change Admin Email
Edit file: `angaliawebapp/angalia_web_app/doctype/event_registration/event_registration.py`
Line 35: Change `business@aicl.co.tz` to your email

## 🐛 Troubleshooting

### Events Not Showing
```bash
# Clear cache
bench --site [your-site-name] clear-cache
bench restart
```

### Registration Not Working
- Check Guest permissions on Event Registration doctype
- Verify email configuration

### Images Not Loading
```bash
# Fix permissions
chmod -R 755 /home/aicl/frappe-bench/sites/[your-site]/public/files
```

## 📚 Documentation

- **Full Guide:** `EVENT_IMPLEMENTATION_GUIDE.md`
- **Testing Checklist:** `EVENT_TESTING_CHECKLIST.md`
- **TODO List:** `EVENT_IMPLEMENTATION_TODO.md`

## 🆘 Support

- Email: business@aicl.co.tz
- Phone: +255 768 017 100
- Phone: +255 696 240 077

## 🎉 You're Ready!

Your event management system is now installed and ready to use. Create your first event and test the registration flow!
