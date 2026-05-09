# CEPRA Free Trial Form - Deployment Guide for Server

## Overview
This guide will help you deploy the CEPRA Free Trial Form to your production server when you're ready.

## What Has Been Completed (Offline)

✅ **Backend Files Created:**
- Frappe DocType: `CEPRA Free Trial`
- Location: `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/`
- Files:
  - `__init__.py`
  - `cepra_free_trial.json` (DocType definition)
  - `cepra_free_trial.py` (Python controller with validation & email)
  - `cepra_free_trial.js` (Frappe UI customization)
  - `test_cepra_free_trial.py` (Test file)

✅ **Frontend Files Created:**
- React Form Component: `CepraFreeTrialForm.jsx`
- Location: `angaliawebapp/landing/src/components/sections/`
- Updated: `angaliawebapp/landing/src/pages/Cepra.jsx`

✅ **Documentation Created:**
- `TODO.md` - Task tracking
- `CEPRA_FREE_TRIAL_IMPLEMENTATION.md` - Full implementation details
- `DEPLOYMENT_GUIDE.md` - This file

## Deployment Steps for Your Server

### Step 1: Push Code to Repository

```bash
# Navigate to your project directory
cd /Users/apple/Documents/AICL/SERVER\ PROJECTS/angaliawebapp

# Check git status
git status

# Add all new files
git add .

# Commit changes
git commit -m "Add CEPRA Free Trial Form with Frappe integration"

# Push to your repository
git push origin main  # or your branch name
```

### Step 2: Pull Code on Server

SSH into your server and pull the latest code:

```bash
# SSH to your server
ssh user@your-server.com

# Navigate to your Frappe bench
cd /path/to/frappe-bench

# Navigate to your app
cd apps/angaliawebapp

# Pull latest changes
git pull origin main

# Go back to bench directory
cd ../..
```

### Step 3: Install DocType in Frappe

```bash
# From your Frappe bench directory
bench migrate

# This will:
# - Create the CEPRA Free Trial DocType in database
# - Set up all fields and permissions
# - Make it available in Frappe UI
```

### Step 4: Build React Application

```bash
# Navigate to the landing directory
cd apps/angaliawebapp/landing

# Install dependencies (if needed)
yarn install

# Build the React application
yarn build

# This will:
# - Build production-ready files
# - Copy to angaliawebapp/public/landing/
# - Copy index.html to angaliawebapp/www/landing.html
```

### Step 5: Clear Cache and Restart

```bash
# Go back to bench directory
cd /path/to/frappe-bench

# Clear cache
bench clear-cache

# Restart bench
bench restart

# Or if using supervisor
sudo supervisorctl restart all
```

### Step 6: Verify Installation

#### A. Check DocType in Frappe
1. Log in to your Frappe instance
2. Search for "CEPRA Free Trial" in the search bar
3. You should see the DocType
4. Click to open and verify all fields are present

#### B. Check Website
1. Navigate to: `https://your-domain.com/customization-enterprise-resource-plannig`
2. Scroll down to see the "Start Your Free CEPRA Trial" form
3. Verify the form displays correctly

#### C. Test Form Submission
1. Fill out the form with test data:
   - Full Name: Test User
   - Company: Test Company
   - Email: test@example.com
   - Phone: +255 123 456 789
   - Preferred Module: Accounting
2. Submit the form
3. Check for success message
4. Verify entry in Frappe under "CEPRA Free Trial"

### Step 7: Configure Email Notifications

#### A. Set Admin Email
1. Go to Frappe → Setup → System Settings
2. Update "Email Footer Address" to your admin email
3. Save

#### B. Configure SMTP (if not already done)
1. Go to Frappe → Email Domain
2. Add your email domain
3. Configure SMTP settings:
   - SMTP Server: smtp.gmail.com (or your provider)
   - Port: 587 (TLS) or 465 (SSL)
   - Username: your-email@domain.com
   - Password: your-app-password
4. Enable "Use TLS" or "Use SSL"
5. Save and test email

#### C. Test Email Notification
1. Submit a test form
2. Check if admin receives email notification
3. Check Frappe error logs if email fails

## Troubleshooting

### Issue: DocType Not Found After Migration

**Solution:**
```bash
# Check if migration ran successfully
bench --site your-site.name migrate

# Check for errors in logs
bench --site your-site.name console
```

### Issue: Form Not Appearing on Website

