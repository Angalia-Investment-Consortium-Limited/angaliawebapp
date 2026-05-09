# Copyright (c) 2025, ANGALIA INVESTMENT CONSORTIUM LIMITED and Contributors
# See license.txt

import frappe
import unittest

class TestCEPRAFreeTrial(unittest.TestCase):
    def setUp(self):
        """Set up test data"""
        self.test_data = {
            "full_name": "Test User",
            "company_name": "Test Company Ltd",
            "email_address": "test@example.com",
            "phone_number": "+255 123 456 789",
            "role_position": "IT Manager",
            "industry": "Manufacturing",
            "preferred_modules": "Accounting, Inventory Management, Sales & CRM",
            "message": "I would like to test CEPRA for my organization"
        }
    
    def tearDown(self):
        """Clean up test data"""
        # Delete test records
        frappe.db.delete("CEPRA Free Trial", {"email_address": "test@example.com"})
        frappe.db.commit()
    
    def test_create_trial_request(self):
        """Test creating a new trial request"""
        doc = frappe.get_doc({
            "doctype": "CEPRA Free Trial",
            **self.test_data
        })
        doc.insert()
        
        self.assertTrue(doc.name)
        self.assertEqual(doc.full_name, "Test User")
        self.assertEqual(doc.email_address, "test@example.com")
    
    def test_email_validation(self):
        """Test email validation"""
        # Test invalid email
        doc = frappe.get_doc({
            "doctype": "CEPRA Free Trial",
            **self.test_data,
            "email_address": "invalid-email"
        })
        
        with self.assertRaises(frappe.ValidationError):
            doc.insert()
    
    def test_phone_validation(self):
        """Test phone number validation"""
        # Test invalid phone (contains letters)
        doc = frappe.get_doc({
            "doctype": "CEPRA Free Trial",
            **self.test_data,
            "phone_number": "123-ABC-456"
        })
        
        with self.assertRaises(frappe.ValidationError):
            doc.insert()
    
    def test_required_fields(self):
        """Test that required fields are enforced"""
        # Test missing full_name
        doc = frappe.get_doc({
            "doctype": "CEPRA Free Trial",
            "company_name": "Test Company",
            "email_address": "test@example.com",
            "phone_number": "+255 123 456 789",
            "industry": "Manufacturing",
            "preferred_modules": "Accounting"
        })
        
        with self.assertRaises(frappe.MandatoryError):
            doc.insert()
    
    def test_auto_naming(self):
        """Test that auto-naming works correctly"""
        doc = frappe.get_doc({
            "doctype": "CEPRA Free Trial",
            **self.test_data
        })
        doc.insert()
        
        # Check that name follows the pattern CEPRA-TRIAL-#####
        self.assertTrue(doc.name.startswith("CEPRA-TRIAL-"))
        self.assertEqual(len(doc.name), 17)  # CEPRA-TRIAL- (12) + 5 digits
