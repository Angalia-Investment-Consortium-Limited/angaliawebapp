#!/bin/bash

echo "========================================="
echo "Event System - Deployment Script"
echo "========================================="
echo ""

# Get the site name
echo "Enter your site name (e.g., site1.local):"
read SITE_NAME

if [ -z "$SITE_NAME" ]; then
    echo "Error: Site name is required"
    exit 1
fi

echo ""
echo "Step 1: Restarting Frappe/ERPNext backend..."
cd /home/aicl/frappe-bench
bench restart

if [ $? -ne 0 ]; then
    echo "Error: Failed to restart bench"
    exit 1
fi

echo ""
echo "Step 2: Rebuilding React frontend..."
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing
yarn build

if [ $? -ne 0 ]; then
    echo "Error: Failed to build frontend"
    exit 1
fi

echo ""
echo "Step 3: Copying built files to public directory..."
cp -r dist/* ../angaliawebapp/public/landing/

echo ""
echo "Step 4: Clearing ERPNext cache..."
cd /home/aicl/frappe-bench
bench --site $SITE_NAME clear-cache
bench --site $SITE_NAME clear-website-cache

echo ""
echo "========================================="
echo "✅ Deployment Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Open your event in ERPNext"
echo "2. Make sure 'Published' checkbox is checked"
echo "3. Save the event"
echo "4. Visit the website and test"
echo ""
