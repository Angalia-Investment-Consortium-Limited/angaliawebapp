# CEPRA Free Trial Form - Visual Preview

## Form Location
The form will appear on the CEPRA page at:
**URL:** `/customization-enterprise-resource-plannig`

**Position:** Below the main CEPRA content section, before the footer

## Form Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Start Your Free CEPRA Trial                        │
│              ═══════════════════════════                        │
│                                                                 │
│   Experience the power of CEPRA with a free trial. Fill out    │
│   the form below and our team will set up your personalized    │
│   trial environment.                                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────────┐   │
│  │ Full Name *              │  │ Company/Organization *   │   │
│  └──────────────────────────┘  └──────────────────────────┘   │
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────────┐   │
│  │ Email Address *          │  │ Phone Number *           │   │
│  └──────────────────────────┘  └──────────────────────────┘   │
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────────┐   │
│  │ Role/Position (Optional) │  │ Select Module *          │   │
│  └──────────────────────────┘  │ ▼ Accounting             │   │
│                                 └──────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Message / Special Request (Optional)                    │   │
│  │                                                         │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│                  ┌──────────────────────┐                      │
│                  │ REQUEST FREE TRIAL   │                      │
│                  └──────────────────────┘                      │
│                                                                 │
│                    * Required fields                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Form Fields Details

### Row 1: Personal Information
```
┌─────────────────────────┐  ┌─────────────────────────┐
│ Full Name *             │  │ Company/Organization *  │
│ [Text Input]            │  │ [Text Input]            │
│ Min 2 characters        │  │ Min 2 characters        │
└─────────────────────────┘  └─────────────────────────┘
```

### Row 2: Contact Information
```
┌─────────────────────────┐  ┌─────────────────────────┐
│ Email Address *         │  │ Phone Number *          │
│ [Email Input]           │  │ [Tel Input]             │
│ Valid email required    │  │ Valid phone required    │
└─────────────────────────┘  └─────────────────────────┘
```

### Row 3: Additional Information
```
┌─────────────────────────┐  ┌─────────────────────────┐
│ Role/Position           │  │ Preferred Module *      │
│ [Text Input]            │  │ [Dropdown]              │
│ Optional                │  │ - Accounting            │
└─────────────────────────┘  │ - HR                    │
                             │ - Sales                 │
                             │ - Inventory             │
                             │ - Project               │
                             │ - Other                 │
                             └─────────────────────────┘
```

### Row 4: Message
```
┌───────────────────────────────────────────────────────┐
│ Message / Special Request (Optional)                  │
│ [Textarea - 4 rows]                                   │
│                                                       │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### Submit Button
```
                ┌──────────────────────┐
                │ REQUEST FREE TRIAL   │
                │   [Blue Button]      │
                └──────────────────────┘
```

## Responsive Layouts

### Desktop (1920px+)
- Two columns for form fields
- Full width container
- Large input fields
- Spacious layout

### Tablet (768px - 1024px)
- Two columns maintained
- Slightly smaller inputs
- Optimized spacing
- Touch-friendly buttons

### Mobile (< 768px)
- Single column layout
- Full-width inputs
- Stacked fields
- Large touch targets
- Optimized for thumb navigation

## Color Scheme

Based on your existing site design:

- **Primary Button:** Blue (#007bff or your theme color)
- **Input Borders:** Light gray (#ced4da)
- **Error Text:** Red (#dc3545)
- **Success Message:** Green (#28a745)
- **Text:** Dark gray (#212529)
- **Background:** White (#ffffff)

## Validation States

### Empty Required Field
```
┌─────────────────────────┐
│ Full Name *             │ ← Red border
│                         │
└─────────────────────────┘
  ⚠ Full name is required  ← Red error text
```

### Invalid Email
```
┌─────────────────────────┐
│ Email Address *         │ ← Red border
│ invalid@email           │
└─────────────────────────┘
  ⚠ Invalid email address  ← Red error text
