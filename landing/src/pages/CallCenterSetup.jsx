import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import CallCenterSlider from '../components/slider/CallCenterSlider'
import bg25 from "../assets/images/background/contactimage.png"





const CallCenterSetup = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Call Center System & Setup" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <CallCenterSlider/>
                                    <div className="row mb-5">
                                    <h2>Incoming and outgoing ,IVR, VOIP ,Call Center Setup</h2>
                                    <div className="text">In our ongoing pursuit of innovation and adaptability in response to the dynamic business environment, we are delighted to introduce a new enhancement to our service portfolio: "Call Center as a Service." Through extensive development and testing, we have successfully crafted a cloud-based iteration of our contact center solution, providing our clients the freedom to leverage the Call Center/Contact Center as a service. This cloud-based solution eliminates the necessity for on-premises infrastructure, ensuring seamless commissioning and utilization of our Contact Center services.</div>
                                    {/*Theme Carousel*/}
                                     {/* <ServiceSlider1 /> */}
                                    {/* <h2>Confidence in future</h2> */}
                                    <div className="text">At Angalia Investment Consortium Limited - AICL, we are committed to empowering your business with the necessary tools and services for success in Tanzania, East Africa, and the expansive African market. Our dedication to growth, adaptability, and excellence remains steadfast as we embark on this journey as your trusted partner</div>
                                    
                                    {/* <MobileTabs /> */}
                                        {/* <div className="col-md-5">
                                             <h2>Providing <br /> world class service <br /> experiences!..</h2> 
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div> */}
                                        {/* <div className="col-md-7">
                                            <div className="text"><p>AICL ensures your tailored system will be specific to your requirements, on time and within budget.By working with you at every step of the way we ensure you not only get your money's worth, but are proud of the fact that we get so much repeat clients. .</p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />On Time Delivery</li>
                                                <li><i className="fa fa-check" />A Dedicated Team</li>
                                                <li><i className="fa fa-check" />Flexible pricing </li>
                                                
                                            </ul>
                                        </div> */}
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

export default CallCenterSetup