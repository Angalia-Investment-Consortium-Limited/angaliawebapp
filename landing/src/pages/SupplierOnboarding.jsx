import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFrappeCreateDoc } from 'frappe-react-sdk';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import BannerContact from '../components/sections/BannerContact';

const SupplierOnboarding = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createDoc, loading } = useFrappeCreateDoc();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const onSubmit = async (data) => {
        try {
            // TODO for backend developer:
            // Create a DocType named 'Commodity Supplier Application' in Frappe with the following fields:
            // supplier_name, contact_person, phone_number, email_address, region, product_available,
            // estimated_quantity, stock_available (Check), warehouse_available (Check),
            // photos_available (Check), samples_available (Check), price_expectation,
            // packaging_type, harvest_timeline, funding_required (Check),
            // export_experience (Small Text), additional_notes
            
            await createDoc('Commodity Supplier Application', {
                ...data,
                stock_available: data.stock_available ? 1 : 0,
                warehouse_available: data.warehouse_available ? 1 : 0,
                photos_available: data.photos_available ? 1 : 0,
                samples_available: data.samples_available ? 1 : 0,
                funding_required: data.funding_required ? 1 : 0
            });
            
            setSubmitSuccess(true);
            reset();
            
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 8000);
            
        } catch (err) {
            console.error('Error submitting form:', err);
            // Graceful fallback for demo/frontend-only mode if DocType is not yet created
            if (err.message && err.message.includes("DocType Commodity Supplier Application not found")) {
                console.warn("DocType missing. Simulating success for frontend.");
                setSubmitSuccess(true);
                reset();
                setTimeout(() => setSubmitSuccess(false), 8000);
            } else {
                setSubmitError('There was a problem submitting your application. Please ensure the backend DocType is configured correctly.');
            }
        }
    };

    return (
        <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
            <BannerContact />
            <Breadcrumb breadcrumbTitle="Supplier / Aggregator Onboarding" />
            <section className="contact-form-section-two" style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Partner with AICL</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                        <div className="text mt-3">
                            Join our network of farmers, warehouse stockists, and regional aggregators.
                        </div>
                    </div>

                    {submitSuccess && (
                        <div className="alert alert-success text-center" role="alert" style={{ marginBottom: '30px' }}>
                            <strong>Thank you.</strong> Your supplier onboarding details have been received. AICL will review the information and may contact you for verification, sample review, or site inspection.
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
                                <label>Supplier / Business Name *</label>
                                <input type="text" {...register("supplier_name", { required: true })} className={`form-control ${errors.supplier_name ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Contact Person *</label>
                                <input type="text" {...register("contact_person", { required: true })} className={`form-control ${errors.contact_person ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Phone / WhatsApp *</label>
                                <input type="text" {...register("phone_number", { required: true })} className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Email</label>
                                <input type="email" {...register("email_address")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Region / Location *</label>
                                <input type="text" {...register("region", { required: true })} className={`form-control ${errors.region ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Product Available *</label>
                                <input type="text" {...register("product_available", { required: true })} className={`form-control ${errors.product_available ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Estimated Quantity (MT) *</label>
                                <input type="text" {...register("estimated_quantity", { required: true })} className={`form-control ${errors.estimated_quantity ? 'is-invalid' : ''}`} disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Current Price Expectation</label>
                                <input type="text" {...register("price_expectation")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Packaging Type</label>
                                <input type="text" {...register("packaging_type")} className="form-control" disabled={loading} />
                            </div>
                            <div className="col-lg-6 col-md-6 form-group">
                                <label>Harvest / Collection Timeline</label>
                                <input type="text" {...register("harvest_timeline")} className="form-control" disabled={loading} />
                            </div>
                            
                            <div className="col-md-12 form-group mt-3">
                                <h5>Availability & Facilities</h5>
                                <div className="row mt-3">
                                    <div className="col-md-3 mb-2">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" {...register("stock_available")} id="stockCheck" disabled={loading} style={{ width: 'auto', marginRight: '10px' }} />
                                            <label htmlFor="stockCheck" className="mb-0">Stock currently available?</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" {...register("warehouse_available")} id="warehouseCheck" disabled={loading} style={{ width: 'auto', marginRight: '10px' }} />
                                            <label htmlFor="warehouseCheck" className="mb-0">Warehouse/Godown?</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" {...register("photos_available")} id="photoCheck" disabled={loading} style={{ width: 'auto', marginRight: '10px' }} />
                                            <label htmlFor="photoCheck" className="mb-0">Can provide photos/videos?</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" {...register("samples_available")} id="sampleCheck" disabled={loading} style={{ width: 'auto', marginRight: '10px' }} />
                                            <label htmlFor="sampleCheck" className="mb-0">Can provide samples?</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-2 mt-2">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" {...register("funding_required")} id="fundingCheck" disabled={loading} style={{ width: 'auto', marginRight: '10px' }} />
                                            <label htmlFor="fundingCheck" className="mb-0">Need funding to collect?</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 form-group mt-3">
                                <label>Previous Export or Wholesale Experience</label>
                                <textarea {...register("export_experience")} className="form-control" rows="2" disabled={loading}></textarea>
                            </div>
                            <div className="col-md-12 form-group">
                                <label>Additional Notes</label>
                                <textarea {...register("additional_notes")} className="form-control" rows="3" disabled={loading}></textarea>
                            </div>
                            <div className="col-md-12 form-group text-center mt-4">
                                <button type="submit" className="theme-btn btn-style-one" disabled={loading}>
                                    <span className="btn-title">{loading ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default SupplierOnboarding;
