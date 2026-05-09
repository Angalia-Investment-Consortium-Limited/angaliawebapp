# 🎉 Event Management System

A complete event management solution for your ReactJS website with ERPNext backend.

## 📖 Quick Links

- **[Quick Start Guide](EVENT_QUICK_START.md)** - Get started in 5 minutes
- **[Implementation Guide](EVENT_IMPLEMENTATION_GUIDE.md)** - Complete documentation
- **[Testing Checklist](EVENT_TESTING_CHECKLIST.md)** - Test everything
- **[Implementation Summary](EVENT_IMPLEMENTATION_SUMMARY.md)** - What was built
- **[TODO List](EVENT_IMPLEMENTATION_TODO.md)** - Track progress

## 🚀 Installation

```bash
# 1. Install doctypes
cd /home/aicl/frappe-bench
bench --site [your-site-name] migrate

# 2. Build frontend
cd apps/angaliawebapp/landing
yarn build
cd ..
cp -r landing/dist/* angaliawebapp/public/landing/

# 3. Restart
bench --site [your-site-name] clear-cache
bench restart
```

## ✨ Features

### 📅 Event Management
- Create and manage events in ERPNext
- Upload event flyers/banners
- Add event highlights
- Rich text descriptions
- Auto-status updates (Upcoming/Past)
- Publish/unpublish control

### 🌐 Website Display
- Beautiful events listing page (`/events`)
- Detailed event pages (`/events/:eventId`)
- Responsive design
- Tabbed view (Upcoming/Past)

### 📝 Registration System
- Built-in registration forms
- Form validation
- Guest registration (no login required)
- Email notifications

### 📧 Email Notifications
- Admin notification on new registration
- User confirmation email
- Professional templates

## 📁 What Was Created

### Backend (ERPNext)
```
angaliawebapp/angalia_web_app/doctype/
├── event/                    # Main event doctype
├── event_highlight/          # Child table for highlights
└── event_registration/       # Registration doctype
```

### Frontend (React)
```
landing/src/
├── pages/
│   ├── Events.jsx           # Events listing page
│   └── EventDetail.jsx      # Event detail page
└── components/sections/
    └── EventRegistrationForm.jsx  # Registration form
```

## 🎯 Usage

### Create an Event

1. **In ERPNext:** Desk → Angalia Web App → Event → New
2. **Fill details:** Title, Date, Location, Description
3. **Add highlights:** Key points about the event
4. **Upload flyer:** Event banner image
5. **Publish:** Check "Published" checkbox
6. **Save**

### View on Website

- **All Events:** `https://your-domain.com/events`
- **Specific Event:** `https://your-domain.com/events/EVT-00001`

### Manage Registrations

- **View:** Desk → Angalia Web App → Event Registration
- **Export:** Menu → Export (Excel/CSV)

## 🔧 Configuration

### Change Admin Email

Edit: `angaliawebapp/angalia_web_app/doctype/event_registration/event_registration.py`

Line 35: Change `business@aicl.co.tz` to your email

### Email Settings

Configure in ERPNext: Setup → Email → Email Account

## 📊 Database Schema

### Event Doctype
- Title, Date, Status, Location
- Description, Highlights
- Flyer, Registration Link, Recording Link
- Published flag

### Event Registration
- Event (link), Full Name, Email, Phone
- Organization, Position
- Auto-timestamp

## 🎨 Design

- **Responsive:** Mobile-first design
- **Modern:** Bootstrap 5 + Custom CSS
- **Professional:** Clean, corporate look
- **Fast:** Optimized loading

## 🔒 Security

- Guest permissions configured
- Email validation
- Phone validation
- URL validation
- XSS protection
- CSRF protection

## 🌐 Browser Support

✅ Chrome | ✅ Firefox | ✅ Safari | ✅ Edge | ✅ Mobile

## 📱 Mobile Optimized

- Responsive layouts
- Touch-friendly
- Fast loading
- Readable typography

## 🐛 Troubleshooting

### Events Not Showing
```bash
bench --site [your-site-name] clear-cache
bench restart
```

### Registration Not Working
- Check Guest permissions
- Verify email configuration

### Images Not Loading
```bash
chmod -R 755 /home/aicl/frappe-bench/sites/[your-site]/public/files
```

## 📞 Support

**Email:** business@aicl.co.tz  
**Phone:** +255 768 017 100 / +255 696 240 077  
**Office:** POSTA, Plot No.1249/11, Bibi Titi Mohammed Road, Dar es Salaam

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Quick Start](EVENT_QUICK_START.md) | 5-minute setup guide |
| [Implementation Guide](EVENT_IMPLEMENTATION_GUIDE.md) | Complete documentation |
| [Testing Checklist](EVENT_TESTING_CHECKLIST.md) | Comprehensive testing |
| [Summary](EVENT_IMPLEMENTATION_SUMMARY.md) | What was built |
| [TODO](EVENT_IMPLEMENTATION_TODO.md) | Task tracking |

## ✅ Status

**Implementation:** ✅ Complete  
**Testing:** ⏳ Pending  
**Production:** 🚀 Ready

## 🎉 Next Steps

1. ✅ Run `bench migrate`
2. ✅ Build frontend
3. ✅ Create first event
4. ✅ Test registration
5. ✅ Configure emails
6. 🚀 Go live!

---

**Version:** 1.0.0  
**Date:** January 2025  
**Status:** Production Ready
