# Event System Diagnostic Steps

## Current Issue
- Event detail page shows "Date not available"
- Event shows as "Past Event" / "Event Concluded"
- Event ID: AEVT-00005

## Root Cause Analysis

Based on the code review, the issue occurs when:
1. **`event.event_date` is `null`/`undefined`** → Shows "Date not available"
2. **`event.status` is "Past"** → Shows "Event Concluded"

## Possible Causes

### Cause 1: Event Date Not Set in ERPNext
The event in ERPNext might not have the "Event Date & Time" field filled.

**Solution:**
1. Open ERPNext
2. Go to Angalia Event list
3. Open event AEVT-00005
4. Check if "Event Date & Time" field has a value
5. If empty, set it to: `2025-07-10 18:00:00`
6. Make sure "Published" checkbox is checked
7. Save the event

### Cause 2: Status Auto-Update Logic
The `update_status()` method in `angalia_event.py` automatically sets status to "Past" if the event date is in the past.

**Check:**
- If you set the date as `07-10-2025`, this could be interpreted as:
  - **July 10, 2025** (MM-DD-YYYY) - Future date ✅
  - **October 7, 2025** (DD-MM-YYYY) - Future date ✅
  - **July 10, 2025** (DD-MM-YYYY) - This would be invalid

**Solution:**
Use the format: `YYYY-MM-DD HH:MM:SS`
Example: `2025-07-10 18:00:00`

### Cause 3: Backend Changes Not Deployed
The code fixes haven't been applied because bench wasn't restarted.

**Solution:**
Run the deployment:
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp
./quick_deploy.sh
```

## Step-by-Step Diagnostic Process

### Step 1: Check ERPNext Event Data
```bash
# Open ERPNext
# Navigate to: Angalia Event > AEVT-00005
# Verify:
- Event Date & Time: Should have a value (e.g., 2025-07-10 18:00:00)
- Status: Should be "Upcoming"
- Published: Should be checked ✓
```

### Step 2: Deploy Backend & Frontend Changes
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp
chmod +x quick_deploy.sh
./quick_deploy.sh
```

### Step 3: Check Browser Console
1. Open the event page: `https://aicl.co.tz/events/AEVT-00005`
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Look for the debug logs:
```
=== EVENT DATA RECEIVED ===
Full event object: {...}
Event Date: 2025-07-10 18:00:00
Event Date Type: string
Event Status: Upcoming
...
```

### Step 4: Check Network Tab
1. In Developer Tools, go to Network tab
2. Refresh the page
3. Find the request: `get_event_details?event_name=AEVT-00005`
4. Click on it
5. Go to "Response" or "Preview" tab
6. Check the JSON response:
```json
{
  "message": {
    "name": "AEVT-00005",
    "title": "Event Title",
    "event_date": "2025-07-10 18:00:00",  // Should NOT be null
    "status": "Upcoming",  // Should NOT be "Past"
    ...
  }
}
```

### Step 5: Check ERPNext Logs
```bash
cd /home/aicl/frappe-bench
tail -f logs/web.error.log
```

Look for log entries like:
```
Fetching event details for: AEVT-00005
Event found: AEVT-00005, Published: 1
Event date formatted: 2025-07-10 18:00:00
```

## Quick Fix Commands

### Option 1: Full Deployment
```bash
cd /home/aicl/frappe-bench/apps/angaliawebapp
./quick_deploy.sh
```

### Option 2: Manual Steps
```bash
# 1. Restart backend
cd /home/aicl/frappe-bench
bench restart

# 2. Rebuild frontend
cd apps/angaliawebapp/landing
yarn build
cp -r dist/* ../angaliawebapp/public/landing/

# 3. Clear cache
cd /home/aicl/frappe-bench
bench --site aicl.co.tz clear-cache
bench --site aicl.co.tz clear-website-cache
```

## Expected Result After Fix

### In Browser Console:
```
=== EVENT DATA RECEIVED ===
Event Date: 2025-07-10 18:00:00
Event Status: Upcoming
```

### On Website:
- Date displays: "Thursday, July 10, 2025, 06:00 PM"
- Status badge: "Upcoming Event" (green)
- Registration form is visible
- No "Event Concluded" message

## If Issue Persists

### Check 1: Verify Event Date in Database
```bash
cd /home/aicl/frappe-bench
bench --site aicl.co.tz mariadb
```
```sql
SELECT name, title, event_date, status, published 
FROM `tabAngalia Event` 
WHERE name = 'AEVT-00005';
```

Expected output:
```
+------------+-------------+---------------------+----------+-----------+
| name       | title       | event_date          | status   | published |
+------------+-------------+---------------------+----------+-----------+
| AEVT-00005 | Event Title | 2025-07-10 18:00:00 | Upcoming |         1 |
+------------+-------------+---------------------+----------+-----------+
```

### Check 2: Test API Directly
```bash
curl "https://aicl.co.tz/api/method/angaliawebapp.angalia_web_app.doctype.angalia_event.angalia_event.get_event_details?event_name=AEVT-00005" | python3 -m json.tool
```

### Check 3: Verify File Permissions
```bash
ls -la /home/aicl/frappe-bench/apps/angaliawebapp/angaliawebapp/angalia_web_app/doctype/angalia_event/angalia_event.py
```

## Contact Information

If the issue still persists after following all steps:
1. Share the browser console output
2. Share the Network tab API response
3. Share the ERPNext event data screenshot
4. Share any error messages from logs

---

**Last Updated:** January 2025
**Status:** Diagnostic Guide Ready
