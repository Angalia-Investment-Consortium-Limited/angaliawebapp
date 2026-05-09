import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import CepraSlider from "../components/slider/CepraSlider"
import CepraFreeTrialForm from '../components/sections/CepraFreeTrialForm'
import bg25 from "../assets/images/background/contactimage.png"
import bg30 from "../assets/images/background/CepraCover.png"
import icon60 from "../assets/images/icons/icon-60.png"
import icon55 from "../assets/images/icons/icon-55.png"






const CepraPage = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Customization of Enterprise Resource Planning Application (CEPRA)" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <CepraSlider/>
                                    <div className="row mb-5">
                                        <div className="col-md-5">
                                            <h2>Designed for both, <br /> simplicity <br />and power </h2>
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>We create business software solutions to solve workflow issues that enterprises often face,including, intergration of advanced technology apps, business process management production process automation.</p><p>
CERPA comes with 1000+ objects to help you run your business</p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Financial Accounting</li>
                                                <li><i className="fa fa-check" />Order Management</li>
                                                <li><i className="fa fa-check" />HR and Payroll</li>
                                                <li><i className="fa fa-check" />Manufacturing</li>
                                                <li><i className="fa fa-check" />CRM</li>
                                                <li><i className="fa fa-check" />Projects</li>
                                                <li><i className="fa fa-check" />Helpdesk</li>
                                                <li><i className="fa fa-check" />Asset Management</li>
                                                <li><i className="fa fa-check" />Website</li>

                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        
                                        <div className="widget widget_brochur">
                                            <div className="widget-content">
                                                <div className="icon"><img src={icon60} alt="" /></div>
                                                <h5>SUBSCRICPTION PACKAGES </h5>
                                                <h4>CEPRA CATALOGUE</h4>
                                                <a href="/CEPRA-catalogue.pdf" download="CEPRA-catalogue.pdf"><i className="flaticon-right" />Download (66.9 mb)</a>
                                            </div>
                                        </div> 
                                       <div className="widget widget_contact" style={{ backgroundImage: `url(${bg25})` }}>
                                            <div className="widget-content">
                                                <img src={icon55} alt="" />
                                                <h4>Interested to know more?</h4>
                                                <div className="phone-number"><Link href="tel:+255 768 017 100">+255 768 017 100</Link></div>
                                                <div className="email"><Link href="mailto:business@aicl.co.tz">business@aicl.co.tz</Link></div>
                                                <div className="link-btn"><Link to="/contactus-page" className="theme-btn btn-style-one text-white">
                                                    <span className="btn-title">APPOINTMENT</span>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    
                    {/* CEPRA Free Trial Form Section */}
                    <CepraFreeTrialForm />
                    
                    </div>
      

      


      </Layout>
  )
}

export default CepraPage