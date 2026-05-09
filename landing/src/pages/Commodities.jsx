import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import BannerContact from '../components/sections/BannerContact';

const commoditiesData = [
    { name: "Robusta Coffee", origin: "Tanzania / East Africa", packaging: "60kg Jute Bags", model: "Sourcing, Export facilitation", icon: "flaticon-coffee-cup" },
    { name: "Sesame Seeds", origin: "Tanzania / East Africa", packaging: "50kg PP Bags", model: "Aggregation, Export facilitation", icon: "flaticon-leaf" },
    { name: "Yellow Peas", origin: "Tanzania / East Africa", packaging: "50kg PP Bags", model: "Sourcing, Aggregation", icon: "flaticon-leaf" },
    { name: "Pulses", origin: "Tanzania / East Africa", packaging: "50kg PP Bags", model: "Sourcing, Aggregation", icon: "flaticon-leaf" },
    { name: "Cashew Nuts", origin: "Tanzania / East Africa", packaging: "80kg Jute Bags", model: "Sourcing, Export facilitation", icon: "flaticon-leaf" },
    { name: "Maize", origin: "Tanzania / East Africa", packaging: "50kg PP Bags / Bulk", model: "Sourcing, Aggregation", icon: "flaticon-leaf" },
    { name: "Spices", origin: "Tanzania / East Africa", packaging: "Various", model: "Sourcing", icon: "flaticon-leaf" },
    { name: "Other Commodities", origin: "Tanzania / East Africa", packaging: "Various", model: "Sourcing, Procurement coordination", icon: "flaticon-global" }
];

const Commodities = () => {
    return (
        <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
            <BannerContact />
            <Breadcrumb breadcrumbTitle="Agricultural Commodities" />
            <section className="services-section-four" style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Our Commodity Portfolio</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                        <div className="text mt-3">
                            AICL facilitates trade for a variety of premium Tanzanian and East African agricultural commodities.
                        </div>
                    </div>
                    
                    <div className="row">
                        {commoditiesData.map((item, index) => (
                            <div className="col-lg-4 col-md-6 service-block-four" key={index} style={{ marginBottom: '30px' }}>
                                <div className="inner-box" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '5px', height: '100%', transition: 'all 0.3s ease' }}>
                                    <div className="icon" style={{ fontSize: '40px', color: '#ff5e14', marginBottom: '15px' }}><i className={item.icon} /></div>
                                    <h4 style={{ marginBottom: '15px' }}>{item.name}</h4>
                                    <ul style={{ listStyle: 'none', padding: '0', margin: '0 0 20px 0', fontSize: '14px', color: '#666' }}>
                                        <li style={{ marginBottom: '5px' }}><strong>Origin:</strong> {item.origin}</li>
                                        <li style={{ marginBottom: '5px' }}><strong>Packaging:</strong> {item.packaging}</li>
                                        <li style={{ marginBottom: '5px' }}><strong>Trade Model:</strong> {item.model}</li>
                                    </ul>
                                    <div className="link-btn">
                                        <Link to={`/commodity-trading/buyer-inquiry?product=${encodeURIComponent(item.name)}`} className="theme-btn btn-style-one" style={{ padding: '10px 20px', fontSize: '14px' }}>
                                            <span className="btn-title">Request Offer</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Commodities;