**Possible Causes & Solutions:**

1. **Build didn't complete:**
   ```bash
   cd apps/angaliawebapp/landing
   yarn build
   ```

2. **Files not copied:**
   ```bash
   # Check if files exist
   ls -la apps/angaliawebapp/angaliawebapp/public/landing/
   ls -la apps/angaliawebapp/angaliawebapp/www/landing.html
   ```

3. **Cache issue:**
   ```bash
   bench clear-cache
   bench restart
   ```

4. **Browser cache:**
   - Clear browser cache
   - Try incognito/private mode
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Form Submission Fails

**Check:**

1. **Browser Console:**
   - Open Developer Tools (F12)
   - Check Console tab for errors
   - Check Network tab for failed API calls

2. **Frappe Permissions:**
   ```bash
   # Check if Guest has create permission
   bench --site your-site.name console
   
   # In console:
   frappe.get_doc("DocType", "CEPRA Free Trial").permissions
   ```

3. **Frappe Error Logs:**
   ```bash
   # View recent errors
   bench --site your-site.name console
   
   # In console:
   frappe.get_all("Error Log", limit=10, order_by="creation desc")
   ```

### Issue: Email Notifications Not Sending

**Check:**

1. **SMTP Configuration:**
   - Verify SMTP settings in Email Domain
   - Test email from Frappe UI

2. **Email Queue:**
   ```bash
   bench --site your-site.name console
   
   # Check email queue
   frappe.get_all("Email Queue", filters={"status": "Error"})
   ```

3. **Error Logs:**
   - Check Frappe error logs for email-related errors
   - Look for SMTP authentication failures

## Production Checklist

Before going live, ensure:

- [ ] Code pushed to repository
- [ ] Code pulled on server
- [ ] `bench migrate` completed successfully
- [ ] React app built successfully
- [ ] Cache cleared and bench restarted
- [ ] DocType visible in Frappe UI
- [ ] Form visible on website
- [ ] Test form submission successful
- [ ] Data saved correctly in Frappe
- [ ] Email notifications working
- [ ] Responsive design tested on:
  - [ ] Desktop
  - [ ] Tablet
  - [ ] Mobile
- [ ] Error handling tested
- [ ] Admin email configured
- [ ] SMTP configured and tested

## Monitoring

After deployment, monitor:

1. **Form Submissions:**
   - Check "CEPRA Free Trial" list regularly
   - Follow up with leads promptly

2. **Error Logs:**
   - Monitor Frappe error logs
   - Check for form submission failures

3. **Email Delivery:**
   - Verify notifications are being sent
   - Check spam folders if emails not received

## Rollback Plan

If issues occur after deployment:

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# On server
cd /path/to/frappe-bench/apps/angaliawebapp
git pull origin main

# Rebuild
cd landing
yarn build

# Clear cache and restart
cd /path/to/frappe-bench
bench clear-cache
bench restart
```

## Support

For issues during deployment:
- Check error logs first
- Review this guide's troubleshooting section
- Contact: business@aicl.co.tz

## Next Steps After Deployment

1. **Test thoroughly** on production
2. **Monitor submissions** for first few days
3. **Gather feedback** from users
4. **Optimize** based on usage patterns
5. **Document** any custom configurations

## Files to Commit

Make sure these files are in your git repository:

```
angaliawebapp/
├── angaliawebapp/
│   └── angalia_web_app/
│       └── doctype/
│           └── cepra_free_trial/
│               ├── __init__.py
│               ├── cepra_free_trial.json
│               ├── cepra_free_trial.py
│               ├── cepra_free_trial.js
│               └── test_cepra_free_trial.py
└── landing/
    └── src/
        ├── components/
        │   └── sections/
        │       └── CepraFreeTrialForm.jsx
        └── pages/
            └── Cepra.jsx (modified)
```

## Build Command Reference

```bash
# Development mode (with hot reload)
cd apps/angaliawebapp/landing
yarn dev

# Production build
yarn build

# Preview production build locally
yarn preview
```

## Useful Commands

```bash
# Check bench status
bench status

# View logs
bench --site your-site.name logs

# Restart specific service
sudo supervisorctl restart frappe-bench-web:
sudo supervisorctl restart frappe-bench-workers:

# Check running processes
bench doctor

# Update bench
bench update
```

---

**Remember:** Always test on a staging environment before deploying to production!
