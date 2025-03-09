import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import AccountFinanceSlider from '../components/slider/AccountingFinancingSlider'
import bg25 from "../assets/images/background/contactimage.png"
import ServiceTab1 from "../components/elements/ServiceTabs1"





const AccountingFinancing = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Accounting and Finance Outsourcing" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AccountFinanceSlider />
                                    <div className="row mb-5">
                                    <h2>Premier provider of Accounting and Financing Outsourcing services</h2>
                                    <div className="text">Angalia Investment Consortium Limited (AICL) is a premier provider of Accounting and Financing Outsourcing services, dedicated to empowering businesses with streamlined financial operations and strategic insights.</div>
                                    <div className="text">We specialize in delivering tailored outsourcing services that optimize accounting processes, enhance financial reporting accuracy, and drive fiscal efficiency.</div>
                                    {/*Theme Carousel*/}
                                     {/* <ServiceSlider1 /> */}
                                    {/* <h2>Confidence in future</h2> */}
                                    <div className="text"><strong>Outsourced Accounting:</strong>AICL offers end-to-end accounting services, handling bookkeeping, payroll management, invoicing, and financial reporting with precision and timeliness.</div>
                                    <div className="text"><strong>Financial Reporting:</strong>We ensure compliance and transparency through meticulous financial reporting, enabling informed decision-making and regulatory adherence.</div>
                                    <div className="text"><strong>Budgeting and Forecasting:</strong> AICL provides expert guidance in budget preparation and financial forecasting, empowering clients to plan for growth and mitigate risks.</div>
                                    <div className="text"><strong>Budgeting and Forecasting:</strong> AICL provides expert guidance in budget preparation and financial forecasting, empowering clients to plan for growth and mitigate risks.</div>
                                    <div className="text"><strong>Virtual CFO Services:</strong> AICL provides expert guidance in budget preparation and financial forecasting, empowering clients to plan for growth and mitigate risks.</div>
                                    <h2>Why Choose AICL?</h2>
                                    <div className="col-md-5">
                                            {/* <h2>Providing <br /> world class service <br /> experiences!..</h2> */}
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                    <div className="row mb-5">
                                            <div className="text"><p>At Angalia Investment Consortium Limited (AICL), we are committed to delivering excellence in accounting and finance outsourcing. Let us optimize your financial operations while you focus on your core business objectives. Contact us today to learn how AICL can elevate your financial management practices.</p></div>
                                            
                                            {/* <ul className="list">
                                                <li><i className="fa fa-check" />On Time Delivery</li>
                                                <li><i className="fa fa-check" />A Dedicated Team</li>
                                                <li><i className="fa fa-check" />Flexible pricing </li>
                                                
                                            </ul> */}
                                        </div>
                                     <ServiceTab1 />

                                        
                                        
                                    </div>
                                    
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
                                        {/* <div className="widget widget_brochur" style={{ backgroundImage: 'url(assets/images/background/bg-27.jpg)' }}>
                                            <div className="widget-content">
                                                <div className="icon"><img src="/assets/images/icons/icon-60.png" alt="" /></div>
                                                <h5>Case Studies</h5>
                                                <h4>Audit &amp; Assuarance</h4>
                                                <Link href="#"><i className="flaticon-right" />Download (2.5 mb)</Link>
                                            </div>
                                        </div> */}
                                        <div className="widget widget_contact" style={{ backgroundImage: `url(${bg25})` }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Are you interested ?</h4>
                                                <div className="phone-number"><Link href="tel:+255 768 017 100">+255 768 017 100</Link></div>
                                                <div className="email"><Link href="mailto:business@aicl.co.tz">business@aicl.co.tz</Link></div>
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
                    </div>
      

      


      </Layout>
  )
}

export default AccountingFinancing