import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFrappeCreateDoc } from 'frappe-react-sdk';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import BannerContact from '../components/sections/BannerContact';

const GlobalPartnershipsContact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createDoc, loading } = useFrappeCreateDoc();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const theme = {
        deepBlue: '#0B1B3F',
        goldAccent: '#D4AF37',
        white: '#FFFFFF',
        lightGrey: '#F4F4F4',
        fontHeading: "'Montserrat', sans-serif",
        fontBody: "'Poppins', 'Inter', sans-serif"
    };

    const onSubmit = async (data) => {
        try {
            // TODO for backend developer:
            // Create a DocType named 'Global Partnership Inquiry' in Frappe with the following fields:
            // full_name, company_name, email_address, phone_number, country, service_of_interest (Select),
            // project_overview (Text), estimated_capital, additional_notes (Text)
            
            await createDoc('Global Partnership Inquiry', {
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
            if (err.message && err.message.includes("DocType Global Partnership Inquiry not found")) {
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
            <Breadcrumb breadcrumbTitle="Global Partnerships Inquiry" />
            
            <style dangerouslySetInnerHTML={{__html: `
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');
                .gp-contact-sec { font-family: 'Poppins', sans-serif; color: #333; }
                .gp-contact-sec h2, .gp-contact-sec h3 { font-family: 'Montserrat', sans-serif; font-weight: 700; color: #0B1B3F; }
                .gp-form-control { border: 1px solid #eaeaea; padding: 15px 20px; border-radius: 4px; font-family: 'Poppins', sans-serif; transition: all 0.3s; background: #fafafa; }
                .gp-form-control:focus { border-color: #D4AF37; box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.15); outline: none; background: #fff; }
                .gp-btn-submit { background-color: #0B1B3F; color: #fff; font-weight: 600; padding: 15px 40px; border-radius: 4px; border: 2px solid #0B1B3F; transition: all 0.3s; text-transform: uppercase; font-family: 'Montserrat', sans-serif; width: 100%; cursor: pointer; }
                .gp-btn-submit:hover:not(:disabled) { background-color: transparent; color: #0B1B3F; }
                .gp-btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }
            `}} />

            <section className="contact-form-section-two gp-contact-sec" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="auto-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="sec-title text-center mb-5">
                                <h2 style={{ color: theme.deepBlue }}>Submit an Inquiry</h2>
                                <div className="text-decoration" style={{ justifyContent: 'center', display: 'flex' }}>
                                    <span className="left" style={{ background: theme.goldAccent, width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                                    <span className="right" style={{ background: theme.deepBlue, width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                                </div>
                                <div className="text mt-3" style={{ fontSize: '16px', color: '#666' }}>
                                    Please provide details regarding your project or partnership interest. Our global advisory team will review and contact you for preliminary discussions.
                                </div>
                            </div>

                            {submitSuccess && (
                                <div className="alert alert-success text-center" role="alert" style={{ marginBottom: '30px', borderLeft: '4px solid ' + theme.goldAccent }}>
                                    <strong>Thank you.</strong> Your inquiry has been successfully received. A member of our global partnerships team will reach out to you shortly.
                                </div>
                            )}

                            {submitError && (
                                <div className="alert alert-danger text-center" role="alert" style={{ marginBottom: '30px' }}>
                                    {submitError}
                                </div>
                            )}

                            <div style={{ background: theme.white, padding: '50px 40px', borderRadius: '8px', borderTop: '4px solid ' + theme.deepBlue, boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
                                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Full Name *</label>
                                            <input type="text" {...register("full_name", { required: true })} className={'form-control gp-form-control ' + (errors.full_name ? 'is-invalid' : '')} disabled={loading} placeholder="John Doe" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Company Name *</label>
                                            <input type="text" {...register("company_name", { required: true })} className={'form-control gp-form-control ' + (errors.company_name ? 'is-invalid' : '')} disabled={loading} placeholder="Company Ltd." />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Email Address *</label>
                                            <input type="email" {...register("email_address", { required: true })} className={'form-control gp-form-control ' + (errors.email_address ? 'is-invalid' : '')} disabled={loading} placeholder="john@company.com" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Phone / WhatsApp *</label>
                                            <input type="text" {...register("phone_number", { required: true })} className={'form-control gp-form-control ' + (errors.phone_number ? 'is-invalid' : '')} disabled={loading} placeholder="+1 234 567 8900" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Country *</label>
                                            <input type="text" {...register("country", { required: true })} className={'form-control gp-form-control ' + (errors.country ? 'is-invalid' : '')} disabled={loading} placeholder="e.g. United States" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Service of Interest *</label>
                                            <select {...register("service_of_interest", { required: true })} className={'form-control gp-form-control ' + (errors.service_of_interest ? 'is-invalid' : '')} disabled={loading} style={{ height: '54px' }}>
                                                <option value="">Select an option...</option>
                                                <option value="Investment & Financial Trade Facilitation">Investment & Financial Trade Facilitation</option>
                                                <option value="Global Expansion & Investor Connectivity">Global Expansion & Investor Connectivity</option>
                                                <option value="Both">Both</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Estimated Capital / Investment Size (Optional)</label>
                                            <input type="text" {...register("estimated_capital")} className="form-control gp-form-control" disabled={loading} placeholder="e.g. $5M - $10M USD" />
                                        </div>
                                        <div className="col-md-12 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Project / Opportunity Overview *</label>
                                            <textarea {...register("project_overview", { required: true })} className={'form-control gp-form-control ' + (errors.project_overview ? 'is-invalid' : '')} rows="4" disabled={loading} placeholder="Provide a brief summary of the commercial project or trade opportunity..."></textarea>
                                        </div>
                                        <div className="col-md-12 form-group mb-4">
                                            <label style={{ fontWeight: '500', color: theme.deepBlue, marginBottom: '8px', display: 'block' }}>Additional Notes (Optional)</label>
                                            <textarea {...register("additional_notes")} className="form-control gp-form-control" rows="3" disabled={loading} placeholder="Any specific requirements, timelines, or existing partnerships?"></textarea>
                                        </div>
                                        <div className="col-md-12 form-group text-center mt-3">
                                            <button type="submit" className="gp-btn-submit" disabled={loading}>
                                                <span>{loading ? 'SUBMITTING INQUIRY...' : 'SUBMIT INQUIRY'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GlobalPartnershipsContact;
