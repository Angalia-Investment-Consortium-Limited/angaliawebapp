# Event Management System - Quick Deploy Guide

## 🚀 Quick Deployment (5 Minutes)

Follow these steps to deploy the Event Management System immediately.

---

## Step 1: Install Backend (2 minutes)

```bash
# Navigate to bench directory
cd /home/aicl/frappe-bench

# Migrate database to create doctypes
bench --site [your-site-name] migrate

# Clear cache
bench --site [your-site-name] clear-cache

# Restart
bench restart
```

**Expected Output:**
```
Migrating [your-site-name]
Executing angaliawebapp.patches.v1_0...
Created DocType: Angalia Event Highlight
Created DocType: Angalia Event
Created DocType: Angalia Event Registration
Migration complete!
```

---

## Step 2: Build Frontend (2 minutes)

```bash
# Navigate to landing directory
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing

# Build production bundle
yarn build

# Copy to public directory
cp -r dist/* ../angaliawebapp/public/landing/

# Clear website cache
cd /home/aicl/frappe-bench
bench --site [your-site-name] clear-website-cache
```

---

## Step 3: Verify Installation (1 minute)

### Check Doctypes
1. Log in to ERPNext: `https://your-domain.com`
2. Search for "Angalia Event" in the search bar
3. You should see:
   - Angalia Event
   - Angalia Event Registration

### Check Website
1. Visit: `https://your-domain.com/events`
2. You should see the Events page (empty initially)

---

## Step 4: Create Your First Event

### In ERPNext:
1. Go to **Angalia Event** → **New**
2. Fill in:
   - **Title:** "Welcome to Our Events"
   - **Event Date:** Select a future date
   - **Status:** Upcoming
   - **Published:** ✓ (Check this!)
   - **Short Description:** "Join us for exciting events"
   - **Location:** "Your venue"
3. Upload a flyer image
4. Add some highlights (click Add Row):
   - "Networking opportunities"
   - "Expert speakers"
   - "Free refreshments"
5. **Save**

### Verify on Website:
1. Visit: `https://your-domain.com/events`
2. You should see your event!
3. Click on it to view details
4. Test the registration form

---

## Step 5: Test Registration

1. Fill out the registration form
2. Submit
3. Check:
   - Success message appears
   - Email sent to registrant
   - Email sent to admin (business@aicl.co.tz)
   - Registration appears in ERPNext

---

## 🎯 You're Done!

Your Event Management System is now live and ready to use.

---

## 📋 Quick Reference

### URLs
- Events Listing: `/events`
- Event Detail: `/events/AEVT-00001`

### Doctypes
- **Angalia Event** - Manage events
- **Angalia Event Registration** - View registrations

### Key Features
- ✅ Upcoming/Past events tabs
- ✅ Event registration form
- ✅ Email notifications
- ✅ Image uploads
- ✅ Responsive design

---

## 🔧 Troubleshooting

### Issue: "Doctype not found"
```bash
bench --site [your-site-name] migrate
bench restart
```

### Issue: "Page not found"
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing
yarn build
cp -r dist/* ../angaliawebapp/public/landing/
bench --site [your-site-name] clear-website-cache
```

### Issue: "Permission denied"
Check that Guest role has:
- Read permission on Angalia Event
- Create permission on Angalia Event Registration

---

## 📞 Need Help?

**Contact AICL:**
- Email: business@aicl.co.tz
- Phone: +255 768 017 100

---

## 📚 Full Documentation

For detailed information, see:
- **EVENT_DEPLOYMENT_GUIDE.md** - Complete deployment guide
- **EVENT_SYSTEM_COMPLETE.md** - Full system documentation
- **EVENT_TESTING_CHECKLIST.md** - Testing procedures

---

**Quick Deploy Version:** 1.0.0
**Last Updated:** January 2025
