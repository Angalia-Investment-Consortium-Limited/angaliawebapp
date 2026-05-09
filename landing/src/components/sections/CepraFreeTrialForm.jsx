import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFrappeCreateDoc } from 'frappe-react-sdk';

const CepraFreeTrialForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createDoc, loading, error: apiError } = useFrappeCreateDoc();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [selectedModules, setSelectedModules] = useState([]);

    const moduleOptions = [
        'Accounting',
        'Human Resource (HRM)',
        'Payroll',
        'Sales & CRM',
        'Inventory Management',
        'Procurement',
        'Projects Management',
        'Asset Management',
        'Customer Support',
        'Fleet Management',
        'Manufacturing',
        'Point of Sale (POS)',
        'Other'
    ];

    const handleModuleChange = (module) => {
        setSelectedModules(prev => {
            if (prev.includes(module)) {
                return prev.filter(m => m !== module);
            } else {
                return [...prev, module];
            }
        });
    };

    const onSubmit = async (data) => {
        try {
            // Validate at least one module is selected
            if (selectedModules.length === 0) {
                alert('Please select at least one preferred module');
                return;
            }

            await createDoc('CEPRA Free Trial', {
                full_name: data.full_name,
                company_name: data.company_name,
                email_address: data.email_address,
                phone_number: data.phone_number,
                role_position: data.role_position || '',
                industry: data.industry,
                preferred_modules: selectedModules.join(', '),
                message: data.message || ''
            });
            
            // Show success message
            setSubmitSuccess(true);
            
            // Reset form and selected modules
            reset();
            setSelectedModules([]);
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
            
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };

    return (
        <section className="contact-form-section-two" style={{ backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h2>Start Your Free CEPRA Trial</h2>
                    <div className="text-decoration">
                        <span className="left" />
                        <span className="right" />
                    </div>
                    <div className="text mt-3">
                        Experience the power of CEPRA with a free trial. Fill out the form below and our team will set up your trial account.
                    </div>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                    <div className="alert alert-success text-center" role="alert" style={{ marginBottom: '30px' }}>
                        <strong>Thank you!</strong> Your free trial request has been submitted successfully. Our team will contact you shortly.
                    </div>
                )}

                {/* Error Message */}
                {apiError && (
                    <div className="alert alert-danger text-center" role="alert" style={{ marginBottom: '30px' }}>
                        <strong>Error!</strong> There was a problem submitting your request. Please try again or contact us directly.
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="row">
                        {/* Full Name */}
                        <div className="col-lg-6 col-md-6 form-group">
                            <input
                                type="text"
                                {...register("full_name", {
                                    required: "Full name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Full name must be at least 2 characters"
                                    }
                                })}
                                className={`form-control ${errors.full_name ? 'is-invalid' : ''}`}
                                placeholder="Full Name *"
                                disabled={loading}
                            />
                            {errors.full_name && (
                                <div className="invalid-feedback d-block">
                                    {errors.full_name.message}
                                </div>
                            )}
                        </div>

                        {/* Company/Organization Name */}
                        <div className="col-lg-6 col-md-6 form-group">
                            <input
                                type="text"
                                {...register("company_name", {
                                    required: "Company/Organization name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Company name must be at least 2 characters"
                                    }
                                })}
                                className={`form-control ${errors.company_name ? 'is-invalid' : ''}`}
                                placeholder="Company/Organization Name *"
                                disabled={loading}
                            />
                            {errors.company_name && (
                                <div className="invalid-feedback d-block">
                                    {errors.company_name.message}
                                </div>
                            )}
                        </div>

                        {/* Email Address */}
                        <div className="col-lg-6 col-md-6 form-group">
                            <input
                                type="email"
                                {...register("email_address", {
                                    required: "Email address is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                className={`form-control ${errors.email_address ? 'is-invalid' : ''}`}
                                placeholder="Email Address *"
                                disabled={loading}
                            />
                            {errors.email_address && (
                                <div className="invalid-feedback d-block">
                                    {errors.email_address.message}
                                </div>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="col-lg-6 col-md-6 form-group">
                            <input
                                type="tel"
                                {...register("phone_number", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                                        message: "Invalid phone number format"
                                    }
                                })}
                                className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
                                placeholder="Phone Number *"
                                disabled={loading}
                            />
                            {errors.phone_number && (
                                <div className="invalid-feedback d-block">
                                    {errors.phone_number.message}
                                </div>
                            )}
                        </div>

                        {/* Role/Position (Optional) */}
                        <div className="col-lg-6 col-md-6 form-group">
                            <input
                                type="text"
                                {...register("role_position")}
                                className="form-control"
                                placeholder="Role/Position (Optional)"
                                disabled={loading}
                            />
                        </div>

                        {/* Industry */}
                        <div className="col-lg-6 col-md-6 form-group">
                            <select
                                {...register("industry", {
                                    required: "Please select your industry"
                                })}
                                className={`custom-select form-control ${errors.industry ? 'is-invalid' : ''}`}
                                disabled={loading}
                            >
                                <option value="">Select Industry *</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Retail & Wholesale">Retail & Wholesale</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="NGOs & Non-Profits">NGOs & Non-Profits</option>
                                <option value="Education">Education</option>
                                <option value="Health Services">Health Services</option>
                                <option value="Transport & Logistics">Transport & Logistics</option>
                                <option value="Finance & Microfinance">Finance & Microfinance</option>
                                <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                                <option value="Construction & Real Estate">Construction & Real Estate</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.industry && (
                                <div className="invalid-feedback d-block">
                                    {errors.industry.message}
                                </div>
                            )}
                        </div>

                        {/* Preferred Modules - Multi-select Checkboxes */}
                        <div className="col-md-12 form-group">
                            <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
                                Preferred Module(s) for Trial *
                            </label>
                            <div className="row" style={{ marginLeft: '0', marginRight: '0' }}>
                                {moduleOptions.map((module, index) => (
                                    <div key={index} className="col-lg-3 col-md-4 col-sm-6" style={{ marginBottom: '10px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontWeight: 'normal' }}>
                                            <input
                                                type="checkbox"
                                                checked={selectedModules.includes(module)}
                                                onChange={() => handleModuleChange(module)}
                                                disabled={loading}
                                                style={{ marginRight: '8px', cursor: 'pointer' }}
                                            />
                                            <span>{module}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {selectedModules.length === 0 && (
                                <small className="text-muted" style={{ display: 'block', marginTop: '5px' }}>
                                    Please select at least one module
                                </small>
                            )}
                        </div>

                        {/* Message/Special Request (Optional) */}
                        <div className="col-md-12 form-group">
                            <textarea
                                {...register("message")}
                                className="form-control"
                                placeholder="Message or Special Request (Optional)"
                                rows="4"
                                disabled={loading}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-md-12 form-group">
                            <div className="text-center">
                                <button
                                    className="theme-btn btn-style-one"
                                    type="submit"
                                    disabled={loading}
                                >
                                    <span className="btn-title">
                                        {loading ? 'SUBMITTING...' : 'REQUEST FREE TRIAL'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Required Fields Note */}
                        <div className="col-md-12">
                            <p className="text-center text-muted" style={{ fontSize: '14px', marginTop: '10px' }}>
                                * Required fields
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CepraFreeTrialForm;
