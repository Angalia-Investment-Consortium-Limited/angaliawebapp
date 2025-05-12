import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
// import ServiceSlider1 from "@/components/slider/ServiceSlider1
import WebSlider from '../components/slider/WebSlider'
import bg25 from "../assets/images/background/contactimage.png"
import icon60 from "../assets/images/icons/icon-60.png"
import icon55 from "../assets/images/icons/icon-55.png"







const WebDesignDevelopment = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Web Design and Web Application Development" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <WebSlider />
                                    <div className="row mb-5">
                                    <h2>Web Design and Web Application Development Services</h2>
                                    <div className="text">At Angalia Investment Consortium Limited (AICL), we are dedicated to crafting captivating web experiences and developing dynamic web applications tailored to meet your unique business needs. With a team of skilled professionals and a passion for innovation, we strive to bring your digital vision to life</div>
                                    {/*Theme Carousel*/}
                                     {/* <ServiceSlider1 /> */}
                                    {/* <h2>Confidence in future</h2> */}
                                    <div className="text"><strong>Web Design:</strong> We believe in the power of visually stunning and user-friendly designs. Our expert designers meticulously craft each website to reflect your brand identity while ensuring seamless navigation and optimal user experience. Whether you need a simple portfolio site or a complex e-commerce platform, we have the expertise to deliver. </div>
                                    <div className="text"><strong>Web Application Development:</strong>Harness the power of web technologies to streamline your business processes and engage your audience like never before. Our developers specialize in building custom web applications that are scalable, secure, and efficient. From customer relationship management (CRM) systems to enterprise resource planning (ERP) solutions, we tailor our developments to fit your specific requirements..</div>
                                    <h2>Why Choose AICL?</h2>
                                    {/* <MobileTabs /> */}
                                        <div className="col-md-5">
                                            {/* <h2>Providing <br /> world class service <br /> experiences!..</h2> */}
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>AICL ensures your tailored system will be specific to your requirements, on time and within budget.By working with you at every step of the way we ensure you not only get your money's worth, but are proud of the fact that we get so much repeat clients. .</p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />On Time Delivery</li>
                                                <li><i className="fa fa-check" />A Dedicated Team</li>
                                                <li><i className="fa fa-check" />Flexible pricing </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        
                                        <div className="widget widget_brochur">
                                            <div className="widget-content">
                                                <div className="icon"><img src={icon60} alt="" /></div>
                                                <h5>Web Development Packages</h5>
                                                <h4>TOVUTI</h4>
                                                <a href="/TOVUTI.pdf" download="TOVUTI.pdf"><i className="flaticon-right" />Download (22.1 mb)</a>
                                            </div>
                                        </div>
                                        <div className="widget widget_contact" style={{ backgroundImage: `url(${bg25})` }}>
                                            <div className="widget-content">
                                                <img src={icon55} alt="" />
                                                <h4>Are you interested ?</h4>
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
                    </div>
      

      


      </Layout>
  )
}

export default WebDesignDevelopment