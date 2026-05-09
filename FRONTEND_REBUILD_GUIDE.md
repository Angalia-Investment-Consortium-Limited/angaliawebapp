# Frontend Rebuild Guide - Node.js Upgrade Required

## 🚨 Current Issue

The backend fix is deployed and working, but the frontend still shows the old behavior because:
1. **Frontend hasn't been rebuilt** - Still using old compiled JavaScript from October 1st
2. **Node.js v12 is too old** - Build tools require Node.js v14 or higher
3. **Image not visible** - Also indicates frontend compilation issue

---

## ✅ Solution: Upgrade Node.js & Rebuild Frontend

### Option 1: Install NVM and Upgrade Node.js (Recommended)

#### Step 1: Install NVM (Node Version Manager)
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verify NVM installation
nvm --version
```

#### Step 2: Install Node.js 18 (LTS)
```bash
# Install Node 18
nvm install 18

# Use Node 18
nvm use 18

# Verify
node --version  # Should show v18.x.x
```

#### Step 3: Rebuild Frontend
```bash
# Navigate to landing directory
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing

# Install dependencies (if needed)
yarn install

# Build the frontend
yarn build

# Copy built files to public directory
cp -r dist/* ../angaliawebapp/public/landing/

# Verify files were copied
ls -lh ../angaliawebapp/public/landing/assets/*.js
```

#### Step 4: Clear Caches
```bash
# Clear ERPNext cache
cd /home/aicl/frappe-bench
bench --site aicl.co.tz clear-cache
bench --site aicl.co.tz clear-website-cache

# Restart services
supervisorctl restart all
```

#### Step 5: Test
1. Open: `https://aicl.co.tz/events/AEVT-00005`
2. Hard refresh: `Ctrl+Shift+R`
3. Verify date shows correctly
4. Verify image is visible

---

### Option 2: Use System Package Manager

#### For Ubuntu/Debian:
```bash
# Remove old Node.js
sudo apt remove nodejs npm

# Add NodeSource repository for Node 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js 18
sudo apt install -y nodejs

# Verify
node --version  # Should show v18.x.x
npm --version
```

Then follow Step 3-5 from Option 1.

---

### Option 3: Quick Fix Without Rebuild (Temporary)

If you can't upgrade Node.js immediately, you can manually patch the compiled JavaScript:

#### Step 1: Find the compiled JS file
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp
grep -r "2025-10-07 18:00:00" angaliawebapp/public/landing/assets/*.js
```

#### Step 2: Create backup
```bash
cp angaliawebapp/public/landing/assets/index-DFYPrb_s.js angaliawebapp/public/landing/assets/index-DFYPrb_s.js.backup
```

#### Step 3: This is NOT recommended as compiled JS is minified and hard to patch

**Better approach:** Upgrade Node.js and rebuild properly.

---

## 🔍 Verification After Rebuild

### Check 1: Verify New Build Files
```bash
# Check timestamp of built files
ls -lh /home/aicl/frappe-bench/apps/angaliawebapp/angaliawebapp/public/landing/assets/*.js

# Should show today's date, not October 1st
```

### Check 2: Test API (Should already work)
```bash
curl -s "https://aicl.co.tz/api/method/angaliawebapp.angalia_web_app.doctype.angalia_event.angalia_event.get_event_details?event_name=AEVT-00005" | grep event_date
```

Expected: `"event_date": "2025-10-07T18:00:00"`

### Check 3: Test Website
1. Open: `https://aicl.co.tz/events/AEVT-00005`
2. Hard refresh: `Ctrl+Shift+R`
3. Open Console (F12)
4. Look for debug logs:
   ```
   === EVENT DATA RECEIVED ===
   Event Date: 2025-10-07T18:00:00
   Event Status: Upcoming
   ```

### Check 4: Verify Display
- ✅ Date: "Tuesday, October 7, 2025, 06:00 PM"
- ✅ Status: "Upcoming Event" (green)
- ✅ Image visible
- ✅ Registration form visible

---

## 📊 Why Rebuild is Necessary

### Current State:
```
Source Code (landing/src/)     Compiled Code (public/landing/assets/)
├── EventDetail.jsx            ├── index-DFYPrb_s.js (Oct 1, 2024)
│   └── new Date(dateString)   │   └── OLD compiled code
│   └── Debug logging          │   └── No debug logging
│   └── ISO 8601 support ✅    │   └── May not handle ISO 8601 ❌
```

### After Rebuild:
```
Source Code (landing/src/)     Compiled Code (public/landing/assets/)
├── EventDetail.jsx            ├── index-XXXXXXXX.js (Today)
│   └── new Date(dateString)   │   └── NEW compiled code
│   └── Debug logging          │   └── With debug logging
│   └── ISO 8601 support ✅    │   └── Handles ISO 8601 ✅
```

---

## 🎯 Expected Timeline

### With Node.js Upgrade:
- Install NVM: 2-3 minutes
- Install Node 18: 3-5 minutes
- Rebuild frontend: 2-3 minutes
- **Total: ~10 minutes**

### Without Upgrade:
- Frontend will continue showing old behavior
- Need to upgrade Node.js eventually for future updates

---

## 🆘 Troubleshooting

### Issue: "yarn: command not found"
```bash
npm install -g yarn
```

### Issue: "Permission denied" during npm install
```bash
# Use nvm (recommended) or
sudo chown -R $USER:$USER ~/.npm
```

### Issue: Build fails with "out of memory"
```bash
# Increase Node memory
export NODE_OPTIONS="--max-old-space-size=4096"
yarn build
```

### Issue: Files not copying
```bash
# Check if dist directory exists
ls -la /home/aicl/frappe-bench/apps/angaliawebapp/landing/dist/

# Manual copy with verbose output
cp -rv /home/aicl/frappe-bench/apps/angaliawebapp/landing/dist/* /home/aicl/frappe-bench/apps/angaliawebapp/angaliawebapp/public/landing/
```

---

## 📝 Summary

**Current Status:**
- ✅ Backend fixed (API returns ISO 8601 format)
- ✅ Services restarted
- ❌ Frontend not rebuilt (still using old compiled code from Oct 1)
- ❌ Node.js v12 too old for build tools

**Required Actions:**
1. Upgrade Node.js to v18 using NVM
2. Rebuild frontend with `yarn build`
3. Copy built files to public directory
4. Clear caches and test

**Alternative:**
- If Node.js upgrade is not possible immediately, the event system will continue to have display issues until the frontend is rebuilt with a compatible Node.js version.

---

**Last Updated:** January 2025
**Priority:** HIGH - Frontend rebuild required for fix to take effect
