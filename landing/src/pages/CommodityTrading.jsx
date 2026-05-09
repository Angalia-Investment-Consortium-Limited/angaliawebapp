import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import BannerContact from '../components/sections/BannerContact';
import commodityImg from '../assets/images/resource/irrigation.jpg';

const CommodityTrading = () => {
    return (
        <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
            <BannerContact />
            <Breadcrumb breadcrumbTitle="Commodity Trading & Export Facilitation" />
            <section className="services-details" style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12 content-side">
                            <div className="text-center mb-5">
                                <h2>Commodity Trading & Export Facilitation</h2>
                                <p className="text-muted" style={{ fontSize: '18px' }}>
                                    Sourcing, aggregation, procurement coordination, and export facilitation for Tanzanian and East African agricultural commodities.
                                </p>
                                <div className="mt-4">
                                    <Link to="/commodity-trading/buyer-inquiry" className="theme-btn btn-style-one mr-3 mb-2" style={{ marginRight: '15px' }}><span className="btn-title">Submit Buyer Inquiry</span></Link>
                                    <Link to="/commodity-trading/supplier-onboarding" className="theme-btn btn-style-one mr-3 mb-2" style={{ marginRight: '15px' }}><span className="btn-title">Become a Supplier</span></Link>
                                    <Link to="/commodities" className="theme-btn btn-style-one mb-2"><span className="btn-title">Request Commodity Offer</span></Link>
                                </div>
                            </div>
                            
                            <div className="row mt-5 mb-5">
                                <div className="col-md-6">
                                    <h3>Our Role in the Ecosystem</h3>
                                    <p>AICL operates as a professional Tanzania-based trade and facilitation company. We coordinate verified sourcing, aggregation, procurement, and export facilitation through our extensive network of suppliers, farmers, warehouses, and regional aggregators.</p>
                                    <ul className="list mt-3">
                                        <li><i className="fa fa-check text-primary mr-2" /> Buyer demand qualification</li>
                                        <li><i className="fa fa-check text-primary mr-2" /> Supplier and aggregator sourcing</li>
                                        <li><i className="fa fa-check text-primary mr-2" /> Product verification</li>
                                        <li><i className="fa fa-check text-primary mr-2" /> Warehouse/godown evidence collection</li>
                                        <li><i className="fa fa-check text-primary mr-2" /> Sampling coordination</li>
                                        <li><i className="fa fa-check text-primary mr-2" /> Pricing and procurement assessment</li>
                                        <li><i className="fa fa-check text-primary mr-2" /> Export documentation support</li>
                                        <li><i className="fa fa-check text-primary mr-2" /> Transaction facilitation</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <img src={commodityImg} alt="Agricultural Commodities Ecosystem" className="img-fluid rounded shadow" style={{ width: '100%', height: '100%', minHeight: '300px', objectFit: 'cover' }} />
                                </div>
                            </div>

                            <hr />

                            <div className="row mt-5">
                                <div className="col-12 text-center mb-4">
                                    <h3>Our Trade Process</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="card shadow-sm mb-4" style={{ height: '100%' }}>
                                        <div className="card-body">
                                            <h4 className="card-title text-primary" style={{ marginBottom: '20px' }}>For Buyers</h4>
                                            <ol className="pl-4 mt-3" style={{ lineHeight: '2' }}>
                                                <li>Submit inquiry</li>
                                                <li>Buyer qualification</li>
                                                <li>Product sourcing and availability assessment</li>
                                                <li>Price and logistics evaluation</li>
                                                <li>SCO/FCO issuance</li>
                                                <li>Contracting and payment arrangement</li>
                                                <li>Inspection, documentation, and shipment coordination</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card shadow-sm mb-4" style={{ height: '100%' }}>
                                        <div className="card-body">
                                            <h4 className="card-title text-primary" style={{ marginBottom: '20px' }}>For Suppliers</h4>
                                            <ol className="pl-4 mt-3" style={{ lineHeight: '2' }}>
                                                <li>Submit supplier onboarding form</li>
                                                <li>AICL verification</li>
                                                <li>Product/sample review</li>
                                                <li>Quantity and pricing assessment</li>
                                                <li>Supplier agreement or mandate</li>
                                                <li>Buyer matching</li>
                                                <li>Procurement and delivery coordination</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="mt-5">
                                <h3>Trade Documentation</h3>
                                <p>Formal trade requires professional documentation. Depending on the transaction, we assist in preparing and coordinating:</p>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <ul className="list">
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>LOI:</strong> Letter of Intent</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>ICPO:</strong> Irrevocable Corporate Purchase Order</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>SCO:</strong> Soft Corporate Offer</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>FCO:</strong> Full Corporate Offer</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>SPA:</strong> Sales and Purchase Agreement</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>NCNDA:</strong> Non-Circumvention and Non-Disclosure Agreement</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list">
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>IMFPA:</strong> Intermediary Fee Protection Agreement</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>Certificate of Origin:</strong> Processing Support</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>Phytosanitary Certificate:</strong> Processing Support</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>Fumigation Certificate:</strong> Processing Support</li>
                                            <li><i className="fa fa-file-text-o mr-2" /> <strong>SGS:</strong> Coordination of third-party inspections</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 p-4 bg-light rounded text-center">
                                <h5>Compliance Disclaimer</h5>
                                <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
                                    All commodity transactions are subject to product verification, availability confirmation, buyer/supplier due diligence, written agreements, payment confirmation, export compliance, and applicable Tanzanian and international trade regulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CommodityTrading;
