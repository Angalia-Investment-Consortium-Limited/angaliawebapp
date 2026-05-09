import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import BannerContact from '../components/sections/BannerContact';

const GlobalPartnerships = () => {
    
    // Custom inline styles for the Premium Theme
    const theme = {
        deepBlue: '#0B1B3F',
        goldAccent: '#D4AF37',
        white: '#FFFFFF',
        lightGrey: '#F4F4F4',
        black: '#111111',
        fontHeading: "'Montserrat', sans-serif",
        fontBody: "'Poppins', 'Inter', sans-serif"
    };

    return (
        <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
            <BannerContact />
            
            {/* Injecting Fonts */}
            <style dangerouslySetInnerHTML={{__html: `
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');
                .global-part-sec { font-family: 'Poppins', sans-serif; color: #333; }
                .global-part-sec h1, .global-part-sec h2, .global-part-sec h3, .global-part-sec h4 { font-family: 'Montserrat', sans-serif; font-weight: 700; color: #0B1B3F; }
                
                .gold-accent { color: #D4AF37; }
                .bg-deep-blue { background-color: #0B1B3F; color: #fff; }
                .bg-deep-blue h1, .bg-deep-blue h2, .bg-deep-blue h3, .bg-deep-blue h4 { color: #fff; }
                .bg-light-grey { background-color: #F4F4F4; }
                
                .btn-premium { background-color: #D4AF37; color: #0B1B3F; font-weight: 600; padding: 12px 30px; border-radius: 4px; display: inline-block; transition: all 0.3s; text-transform: uppercase; font-family: 'Montserrat', sans-serif; border: 2px solid #D4AF37; }
                .btn-premium:hover { background-color: transparent; color: #D4AF37; text-decoration: none; }
                
                .btn-premium-outline { background-color: transparent; color: #fff; font-weight: 600; padding: 12px 30px; border-radius: 4px; display: inline-block; transition: all 0.3s; text-transform: uppercase; font-family: 'Montserrat', sans-serif; border: 2px solid #fff; }
                .btn-premium-outline:hover { background-color: #fff; color: #0B1B3F; text-decoration: none; }

                .feature-card-premium { background: #fff; border: 1px solid #eaeaea; border-radius: 8px; padding: 40px 30px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.03); height: 100%; border-bottom: 3px solid transparent; }
                .feature-card-premium:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); border-bottom: 3px solid #D4AF37; }
                
                .timeline-step { position: relative; padding-bottom: 40px; }
                .timeline-step:last-child { padding-bottom: 0; }
                .timeline-step::before { content: ''; position: absolute; left: 24px; top: 50px; bottom: 0; width: 2px; background: #eaeaea; }
                .timeline-step:last-child::before { display: none; }
                .timeline-icon { width: 50px; height: 50px; border-radius: 50%; background: #0B1B3F; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; position: relative; z-index: 2; margin-bottom: 15px; border: 2px solid #D4AF37; }
                
                .membership-card { border: 2px solid #D4AF37; border-radius: 12px; padding: 50px 40px; background: linear-gradient(145deg, #ffffff, #fafafa); box-shadow: 0 20px 40px rgba(11,27,63,0.08); position: relative; overflow: hidden; }
                .membership-card::before { content: ''; position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: #D4AF37; opacity: 0.1; border-bottom-left-radius: 100%; }
            `}} />

            <div className="global-part-sec">
                {/* SECTION 1 - HERO SECTION */}
                <section style={{ backgroundColor: theme.deepBlue, position: 'relative', overflow: 'hidden', padding: '120px 0 100px' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'url(/assets/images/background/map-1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <h1 style={{ color: theme.white, fontSize: '48px', lineHeight: '1.2', marginBottom: '20px' }}>
                                    Connecting Tanzanian Businesses to <span className="gold-accent">Global Capital</span> & Opportunities
                                </h1>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginBottom: '40px', maxWidth: '800px', lineHeight: '1.6' }}>
                                    AICL supports businesses through international trade facilitation, investor connectivity, strategic partnerships, and global business expansion support.
                                </p>
                                <div>
                                    <a href="#services" className="btn-premium mr-3 mb-3" style={{ marginRight: '15px' }}>Explore Services</a>
                                    <Link to="/global-partnerships/contact" className="btn-premium-outline mb-3">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 - INVESTMENT & FINANCIAL TRADE FACILITATION */}
                <section id="services" style={{ padding: '90px 0', backgroundColor: theme.white }}>
                    <div className="auto-container">
                        <div className="sec-title text-center mb-5">
                            <h2 style={{ color: theme.deepBlue }}>Investment & Financial Trade Facilitation</h2>
                            <div className="text-decoration" style={{ justifyContent: 'center', display: 'flex' }}>
                                <span className="left" style={{ background: theme.goldAccent, width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                                <span className="right" style={{ background: theme.deepBlue, width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                            </div>
                            <p className="mt-4 mx-auto" style={{ maxWidth: '800px', fontSize: '16px', color: '#666' }}>
                                AICL works with international financial trade facilitators to support high-value commercial projects through structured profit-sharing and trade financing models.
                            </p>
                        </div>

                        <div className="row">
                            {[
                                { title: 'Minimum Threshold', text: 'USD 1 Million+', icon: 'flaticon-money' },
                                { title: 'Short-Term Cycles', text: '1–9 Months', icon: 'flaticon-clock-2' },
                                { title: 'Flexible Structures', text: 'Profit Share / Revenue Share', icon: 'flaticon-handshake' },
                                { title: 'Industry Coverage', text: 'Trade, Agriculture, Energy, Construction', icon: 'flaticon-briefcase' }
                            ].map((card, idx) => (
                                <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                                    <div className="feature-card-premium text-center">
                                        <div className="icon mb-4" style={{ fontSize: '45px', color: theme.deepBlue }}>
                                            <i className={card.icon} />
                                        </div>
                                        <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>{card.title}</h4>
                                        <p style={{ color: theme.goldAccent, fontWeight: '600', margin: 0 }}>{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3 - HOW IT WORKS */}
                <section style={{ padding: '90px 0', backgroundColor: theme.lightGrey }}>
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <h2 style={{ color: theme.deepBlue, marginBottom: '20px' }}>How It Works</h2>
                                <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
                                    Our structured approach ensures all opportunities meet international compliance standards and partner criteria before formal engagement.
                                </p>
                                <div className="p-4" style={{ backgroundColor: theme.deepBlue, color: theme.white, borderRadius: '8px', borderLeft: `4px solid ${theme.goldAccent}` }}>
                                    <i className="fa fa-info-circle gold-accent mr-2 mb-2" style={{ fontSize: '20px' }}></i>
                                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                                        Financing opportunities are subject to due diligence, partner approval, legal compliance, and project viability assessments.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="timeline-wrapper">
                                    {[
                                        { step: '01', title: 'Project Submission', text: 'Initial review of the project concept, capital requirements, and business case.' },
                                        { step: '02', title: 'Due Diligence & Assessment', text: 'Comprehensive analysis of financial viability, legal compliance, and operational readiness.' },
                                        { step: '03', title: 'Partner Review', text: 'Presentation to our international trade facilitators and investment network.' },
                                        { step: '04', title: 'Structuring & Engagement', text: 'Formalizing the profit-share models, legal structures, and deployment terms.' }
                                    ].map((item, idx) => (
                                        <div className="timeline-step d-flex" key={idx}>
                                            <div style={{ marginRight: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <div className="timeline-icon">{item.step}</div>
                                            </div>
                                            <div style={{ paddingTop: '10px' }}>
                                                <h4 style={{ fontSize: '20px', marginBottom: '8px' }}>{item.title}</h4>
                                                <p style={{ color: '#666', margin: 0 }}>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 - GLOBAL EXPANSION & INVESTOR CONNECTIVITY */}
                <section style={{ padding: '90px 0', backgroundColor: theme.white }}>
                    <div className="auto-container">
                        <div className="sec-title text-center mb-5">
                            <h2 style={{ color: theme.deepBlue }}>Global Expansion & Investor Connectivity</h2>
                            <div className="text-decoration" style={{ justifyContent: 'center', display: 'flex' }}>
                                <span className="left" style={{ background: theme.goldAccent, width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                                <span className="right" style={{ background: theme.deepBlue, width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                            </div>
                            <p className="mt-4 mx-auto" style={{ maxWidth: '800px', fontSize: '16px', color: '#666' }}>
                                AICL helps businesses connect with international investors, global trade ecosystems, and cross-border opportunities through strategic partnerships and business facilitation programs.
                            </p>
                        </div>

                        <div className="row mt-5">
                            {[
                                { title: 'Global Investor Access', icon: 'flaticon-global' },
                                { title: 'B2B Matchmaking', icon: 'flaticon-handshake' },
                                { title: 'Proposal Structuring', icon: 'flaticon-document' },
                                { title: 'U.S. Market Connectivity', icon: 'flaticon-location' },
                                { title: 'Trade Delegations', icon: 'flaticon-airplane' },
                                { title: 'Investment Readiness', icon: 'flaticon-chart' }
                            ].map((feature, idx) => (
                                <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                                    <div className="d-flex align-items-center p-4" style={{ backgroundColor: theme.lightGrey, borderRadius: '8px', height: '100%', borderLeft: `3px solid ${theme.deepBlue}` }}>
                                        <i className={`${feature.icon} gold-accent mr-3`} style={{ fontSize: '30px', marginRight: '15px' }} />
                                        <h5 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: theme.deepBlue }}>{feature.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 5 - GLOBAL BUSINESS MEMBERSHIP ACCESS */}
                <section style={{ padding: '90px 0', backgroundColor: theme.lightGrey, backgroundImage: 'url(/assets/images/background/pattern-1.png)' }}>
                    <div className="auto-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center mb-5">
                                <h2 style={{ color: theme.deepBlue }}>Global Business Membership Access</h2>
                                <p style={{ color: '#666', marginTop: '15px' }}>Join our exclusive network for dedicated facilitation and premium access.</p>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="membership-card text-center">
                                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: theme.goldAccent, padding: '5px 15px', borderRadius: '30px', fontWeight: '600', marginBottom: '20px', fontSize: '14px' }}>
                                        PREMIUM TIER
                                    </div>
                                    <h3 style={{ fontSize: '28px', color: theme.deepBlue, marginBottom: '10px' }}>Annual Membership</h3>
                                    <div style={{ fontSize: '48px', fontWeight: '700', color: theme.deepBlue, marginBottom: '30px' }}>
                                        $600<span style={{ fontSize: '16px', color: '#666', fontWeight: '400' }}>/year</span>
                                    </div>
                                    
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', textAlign: 'left' }}>
                                        {[
                                            'Global Business Network',
                                            'B2B Matchmaking',
                                            'Investor Connectivity',
                                            'U.S. Market Access',
                                            'Trade Delegation Opportunities'
                                        ].map((benefit, idx) => (
                                            <li key={idx} style={{ padding: '10px 0', borderBottom: '1px solid #eaeaea', color: '#444' }}>
                                                <i className="fa fa-check gold-accent mr-2" style={{ marginRight: '10px' }}></i> {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <button className="btn-premium" style={{ width: '100%', opacity: 0.7, cursor: 'not-allowed' }} disabled>
                                        Membership Enrollment Coming Soon
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6 - CONTACT / LEAD SECTION */}
                <section style={{ padding: '80px 0', backgroundColor: theme.deepBlue, color: theme.white, textAlign: 'center' }}>
                    <div className="auto-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 style={{ color: theme.white, marginBottom: '20px' }}>Have a Project or Opportunity?</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginBottom: '30px' }}>
                                    Businesses seeking investor connectivity, strategic partnerships, trade facilitation, or project structuring may contact AICL for preliminary discussions.
                                </p>
                                <div>
                                    <Link to="/global-partnerships/contact" className="btn-premium" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        Submit an Inquiry
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default GlobalPartnerships;
