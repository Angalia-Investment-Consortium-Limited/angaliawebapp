# CEPRA Free Trial Form Implementation Guide

## Overview
This document describes the implementation of a responsive "Free Trial Application Form" on the CEPRA page using Frappe React SDK and Doppio CLI architecture.

## Architecture

### Backend (Frappe)
- **DocType**: `CEPRA Free Trial`
- **Location**: `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/`
- **Features**:
  - Auto-naming: `CEPRA-TRIAL-{#####}`
  - Email validation
  - Phone number validation
  - Automatic email notifications to admin
  - Guest permissions for form submission

### Frontend (React)
- **Component**: `CepraFreeTrialForm.jsx`
- **Location**: `angaliawebapp/landing/src/components/sections/`
- **Technologies**:
  - React Hook Form for form management
  - Frappe React SDK for backend integration
  - Responsive design matching existing site styles

## Form Fields

| Field Name | Type | Required | Validation |
|------------|------|----------|------------|
| Full Name | Text | Yes | Min 2 characters |
| Company/Organization Name | Text | Yes | Min 2 characters |
| Email Address | Email | Yes | Valid email format |
| Phone Number | Tel | Yes | Valid phone format |
| Role/Position | Text | No | - |
| Preferred Module | Dropdown | Yes | Accounting, HR, Sales, Inventory, Project, Other |
| Message/Special Request | Textarea | No | - |

## Installation Steps

### 1. Install DocType in Frappe

Navigate to your Frappe bench directory and run:

```bash
bench migrate
```

This will install the `CEPRA Free Trial` DocType in your Frappe instance.

### 2. Build React Application

```bash
cd angaliawebapp/landing
yarn build
```

This will:
- Build the React application
- Copy files to `angaliawebapp/public/landing/`
- Copy `index.html` to `angaliawebapp/www/landing.html`

### 3. Restart Frappe

```bash
bench restart
```

## Configuration

### Email Notifications

Email notifications are sent to the admin when a new trial request is submitted. The default email is `business@aicl.co.tz`.

To change the notification email:
1. Go to Frappe UI → Setup → System Settings
2. Update the "Email Footer Address" field
3. Save

### Permissions

The DocType has two permission levels:
- **System Manager**: Full access (create, read, update, delete)
- **Guest**: Create and read access (for form submission)

## Usage

### For End Users

1. Navigate to the CEPRA page: `/customization-enterprise-resource-plannig`
2. Scroll to the "Start Your Free CEPRA Trial" section
3. Fill in the required fields (marked with *)
4. Select preferred module from dropdown
5. Optionally add role/position and message
6. Click "REQUEST FREE TRIAL"
7. Receive confirmation message

### For Administrators

1. Log in to Frappe
2. Go to "CEPRA Free Trial" DocType
3. View all submitted trial requests
4. Use the "Send Follow-up Email" button to contact applicants
5. Track and manage trial requests

## API Integration

The form uses Frappe React SDK's `useFrappeCreateDoc` hook:

```javascript
const { createDoc, loading, error } = useFrappeCreateDoc();

await createDoc('CEPRA Free Trial', {
    full_name: data.full_name,
    company_name: data.company_name,
    email_address: data.email_address,
    phone_number: data.phone_number,
    role_position: data.role_position || '',
    preferred_module: data.preferred_module,
    message: data.message || ''
});
```

## Validation

### Frontend Validation
- Required fields check
- Email format validation
- Phone number format validation
- Minimum length validation for text fields

### Backend Validation
- Email format validation using Frappe's `validate_email_address`
- Phone number format validation
- Data type validation

## Error Handling

The form includes comprehensive error handling:
- Field-level validation errors displayed inline
- API errors shown in alert banner
- Loading state during submission
- Success confirmation message
- Automatic form reset after successful submission

## Responsive Design

The form is fully responsive and tested on:
- Desktop (1920x1080 and above)
- Tablet (768x1024)
- Mobile (375x667 and above)

## Styling

The form uses existing site styles:
- `.contact-form-section-two` for section wrapper
- `.contact-form` for form container
- `.form-control` for input fields
- `.theme-btn.btn-style-one` for submit button
- Bootstrap grid system for responsive layout

## Testing Checklist

- [ ] Form displays correctly on CEPRA page
- [ ] All required fields show validation errors when empty
- [ ] Email validation works correctly
- [ ] Phone validation works correctly
- [ ] Dropdown shows all module options
- [ ] Form submits successfully to Frappe
- [ ] Data is saved correctly in DocType
- [ ] Email notification is sent to admin
- [ ] Success message displays after submission
- [ ] Form resets after successful submission
- [ ] Error handling works for API failures
- [ ] Responsive design works on all screen sizes

## Troubleshooting

### Form not submitting
1. Check browser console for errors
2. Verify Frappe React SDK is properly configured
3. Check network tab for API call status
4. Verify DocType permissions allow Guest create

### Email notifications not sending
1. Check Frappe email settings
2. Verify SMTP configuration
3. Check error logs in Frappe
4. Verify admin email address in System Settings

### Build errors
1. Ensure all dependencies are installed: `yarn install`
2. Check for syntax errors in React components
3. Verify import paths are correct
4. Clear build cache: `rm -rf node_modules/.vite`

## Files Modified/Created

### Backend Files
- `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/__init__.py`
- `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/cepra_free_trial.json`
- `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/cepra_free_trial.py`
- `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/cepra_free_trial.js`
- `angaliawebapp/angaliawebapp/angalia_web_app/doctype/cepra_free_trial/test_cepra_free_trial.py`

### Frontend Files
- `angaliawebapp/landing/src/components/sections/CepraFreeTrialForm.jsx` (new)
- `angaliawebapp/landing/src/pages/Cepra.jsx` (modified)

## Support

For issues or questions:
- Email: business@aicl.co.tz
- Phone: +255 768 017 100

## License

Copyright (c) 2025, AICL
