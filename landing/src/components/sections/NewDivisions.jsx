import React from 'react';
import { Link } from 'react-router-dom';

export default function NewDivisions() {
    return (
        <section className="services-section" style={{ padding: '90px 0', backgroundColor: '#f9f9f9' }}>
            <div className="auto-container">
                <div className="sec-title text-center mb-5">
                    <h2>Our New Premium <span style={{ color: '#D4AF37' }}>Divisions</span></h2>
                    <div className="text-decoration" style={{ justifyContent: 'center', display: 'flex' }}>
                        <span className="left" style={{ background: '#D4AF37', width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                        <span className="right" style={{ background: '#0B1B3F', width: '40px', height: '2px', display: 'inline-block', margin: '0 10px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="inner-box" style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%', borderTop: '4px solid #0B1B3F', transition: 'transform 0.3s' }}>
                            <div className="icon-box mb-4" style={{ fontSize: '45px', color: '#0B1B3F' }}>
                                <i className="flaticon-global"></i>
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#0B1B3F' }}>Global Partnerships & Investment Facilitation</h3>
                            <div className="text" style={{ color: '#666', marginBottom: '30px', fontSize: '16px', lineHeight: '1.6' }}>
                                Connect with international investors, global trade ecosystems, and cross-border opportunities through strategic partnerships and business facilitation.
                            </div>
                            <Link to="/global-partnerships" className="btn-style-one" style={{ backgroundColor: '#D4AF37', borderColor: '#D4AF37', color: '#0B1B3F' }}><span className="btn-title">Explore Division</span></Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="inner-box" style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%', borderTop: '4px solid #009933', transition: 'transform 0.3s' }}>
                            <div className="icon-box mb-4" style={{ fontSize: '45px', color: '#009933' }}>
                                <i className="flaticon-chart"></i>
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#0B1B3F' }}>Commodity Trading & Export Facilitation</h3>
                            <div className="text" style={{ color: '#666', marginBottom: '30px', fontSize: '16px', lineHeight: '1.6' }}>
                                Professional Tanzanian commodity sourcing, aggregation, procurement coordination, and export facilitation company for agricultural commodities.
                            </div>
                            <Link to="/commodity-trading" className="btn-style-one" style={{ backgroundColor: '#009933', borderColor: '#009933' }}><span className="btn-title" style={{ color: '#fff' }}>Explore Division</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
