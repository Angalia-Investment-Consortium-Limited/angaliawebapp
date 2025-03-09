import React from 'react'
import Layout from '../../components/Layout'
import { Link } from "react-router-dom"
import BannerContact from '../../components/sections/BannerContact'
import Breadcrumb from '../../components/Breadcrumb'
// import ServiceSlider1 from "../../components/slider/ServiceSlider1"
import { useState } from 'react';
// import WebSlider from '../../components/slider/WebSlider'
// import bg25 from "../../assets/images/background/contactimage.png"







const Shuleni = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Shuleni - Learning and Education IT Solutions" />
        <div>
        <section  className="pricing-section">
                    <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Flexible Plans for <br /> Small to Fast-Growing Business</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="pricing-btn">
                                    <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Choose your plan
                                            </a>
                                        </li>
                                        {/* <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Specials
                                            </a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                                Annually
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-content">
                                {/* Tab panes */}
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <h3>Switch to annual plan at anytime.</h3>
                                        <div className="wrapper-box">
                                            <div className="row m-0">
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Shuleni Silver</div>
                                                                <div className="price"><span>Tsh.</span>2,500,000 <sub></sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Most Recommended</h5>
                                                             <h4>Setup involves the education modules, such as programs , course , topics  and more. <br />Other modules such as students, admission, fees, schedule, attendance, assessment, instructors and tools.</h4> 
                                                            <ul>
                                                                <li><i className="flaticon-tick" />Website</li>
                                                                <li><i className="flaticon-tick" />ERPNEXT Customization</li>
                                                                <li><i className="flaticon-tick" />Student Web Login</li>
                                                                <li><i className="flaticon-tick" />Teachers Web Login</li>
                                                                <li><i className="flaticon-tick" />Admin Web Login</li>
                                                                
                                                                
                                                                {/* <li><span><i className="flaticon-right-arrow" />Data sprint</span></li>
                                                                <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />20 Days of support</li> */}
                                                            </ul>
                                                            {/* <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block active animated fadeInLeft" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Shuleni Bronze</div>
                                                                <div className="price"><span>Tsh.</span>4,200,000 <sub></sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>for Large Business</h5>
                                                            <h4>Setup involves the education modules, such as programs , course , topics  and more. <br />Other modules such as students, admission, fees, schedule, attendance, assessment, instructors and tools.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />Website</li>
                                                                <li><i className="flaticon-tick" />ERPNEXT Customization</li>
                                                                <li><i className="flaticon-tick" />Student Web Login</li>
                                                                <li><i className="flaticon-tick" />Teachers Web Login</li>
                                                                <li><i className="flaticon-tick" />Admin Web Login</li>
                                                                <li><i className="flaticon-tick" />Biometric Intergration</li>
                                                                <li><i className="flaticon-tick" />Payment Intergrations ( Mobile and Bank)</li>

                                                                {/* <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />30 Days of support</li> */}
                                                            </ul>
                                                            {/* <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category"> Shuleni Gold</div>
                                                                <div className="price"><span>Tsh.</span>9,500,000 <sub></sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Recommended</h5>
                                                            <h4>Setup involves the education modules, such as programs , course , topics  and more. <br />Other modules such as students, admission, fees, schedule, attendance, assessment, instructors and tools.</h4>
                                                            <ul>
                                                            <li><i className="flaticon-tick" />Website</li>
                                                                <li><i className="flaticon-tick" />ERPNEXT Customization</li>
                                                                <li><i className="flaticon-tick" />Student Web Login</li>
                                                                <li><i className="flaticon-tick" />Teachers Web Login</li>
                                                                <li><i className="flaticon-tick" />Admin Web Login</li>
                                                                <li><i className="flaticon-tick" />Biometric Intergration</li>
                                                                <li><i className="flaticon-tick" />Payment Intergrations ( Mobile and Bank)</li>
                                                                <li><i className="flaticon-tick" />School Bus Tracking App with </li>
                                                                <li><span><i className="flaticon-right-arrow" />Parents App ( Android & IOS)</span></li>
                                                                <li><span><i className="flaticon-right-arrow" />Driver App ( Android & IOS)</span></li>
                                                                <li><span><i className="flaticon-right-arrow" />Admin web panel</span></li>

                                                            </ul>
                                                            {/* <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <h3>Switch to annual plan and get 25% offer.</h3>
                                        <div className="wrapper-box">
                                            <div className="row m-0">
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Basic Pack</div>
                                                                <div className="price"><span>$</span>24.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Most Recommended</h5>
                                                            <h4>Power of choice is untrammelled and <br />do what we like best.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />4-5 Weeks from to finish</li>
                                                                <li><span><i className="flaticon-right-arrow" />Data sprint</span></li>
                                                                <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />20 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block active animated fadeInRight" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Standard Pack</div>
                                                                <div className="price"><span>$</span>45.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>for Large Business</h5>
                                                            <h4>Matters to  principle of selection our <br />pleasures to secure.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />3-4 Weeks from to finish</li>
                                                                <li><i className="flaticon-tick" />Data sprint</li>
                                                                <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />30 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Advanced Pack</div>
                                                                <div className="price"><span>$</span>60.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Most Recommended</h5>
                                                            <h4>These cases are perfectly simple <br />&amp; easy to distinguish.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />2 Weeks from to finish</li>
                                                                <li><i className="flaticon-tick" />Data sprint</li>
                                                                <li><i className="flaticon-tick" />Results revision</li>
                                                                <li><i className="flaticon-tick" />20 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            </div>
                     </section>
        <section className="services-details">
                        <div className="auto-container">
                        
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    {/* <WebSlider /> */}
                                    <div className="row mb-5">
                                    <h2>Shuleni - Learning and Education IT Solutions</h2>
                                    <div className="text">Introducing Shuleni - your gateway to revolutionizing education. At Shuleni, we're committed to reshaping the educational landscape with tailor-made IT solutions. Fueled by a fervent dedication to learning and harnessing the latest in technology, we empower educators, institutions, and learners alike to thrive in the digital age</div>
                                    
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    
                    </div>
      

      


      </Layout>
  )
}

export default Shuleni