```

### Valid Field
```
┌─────────────────────────┐
│ Full Name *             │ ← Normal border
│ John Doe                │
└─────────────────────────┘
```

## Success State

After successful submission:
```
┌─────────────────────────────────────────────────────────┐
│  ✓ Success! Your free trial request has been submitted.│
│    We'll be in touch soon!                              │
└─────────────────────────────────────────────────────────┘
```

## Loading State

During submission:
```
                ┌──────────────────────┐
                │   SUBMITTING...      │
                │   [Disabled Button]  │
                └──────────────────────┘
```

## Error State

If submission fails:
```
┌─────────────────────────────────────────────────────────┐
│  ✗ Error! There was a problem submitting your request. │
│    Please try again.                                    │
└─────────────────────────────────────────────────────────┘
```

## User Interaction Flow

1. **User arrives at CEPRA page**
   - Scrolls down to form section
   - Sees clear heading and description

2. **User starts filling form**
   - Clicks on first field
   - Types information
   - Sees real-time validation

3. **User encounters validation error**
   - Sees red border on field
   - Reads error message below field
   - Corrects the input

4. **User completes form**
   - All required fields filled
   - Validation passes
   - Button is enabled

5. **User submits form**
   - Clicks "REQUEST FREE TRIAL"
   - Button shows "SUBMITTING..."
   - Form is disabled during submission

6. **Submission succeeds**
   - Success message appears
   - Form resets to empty
   - User can submit another request

7. **Admin receives notification**
   - Email sent to business@aicl.co.tz
   - Contains all form data
   - Admin can follow up

## Accessibility Features

- ✅ Keyboard navigation (Tab through fields)
- ✅ Screen reader support (ARIA labels)
- ✅ Clear error messages
- ✅ Focus indicators
- ✅ Semantic HTML
- ✅ Proper form labels

## Mobile Experience

### Portrait Mode (375px)
```
┌─────────────────────┐
│                     │
│  Start Your Free    │
│  CEPRA Trial        │
│  ═══════════        │
│                     │
│  [Description]      │
│                     │
│ ┌─────────────────┐ │
│ │ Full Name *     │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Company *       │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Email *         │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Phone *         │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Role (Optional) │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Module *        │ │
│ │ ▼ Select        │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Message         │ │
│ │                 │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ REQUEST TRIAL   │ │
│ └─────────────────┘ │
│                     │
└─────────────────────┘
```

## Integration with Existing Page

The form integrates seamlessly with your existing CEPRA page:

```
┌─────────────────────────────────────────┐
│  Header / Navigation                    │
├─────────────────────────────────────────┤
│  CEPRA Banner                           │
├─────────────────────────────────────────┤
│  CEPRA Content Section                  │
│  - Slider                               │
│  - Features                             │
│  - Sidebar (Catalogue, Contact)         │
├─────────────────────────────────────────┤
│  ⭐ FREE TRIAL FORM (NEW)               │  ← Your new form
│  - Responsive layout                    │
│  - Matches site styling                 │
│  - Integrated with Frappe               │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

## Styling Classes Used

The form uses your existing CSS classes:
- `.contact-form-section-two` - Section wrapper
- `.auto-container` - Container
- `.sec-title` - Section title
- `.text-decoration` - Title decoration
- `.contact-form` - Form wrapper
- `.form-group` - Field wrapper
- `.form-control` - Input fields
- `.custom-select` - Dropdown
- `.theme-btn.btn-style-one` - Submit button
- `.alert.alert-success` - Success message
- `.alert.alert-danger` - Error message

## What Happens Behind the Scenes

```
User Fills Form
      ↓
Validates Fields (Frontend)
      ↓
Submits to Frappe API
      ↓
Validates Again (Backend)
      ↓
Saves to Database
      ↓
Sends Email Notification
      ↓
Returns Success
      ↓
Shows Success Message
      ↓
Resets Form
```

## Expected Performance

- **Form Load:** Instant (part of page)
- **Validation:** Real-time (< 100ms)
- **Submission:** 1-3 seconds (depends on server)
- **Email Delivery:** 5-30 seconds (background)

---

**Note:** This is a visual representation. The actual form will match your existing site's design and styling perfectly.
