# Pre-Deployment Checklist for CEPRA Free Trial Form

## ✅ Files Created - Verification

### Backend Files (Frappe DocType)
- [x] `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/__init__.py`
- [x] `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/cepra_free_trial.json`
- [x] `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/cepra_free_trial.py`
- [x] `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/cepra_free_trial.js`
- [x] `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/test_cepra_free_trial.py`

### Frontend Files (React)
- [x] `angaliawebapp/landing/src/components/sections/CepraFreeTrialForm.jsx`
- [x] `angaliawebapp/landing/src/pages/Cepra.jsx` (modified)

### Documentation Files
- [x] `TODO.md`
- [x] `CEPRA_FREE_TRIAL_IMPLEMENTATION.md`
- [x] `DEPLOYMENT_GUIDE.md`
- [x] `IMPLEMENTATION_SUMMARY.md`
- [x] `PRE_DEPLOYMENT_CHECKLIST.md` (this file)

## 📋 Before Committing to Git

### Code Review
- [ ] Review all created files for correctness
- [ ] Check for any hardcoded values that need to be changed
- [ ] Verify import statements are correct
- [ ] Ensure no sensitive information is in code

### Git Operations
- [ ] Check git status: `git status`
- [ ] Review changes: `git diff`
- [ ] Add files: `git add .`
- [ ] Commit with message: `git commit -m "Add CEPRA Free Trial Form with Frappe integration"`
- [ ] Push to repository: `git push origin main` (or your branch)

## 🚀 Server Deployment Steps

### 1. Preparation
- [ ] Backup your current server/database
- [ ] Ensure you have SSH access to server
- [ ] Verify Frappe bench is accessible
- [ ] Check server has enough disk space

### 2. Pull Code
```bash
# SSH to server
ssh user@your-server.com

# Navigate to app directory
cd /path/to/frappe-bench/apps/angaliawebapp

# Pull latest code
git pull origin main

# Verify files are present
ls -la angaliawebapp/angalia_web_app/doctype/cepra_free_trial/
ls -la landing/src/components/sections/CepraFreeTrialForm.jsx
```

### 3. Install DocType
```bash
# Go to bench directory
cd /path/to/frappe-bench

# Run migration
bench migrate

# Check for errors in output
# Should see: "Migrating angaliawebapp"
```

### 4. Build React App
```bash
# Navigate to landing directory
cd apps/angaliawebapp/landing

# Install dependencies (if needed)
yarn install

# Build production files
yarn build

# Verify build output
ls -la ../angaliawebapp/public/landing/
```

### 5. Restart Services
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

## 🧪 Testing Checklist (On Server)

### Visual Testing
- [ ] Navigate to CEPRA page: `/customization-enterprise-resource-plannig`
- [ ] Verify form section appears
- [ ] Check form styling matches site design
- [ ] Test on desktop browser
- [ ] Test on tablet (or responsive mode)
- [ ] Test on mobile (or responsive mode)

### Functional Testing
- [ ] Fill out form with valid data
- [ ] Submit form
- [ ] Verify success message appears
- [ ] Check form resets after submission

### Validation Testing
- [ ] Try submitting empty form (should show errors)
- [ ] Test invalid email format
- [ ] Test invalid phone format
- [ ] Verify required field indicators work
- [ ] Check optional fields can be left empty

### Backend Testing
- [ ] Log into Frappe
- [ ] Search for "CEPRA Free Trial"
- [ ] Open DocType list
- [ ] Verify test submission appears
- [ ] Check all fields are populated correctly
- [ ] Verify timestamps are correct

### Email Testing
- [ ] Check admin email for notification
- [ ] Verify email contains all form data
- [ ] Check email formatting is correct
- [ ] Test "Send Follow-up Email" button in Frappe

### Error Handling Testing
- [ ] Test with network disconnected (should show error)
- [ ] Test with invalid data (should show validation)
- [ ] Check browser console for errors
- [ ] Review Frappe error logs

## 🔧 Configuration Tasks

### Email Setup
- [ ] Go to Frappe → Setup → System Settings
- [ ] Verify/Update "Email Footer Address"
- [ ] Test email sending from Frappe
- [ ] Configure SMTP if not already done

### Permissions Check
- [ ] Verify Guest can create CEPRA Free Trial records
- [ ] Check System Manager has full access
- [ ] Test form submission while logged out

### Performance Check
- [ ] Test page load speed
- [ ] Check form submission speed
- [ ] Verify no console errors
- [ ] Check network tab for failed requests

## 📊 Monitoring Setup

### Initial Monitoring
- [ ] Set up email alerts for new submissions
- [ ] Monitor error logs for first 24 hours
- [ ] Check submission rate
- [ ] Verify all emails are being sent

### Ongoing Monitoring
- [ ] Daily: Check for new submissions
- [ ] Weekly: Review error logs
- [ ] Monthly: Analyze submission patterns
- [ ] As needed: Follow up with leads

## 🐛 Troubleshooting Reference

### If form doesn't appear:
1. Check build completed: `ls -la apps/angaliawebapp/angaliawebapp/public/landing/`
2. Clear browser cache
3. Check browser console for errors
4. Verify files were copied correctly

### If form submission fails:
1. Check browser console
2. Check network tab in DevTools
3. Review Frappe error logs
4. Verify DocType permissions
5. Check CSRF token issues

### If emails don't send:
1. Check SMTP configuration
2. Review email queue in Frappe
3. Check error logs
4. Test email from Frappe UI
5. Verify admin email address

## 📝 Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Test form thoroughly
- [ ] Submit test request
- [ ] Verify email notification
- [ ] Monitor for errors
- [ ] Document any issues

### Short-term (Week 1)
- [ ] Review all submissions
- [ ] Follow up with test leads
- [ ] Gather user feedback
- [ ] Fix any reported issues
- [ ] Optimize if needed

### Long-term (Month 1)
- [ ] Analyze submission data
- [ ] Review conversion rates
- [ ] Consider enhancements
- [ ] Update documentation
- [ ] Train team on management

## 🎯 Success Criteria

The deployment is successful when:
- [x] All files are committed to git
- [ ] Code is deployed to server
- [ ] DocType is created in Frappe
- [ ] Form appears on CEPRA page
- [ ] Form submissions work correctly
- [ ] Data is saved in Frappe
- [ ] Email notifications are sent
- [ ] No errors in logs
- [ ] Responsive design works
- [ ] Admin can manage submissions

## 📞 Support Contacts

**Technical Issues:**
- Review: `DEPLOYMENT_GUIDE.md`
- Check: Frappe error logs
- Contact: Your development team

**Business Questions:**
- Email: business@aicl.co.tz
- Phone: +255 768 017 100

## 📚 Documentation Reference

- **Technical Details:** `CEPRA_FREE_TRIAL_IMPLEMENTATION.md`
- **Deployment Steps:** `DEPLOYMENT_GUIDE.md`
- **Overview:** `IMPLEMENTATION_SUMMARY.md`
- **Progress Tracking:** `TODO.md`

## ✨ Final Notes

- Always test on staging before production
- Keep backups before major changes
- Document any custom configurations
- Monitor closely after deployment
- Gather feedback from users

---

**Status:** Ready for Git Commit and Server Deployment

**Last Updated:** January 2025

**Version:** 1.0.0
