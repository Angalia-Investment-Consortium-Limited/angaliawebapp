import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFrappeCreateDoc } from 'frappe-react-sdk';

const EventRegistrationForm = ({ eventId, eventTitle }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createDoc, loading, error: apiError } = useFrappeCreateDoc();
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data) => {
        try {
            await createDoc('Angalia Event Registration', {
                event: eventId,
                full_name: data.full_name,
                email: data.email,
                phone: data.phone,
                organization: data.organization || '',
                position: data.position || ''
            });
            
            // Show success message
            setSubmitSuccess(true);
            
            // Reset form
            reset();
            
            // Scroll to success message
            window.scrollTo({
                top: document.getElementById('registration-form-section').offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Hide success message after 10 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 10000);
            
        } catch (err) {
            console.error('Error submitting registration:', err);
        }
    };

    return (
        <section
            id="registration-form-section"
            className="event-registration-form-section"
            style={{ backgroundColor: '#fff', padding: '60px 0', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-4">
                            <h2 style={{ color: '#2c3e50', fontWeight: 'bold' }}>Event Registration</h2>
                            <p style={{ color: '#6c757d', fontSize: '16px' }}>
                                Fill out the form below to register for <strong>{eventTitle}</strong>
                            </p>
                        </div>

                        {/* Success Message */}
                        {submitSuccess && (
                            <div className="alert alert-success" role="alert" style={{ marginBottom: '30px', borderRadius: '10px' }}>
                                <h4 className="alert-heading">
                                    <i className="fa fa-check-circle mr-2"></i>
                                    Registration Successful!
                                </h4>
                                <p className="mb-0">
                                    Thank you for registering! A confirmation email has been sent to your email address with event details and further instructions.
                                </p>
                            </div>
                        )}

                        {/* Error Message */}
                        {apiError && (
                            <div className="alert alert-danger" role="alert" style={{ marginBottom: '30px', borderRadius: '10px' }}>
                                <strong>
                                    <i className="fa fa-exclamation-triangle mr-2"></i>
                                    Error!
                                </strong> There was a problem submitting your registration. Please try again or contact us directly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
                            <div className="row">
                                {/* Full Name */}
                                <div className="col-md-6 form-group">
                                    <label htmlFor="full_name" style={{ fontWeight: '600', color: '#2c3e50' }}>
                                        Full Name <span style={{ color: '#dc3545' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        {...register("full_name", {
                                            required: "Full name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Full name must be at least 2 characters"
                                            }
                                        })}
                                        className={`form-control ${errors.full_name ? 'is-invalid' : ''}`}
                                        placeholder="Enter your full name"
                                        disabled={loading}
                                        style={{ borderRadius: '5px', padding: '12px' }}
                                    />
                                    {errors.full_name && (
                                        <div className="invalid-feedback d-block">
                                            {errors.full_name.message}
                                        </div>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div className="col-md-6 form-group">
                                    <label htmlFor="email" style={{ fontWeight: '600', color: '#2c3e50' }}>
                                        Email Address <span style={{ color: '#dc3545' }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email", {
                                            required: "Email address is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter your email address"
                                        disabled={loading}
                                        style={{ borderRadius: '5px', padding: '12px' }}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback d-block">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </div>

                                {/* Phone Number */}
                                <div className="col-md-6 form-group">
                                    <label htmlFor="phone" style={{ fontWeight: '600', color: '#2c3e50' }}>
                                        Phone Number <span style={{ color: '#dc3545' }}>*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                                                message: "Invalid phone number format"
                                            }
                                        })}
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                        placeholder="Enter your phone number"
                                        disabled={loading}
                                        style={{ borderRadius: '5px', padding: '12px' }}
                                    />
                                    {errors.phone && (
                                        <div className="invalid-feedback d-block">
                                            {errors.phone.message}
                                        </div>
                                    )}
                                </div>

                                {/* Organization */}
                                <div className="col-md-6 form-group">
                                    <label htmlFor="organization" style={{ fontWeight: '600', color: '#2c3e50' }}>
                                        Organization/Company
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        {...register("organization")}
                                        className="form-control"
                                        placeholder="Enter your organization (optional)"
                                        disabled={loading}
                                        style={{ borderRadius: '5px', padding: '12px' }}
                                    />
                                </div>

                                {/* Position */}
                                <div className="col-md-12 form-group">
                                    <label htmlFor="position" style={{ fontWeight: '600', color: '#2c3e50' }}>
                                        Position/Role
                                    </label>
                                    <input
                                        type="text"
                                        id="position"
                                        {...register("position")}
                                        className="form-control"
                                        placeholder="Enter your position or role (optional)"
                                        disabled={loading}
                                        style={{ borderRadius: '5px', padding: '12px' }}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="col-md-12 form-group">
                                    <button
                                        className="btn btn-primary btn-lg btn-block"
                                        type="submit"
                                        disabled={loading}
                                        style={{
                                            borderRadius: '5px',
                                            padding: '15px',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            marginTop: '20px'
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                                SUBMITTING...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa fa-check-circle mr-2"></i>
                                                COMPLETE REGISTRATION
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Required Fields Note */}
                                <div className="col-md-12">
                                    <p className="text-center text-muted" style={{ fontSize: '14px', marginTop: '10px' }}>
                                        <i className="fa fa-info-circle mr-1"></i>
                                        Fields marked with <span style={{ color: '#dc3545' }}>*</span> are required
                                    </p>
                                </div>

                                {/* Privacy Note */}
                                <div className="col-md-12">
                                    <div className="alert alert-info" role="alert" style={{ marginTop: '20px', borderRadius: '5px' }}>
                                        <small>
                                            <i className="fa fa-lock mr-2"></i>
                                            Your information is secure and will only be used for event registration purposes. 
                                            We respect your privacy and will not share your details with third parties.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventRegistrationForm;
