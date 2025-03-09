import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import ServiceSlider from "../components/slider/ServiceSlider"
import bg25 from "../assets/images/background/contactimage.png"
import bg27 from "../assets/images/background/bg-27.jpg"
import icon55 from "../assets/images/icons/icon-55.png"
import icon60 from "../assets/images/icons/icon-60.png"



const ServicePage = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Business Process and Technology Optimization" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <ServiceSlider />
                                    <div className="row mb-5">
                                        <div className="col-md-5">
                                            <h2>Save time, <br /> Maximize <br /> productivity.</h2>
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>Improve quality optimize business process and expand the impact of your technology investment.</p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Business Analysis</li>
                                                <li><i className="fa fa-check" />Solution Implementation</li>
                                                <li><i className="fa fa-check" />Delivery and Support</li>
                                                <li><i className="fa fa-check" />Automation</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <h2>Explore our audit &amp; assurance services</h2> */}
                                    {/*Theme Carousel*/}
                                    {/* <ServiceSlider1 /> */}
                                    {/* <h2>Confidence in future</h2> */}
                                    <div className="text">When your business process align with your business model, every activity has value and supports performance.AICL can help you optimize your processes and get the most from the technology investments meant to support them. Our process-first approach enhances efficiency and consistency, which leads to better metrics and decision making. </div>
                                    {/* <ServiceTabs1 /> */}
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        {/* <div className="widget widget_categories_two">
                                             <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                    <li><Link href="/finance-restructuring">Finance &amp; Restructuring <span /></Link></li>
                                                    <li><Link href="/audit-assurance">Audit &amp; Assurance <span /></Link></li>
                                                    <li><Link href="/trades-stock-markets">Trades &amp; Stock Market <span /></Link></li>
                                                    <li><Link href="/strategy-planning">Strategy &amp; Planning <span /></Link></li>
                                                    <li><Link href="/software-research">Software &amp; Research <span /></Link></li>
                                                    <li><Link href="/support-maintenance">Support &amp; Maintenance <span /></Link></li>
                                                </ul>
                                            </div> 
                                        </div> */}
                                        {/* <div className="widget widget_brochur" style={{ backgroundImage: `url(${bg27})` }}>
                                            <div className="widget-content">
                                                <div className="icon"><img src={icon60} alt="" /></div>
                                                <h5>Case Studies</h5>
                                                <h4>Audit &amp; Assuarance</h4>
                                                <Link href="#"><i className="flaticon-right" />Download (2.5 mb)</Link>
                                            </div>
                                        </div> */}
                                        <div className="widget widget_contact" style={{ backgroundImage: `url(${bg25})` }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Are you interested?</h4>
                                                <div className="phone-number"><Link href="tel:+1 80055544678">+255 768 017 100</Link></div>
                                                <div className="email"><Link href="mailto:supportteam@Envolve.com">businessdevelop@aicl.co.tz</Link></div>
                                                <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white">
                                                    <span className="btn-title">APPOINTMENT</span>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    {/* <section className="feature-section-two mt-0">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Envolve</h4>
                                            <div className="text">To take a trivial example, which of us undertakes <br />laborious physical exercise.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Envolve</h4>
                                            <div className="text">Who chooses to enjoy a pleasure that has no one <br />annoying consequences.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    </div>
      

      


      </Layout>
  )
}

export default ServicePage