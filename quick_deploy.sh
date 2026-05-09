#!/bin/bash
set -e

echo "🚀 Quick Event Fix Deployment"
echo "=============================="
echo ""

# Change to bench directory
cd /home/aicl/frappe-bench

# Step 1: Restart backend
echo "Step 1/4: Restarting backend..."
bench restart
echo "✅ Backend restarted"
echo ""

# Step 2: Rebuild frontend
echo "Step 2/4: Rebuilding frontend..."
cd apps/angaliawebapp/landing
yarn build
echo "✅ Frontend built"
echo ""

# Step 3: Copy files
echo "Step 3/4: Copying built files..."
cp -r dist/* ../angaliawebapp/public/landing/
echo "✅ Files copied"
echo ""

# Step 4: Clear cache
echo "Step 4/4: Clearing cache..."
cd /home/aicl/frappe-bench
bench --site aicl.co.tz clear-cache
bench --site aicl.co.tz clear-website-cache
echo "✅ Cache cleared"
echo ""

echo "=============================="
echo "✅ Deployment Complete!"
echo "=============================="
echo ""
echo "Next steps:"
echo "1. Open AEVT-00005 in ERPNext"
echo "2. Make sure 'Published' is checked"
echo "3. Save the event"
echo "4. Visit https://aicl.co.tz/events/AEVT-00005"
echo ""
