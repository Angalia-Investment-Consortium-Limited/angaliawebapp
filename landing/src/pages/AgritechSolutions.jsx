import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../components/sections/BannerContact'
import Breadcrumb from '../components/Breadcrumb'
import AgritechSolutionSlider from '../components/slider/AgritechSolutionSlider'
import bg25 from "../assets/images/background/contactimage.png"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import ServiceTabs1 from "@/components/elements/ServiceTabs1"





const AgritechSolution = () => {
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Agritech-solutions" />
        <div>
        <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AgritechSolutionSlider/>
                                    <div className="row mb-5">
                                        <h2>Strategic Investment for Sustainable Growth</h2>
                                        <div className="text">Angalia Investment Consortium Limited we dedicated to revolutionizing the agricultural sector through cutting-edge technology and sustainable practices. Our mission is to empower farmers, enhance productivity, and promote environmental stewardship. With a focus on innovation, Agritech Solution provides a comprehensive suite of services designed to address the diverse needs of modern agriculture.</div>
                                        <div className="text"><h2>Precision Farming</h2></div>

                                        <div className="text"><strong>Smart Irrigation Systems:</strong>Our state-of-the-art irrigation solutions utilize sensors and data analytics to optimize water usage, ensuring crops receive the right amount of water at the right time. This reduces waste and increases yield.</div>
                                        <div className="text"><strong>Soil Health Monitoring:</strong>Through advanced soil testing and monitoring technologies, we provide farmers with real-time data on soil health, enabling them to make informed decisions about fertilization and crop management.</div>
                                        <div className="text"><h2>Crop Management Solutions</h2></div>
                                        <div className="text"><strong>Drones and Satellite Imagery:</strong>We employ drones and satellite technology to monitor crop health, detect pest infestations, and assess crop performance. This allows for early intervention and precise application of treatments.</div>
                                        <div className="text"><strong>Crop Modeling and Forecasting:</strong>Our predictive analytics tools help farmers anticipate crop performance and make proactive decisions to mitigate risks and maximize productivity.</div>
                                        <div className="text"><h2>Sustainable Agriculture</h2></div> 
                                        <div className="text"><strong>Organic Farming Practices:</strong>Angalia Investment Consortium Limited - AICL ,  promotes organic farming methods that enhance soil fertility and biodiversity while reducing the reliance on chemical inputs</div>
                                        <div className="text"><strong>Sustainable Resource Management:</strong>We offer solutions for efficient resource management, including renewable energy integration, waste recycling, and water conservation techniques.</div>
                                        <div className="text"><h2>Farm Management Software</h2></div>
                                        <div className="text"><strong>Integrated Farm Management Systems:</strong>Our software solutions provide a centralized platform for farmers to manage all aspects of their operations, from planting to harvesting, financial management, and inventory control.</div>
                                        <div className="text"><strong>Data Analytics and Reporting:</strong>By leveraging big data and analytics, our software helps farmers gain insights into their operations, track performance, and make data-driven decisions.</div>

                                            
                                        
                                       
                                         
                                    </div>
                                    
                                   
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_contact" style={{ backgroundImage: `url(${bg25})` }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Are you interested?</h4>
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

export default AgritechSolution