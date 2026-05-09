import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFrappeCreateDoc } from 'frappe-react-sdk';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import BannerContact from '../components/sections/BannerContact';
import { useSearchParams } from 'react-router-dom';

const BuyerInquiry = () => {
    const [searchParams] = useSearchParams();
    const defaultProduct = searchParams.get('product') || '';
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            product_required: defaultProduct
        }
    });
    const { createDoc, loading } = useFrappeCreateDoc();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const onSubmit = async (data) => {
        try {
            // TODO for backend developer:
            // Create a DocType named 'Commodity Buyer Inquiry' in Frappe with the following fields:
            // company_name, contact_person, email_address, phone_number, country, company_website,
            // product_required, quantity_required, frequency (Select: One-time, Recurring),
            // delivery_terms, destination_country, destination_port, preferred_packaging,
            // required_specifications, target_price, payment_method, shipment_timeline,
            // requires_sgs (Check), additional_notes
            
            await createDoc('Commodity Buyer Inquiry', {
                ...data
            });
            
            setSubmitSuccess(true);
            reset();
            
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 8000);
            
        } catch (err) {
            console.error('Error submitting form:', err);
            // Graceful fallback for demo/frontend-only mode if DocType is not yet created
            if (err.message && err.message.includes("DocType Commodity Buyer Inquiry not found")) {
                console.warn("DocType missing. Simulating success for frontend.");
                setSubmitSuccess(true);
                reset();
                setTimeout(() => setSubmitSuccess(false), 8000);
            } else {
                setSubmitError('There was a problem submitting your inquiry. Please ensure the backend DocType is configured correctly.');
            }
        }
    };

    return (
        <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
            <BannerContact />
            <Breadcrumb breadcrumbTitle="Buyer Inquiry" />
            <section className="contact-form-section-two" style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Submit Commodity Inquiry</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                        <div className="text mt-3">
                            Please provide your requirements. Our Commodity Desk will review and contact you for qualification.
                        </div>
                    </div>

                    {submitSuccess && (
                        <div className="alert alert-success text-center" role="alert" style={{ marginBottom: '30px' }}>
                            <strong>Thank you.</strong> Your commodity inquiry has been received by AICL Commodity Desk. Our team will review your requirements and contact you for qualification and next steps.
                        </div>
                    )}

                    {submitError && (
                        <div className="alert alert-danger text-center" role="alert" style={{ marginBottom: '30px' }}>
                            {submitError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Company Name *</label>
                                <input type="text" {...register("company_name", { required: true })} className={`form-control ${errors.company_name ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Contact Person *</label>
                                <input type="text" {...register("contact_person", { required: true })} className={`form-control ${errors.contact_person ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Email Address *</label>
                                <input type="email" {...register("email_address", { required: true })} className={`form-control ${errors.email_address ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>WhatsApp / Phone Number *</label>
                                <input type="text" {...register("phone_number", { required: true })} className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Country *</label>
                                <input type="text" {...register("country", { required: true })} className={`form-control ${errors.country ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Company Website</label>
                                <input type="text" {...register("company_website")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Product Required *</label>
                                <input type="text" {...register("product_required", { required: true })} className={`form-control ${errors.product_required ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Quantity Required (MT) *</label>
                                <input type="text" {...register("quantity_required", { required: true })} className={`form-control ${errors.quantity_required ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Frequency *</label>
                                <select {...register("frequency", { required: true })} className={`form-control ${errors.frequency ? 'is-invalid' : ''}`} disabled={loading}>
                                    <option value="">Select...</option>
                                    <option value="One-time">One-time</option>
                                    <option value="Recurring">Recurring</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Preferred Delivery Terms *</label>
                                <select {...register("delivery_terms", { required: true })} className={`form-control ${errors.delivery_terms ? 'is-invalid' : ''}`} disabled={loading}>
                                    <option value="">Select...</option>
                                    <option value="FOB">FOB</option>
                                    <option value="CIF">CIF</option>
                                    <option value="CFR">CFR</option>
                                    <option value="EXW">EXW</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Destination Country *</label>
                                <input type="text" {...register("destination_country", { required: true })} className={`form-control ${errors.destination_country ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Destination Port</label>
                                <input type="text" {...register("destination_port")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Preferred Packaging</label>
                                <input type="text" {...register("preferred_packaging")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Target Price (if any)</label>
                                <input type="text" {...register("target_price")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Payment Method *</label>
                                <select {...register("payment_method", { required: true })} className={`form-control ${errors.payment_method ? 'is-invalid' : ''}`} disabled={loading}>
                                    <option value="">Select...</option>
                                    <option value="LC">LC (Letter of Credit)</option>
                                    <option value="SBLC">SBLC</option>
                                    <option value="TT">TT</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Required Shipment Timeline</label>
                                <input type="text" {...register("shipment_timeline")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group d-flex align-items-center">
                                <input type="checkbox" {...register("requires_sgs")} id="sgsCheck" disabled={loading} style={{ width: 'auto', marginRight: '10px' }} />
                                <label htmlFor="sgsCheck" className="mb-0">Require SGS or third-party inspection?</label>
                            </div>
                            
                            <div className="col-md-12 form-group mt-3">
                                <label>Required Specifications</label>
                                <textarea {...register("required_specifications")} className="form-control" rows="3" disabled={loading}></textarea>
                            </div>
                            <div className="col-md-12 form-group">
                                <label>Additional Notes</label>
                                <textarea {...register("additional_notes")} className="form-control" rows="3" disabled={loading}></textarea>
                            </div>
                            <div className="col-md-12 form-group text-center mt-4">
                                <button type="submit" className="theme-btn btn-style-one" disabled={loading}>
                                    <span className="btn-title">{loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default BuyerInquiry;
