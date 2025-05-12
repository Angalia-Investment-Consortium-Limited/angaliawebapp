import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import UiUxSlider from '../components/slider/UiUxSlider'
import bg25 from "../assets/images/background/contactimage.png"
import icon60 from "../assets/images/icons/icon-60.png"
import icon55 from "../assets/images/icons/icon-55.png"





const UiUxDesign = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="UI/UX Design" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <UiUxSlider />
                                    <div className="row mb-5">
                                    <h2>UI/UX Design Services & UI/UX Audit</h2>
                                    
                                    <div className="text">Refine your project to achieve optimal usability and user satisfaction.Our team of UX experts meticulously assesses user expectations, behaviors, and technical requirements to ensure applications achieve unparalleled usability and user comfort.</div>
                                    {/*Theme Carousel*/}
                                     {/* <ServiceSlider1 /> */}
                                    {/* <h2>Confidence in future</h2> */}
                                    <div className="text"><strong>Web UI/UX<br/></strong> We craft visually stunning web designs tailored to your audience, ensuring seamless performance across all browsers. Elevate your brand identity with our expertise while guaranteeing a responsive site with lightning-fast page loading times </div>
                                    <div className="text"><strong>Mobile  UI/UX <br/></strong>Enhance your mobile presence with our innovative and contemporary designs, optimized for various screen sizes and platforms. Adhering to official standards, we deliver a native aesthetic and intuitive user experience, ensuring seamless interactions across your apps.</div>
                                    <div className="text"><strong>Software UI/UX</strong><br/>
                                    Transforming visions into captivating digital experiences, we specialize in crafting cutting-edge UI/UX designs for software solutions. With meticulous attention to detail, we blend creativity and functionality to deliver intuitive interfaces that resonate with users. Our team follows industry best practices, leveraging user-centric design principles to ensure seamless navigation and optimal usability. From concept to execution, we collaborate closely with clients to bring their ideas to life while prioritizing aesthetics, accessibility, and user satisfaction. Elevate your software with our bespoke UI/UX design services and leave a lasting impression on your audience.</div>
                                    <h2>UI/UX Audit</h2>
                                    {/* <MobileTabs /> */}
                                        <div className="col-md-5">
                                            {/* <h2>Providing <br /> world class service <br /> experiences!..</h2> */}
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>Experience Assessment and Enhancement Consultation: Our thorough examination of your user interface and experience is a strategic analysis aimed at aligning your digital solution with your business objectives, target market, and end-user needs. By meticulously scrutinizing your product's functionalities, we guarantee optimization for an unparalleled user experience, thus enhancing the value of your offering.</p></div>
                                            {/* <ul className="list">
                                                <li><i className="fa fa-check" />On Time Delivery</li>
                                                <li><i className="fa fa-check" />A Dedicated Team</li>
                                                <li><i className="fa fa-check" />Flexible pricing </li>
                                                
                                            </ul> */}
                                        </div>
                                    </div>
                                    
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        
                                        
                                        <div className="widget widget_brochur" >
                                            <div className="widget-content">
                                                <div className="icon"><img src={icon60} alt="" /></div>
                                                <h5>UI/UX DESIGN SERVICES & UI/UX AUDIT PACKAGES</h5>
                                                <h4>AFROELEGANCE </h4>
                                                <a href="/Afroelegance.pdf" download="Afroelegance.pdf"><i className="flaticon-right" />Download (33.0 mb)</a>
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

export default UiUxDesign