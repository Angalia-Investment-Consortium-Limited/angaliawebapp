import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import PismSlider from '../components/slider/PismSlider'
import bg25 from "../assets/images/background/contactimage.png"





const Pism = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Physical Security Information Management" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <PismSlider />
                                    <div className="row mb-5">
                                    <h2>We develope PSIM software for comprehensive management of intergrated security systems</h2>
                                    <div className="text">PSIM intergrating software does not replace respective systems</div>
                                    <div className="text">PSIM integrating software does not replace respective systems but it integrates the technical security systems into one interface.PSIM software underlies additional options as a result of automatic notifications about identified events, activation of procedures, supervision of the operators’ work and many other.</div>
                                    {/*Theme Carousel*/}
                                     {/* <ServiceSlider1 /> */}
                                    {/* <h2>Confidence in future</h2> */}
                                    <div className="text">We develop customized PSIM software, addressing the needs of particular clients. The customized software takes into account particular preferences and nature of the facility.</div>
                                    
                                    <h2>We recommend the application of PSIM software in</h2>
                                    {/* <MobileTabs /> */}
                                        {/* <div className="col-md-5">
                                            
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div> */}
                                        <div className="row mb-5">
                                            {/* <div className="text"><p>AICL ensures your tailored system will be specific to your requirements, on time and within budget.By working with you at every step of the way we ensure you not only get your money's worth, but are proud of the fact that we get so much repeat clients. .</p></div> */}
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Emergency or crisis management center in large urban agglomeraiton</li>
                                                <li><i className="fa fa-check" />Industrial Plants</li>
                                                <li><i className="fa fa-check" />Military units</li>
                                                <li><i className="fa fa-check" />Public transport entities</li>
                                                <li><i className="fa fa-check" />Logistics Parks</li>
                                                <li><i className="fa fa-check" />Healthcare facilites</li>
                                                <li><i className="fa fa-check" />Campus Facilities</li>
                                                
                                                
                                            </ul>
                                        </div>
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

export default Pism