#!/bin/bash

echo "========================================="
echo "Frontend Rebuild Script"
echo "========================================="
echo ""

# Check if nvm is available
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    echo "✓ Loading NVM..."
    source "$HOME/.nvm/nvm.sh"
    
    echo "✓ Switching to Node v18..."
    nvm use 18
    
    echo ""
    echo "Current Node version:"
    node --version
    echo ""
else
    echo "⚠ NVM not found. Using system Node:"
    node --version
    echo ""
fi

# Navigate to landing directory
cd /home/aicl/frappe-bench/apps/angaliawebapp/landing

echo "========================================="
echo "Building Frontend..."
echo "========================================="
echo ""

# Run the build
yarn build

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================="
    echo "✓ Build completed successfully!"
    echo "========================================="
    echo ""
    echo "Checking output files:"
    ls -lh ../angaliawebapp/public/landing/assets/*.js | head -5
    echo ""
    echo "========================================="
    echo "Next steps:"
    echo "1. Clear ERPNext caches"
    echo "2. Restart services"
    echo "3. Test the website"
    echo "========================================="
else
    echo ""
    echo "========================================="
    echo "✗ Build failed!"
    echo "========================================="
    echo ""
    echo "Please check the error messages above."
    exit 1
fi
