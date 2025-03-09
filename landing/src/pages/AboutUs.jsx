import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/sections/Banner'
import Breadcrumb from '../components/Breadcrumb'
import BannerContact from '../components/sections/BannerContact'
import { Link } from 'react-router-dom'
import imgfound from '../assets/images/resource/founderimg.jpg'
import { useForm } from 'react-hook-form'
import { useFrappeCreateDoc} from 'frappe-react-sdk'





const Kuhusuaicl = () => {

    const { register,  handleSubmit, reset,  formState: { errors } } = useForm()

    const { createDoc, loading, error } = useFrappeCreateDoc()

    const onSubmit =  (data) => {
        createDoc('Web Appointment Message', data)
        .then(() => {
        reset()
         // Show an alert or notification here
        alert('Thank you! for making an appointment with us, will call you to confirm');
       })
       
     }

    


  return (
    <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
      <BannerContact />
      <Breadcrumb breadcrumbTitle="About Us" />
      <section className="team-details-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-team-member">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src={imgfound} alt="" />
                                            {/* <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div> */}
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Brian Kintu</h4>
                                                <div className="designation"> Founder</div>
                                            </div>
                                            <ul className="info-list">
                                                <li><span>Email:</span> <Link href="mailto:clinton@Envolveteam.com">founder@aicl.co.tz</Link></li>
                                                {/* <li><span>Phone:</span> <Link href="tel:+321 22 333 4455">+321 22 333 4455</Link></li>
                                                <li><span>Address:</span> 3333 Raleigh St, Houston, USA.</li>
                                                <li><span>Website:</span> www.example.com</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="working-history">
                                    <div className="top-content">
                                        <h2>Empowering organizations through expert IT &amp; Project Management consulting<br />  #ITExcellence</h2>
                                        <div className="text">Consulting services on all aspects of information technology and Project Management. Angalia Investment Consortium Limited-AICL is built on values that put customer needs first which is why we employ methodologies that are designed to work for your organization software needs. </div>
                                    </div>
                                    <div className="wrapper-box">
                                        <ul className="timeline">
                                            <li data-date="2022-Present" className="current">
                                                <div className="text">Here we want to express our heartfelt gratitude to our clients for the trust they have been placing in us. We have proven to process, discipline and leadership.Project management consultancy services are vital for  high impact, time sensitive projects those most critical to your organization.</div>
                                            </li>
                                            <li data-date="">
                                                <div className="text">We research all aspects of your business and target market, and offer you the best possible solutions which are both cost and time effective.</div>
                                            </li>
                                            <li data-date="">
                                                <div className="text">Operating  in Dar es salaam, Tanzania</div>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                             {/* Features Section five*/}
                    
                            <section className="why-choose-us-section-three">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Our approach to working with our clients <br /> provides significant benefits</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="wrapper-box">
                                <div className="outer-box">
                                    <div className="row m-0">
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-rocket-2" /></div>
                                                <h4>Quick Response</h4>
                                                <div className="text">We respond quickly <br /> ensuring timely solutions to all your inquiries.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-target-1" /></div>
                                                <h4>Experience Team</h4>
                                                <div className="text">Our skilled team brings years of <br /> experience to deliver innovative solutions.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-world-1" /></div>
                                                <h4>Flexible Payment</h4>
                                                <div className="text">We offer flexible payment options to <br /> make our services more accessible.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-advice" /></div>
                                                <h4>Tailored advice</h4>
                                                <div className="text">Our advice is personalized to fit  <br /> your unique needs and goals.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-medal" /></div>
                                                <h4>Quality Service</h4>
                                                <div className="text">We are committed to providing high-quality <br /> services that meet the highest standards</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-agreement" /></div>
                                                <h4>24/7 Support</h4>
                                                <div className="text">Our team is available 24/7 to<br /> provide assistance whenever you need it.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="contact-form-area">
                                        <div className="sec-title">
                                            <h2>Make an appointment</h2>
                                            <div className="text-decoration">
                                                <span className="left" />
                                                <span className="right" />
                                            </div>
                                        </div>
                                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}   className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                            <input type="text" {...register("fullname", {
                                                required: true,
                                                minLength: 5
                                            })}
                                            aria-invalid={errors.fullname ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" Fullname" />
                                            {errors.fullname?.type === "required"
                                                && (<p className="form-control" role="alert">Your Fullname is required</p>)} 
                                            </div>


                                            <div className="col-md-6 form-group">
                                            <input type="text" {...register("phone", {
                                                required: true,
                                                minLength: 5
                                            })}
                                            aria-invalid={errors.phone ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" Phone" />
                                            {errors.phone?.type === "required"
                                                && (<p className="form-control" role="alert">Your Phonenumber is required</p>)}
                                            </div>


                                            <div className="col-md-6 form-group"> 
                                            <label>Date:</label>
                                            <input type="date" {...register("date", {
                                                required: true
                                                
                                            })} aria-invalid={errors.date ? "true" : "false"}
                                            className="form-control"
                                            
                                            />
                                             {errors.date?.type === "required"
                                                && (<p className="form-control" role="alert">Select a date is required</p>)}

                                
                                            </div>


                                            <div className="col-md-6 form-group"> 
                                                <label>Time:</label>
                                                <input type="time"  {...register("time", {
                                                required: true
                                                
                                            

                                                })} aria-invalid={errors.time ? "true" : "false"}
                                            className="form-control"
                                            

                                                />
                                                {errors.time?.type === "required"
                                                && (<p className="form-control" role="alert">Please select your preffered time</p>)}
                                                {/* <i className="far fa-clock" /> */}
                                            </div>
                                            <div className="col-md-12 form-group">
                                            <select className="custom-select" {...register("discuss")} >
                                                    <option value="" disabled>Discusss about</option>
                                                    <option value="Business Aproach">Business Aproach</option>
                                                    <option value="Trades Stock Market">Trades &amp; Stock Market</option>
                                                    <option value="Strategy Planning">Strategy &amp; Planning</option>
                                                    <option value="Software Research">Software &amp; Research</option>
                                                    <option value="Support Maintenance">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <button className="theme-btn btn-style-one mb-30" type="submit" name="submit-form"><span className="btn-title">GET APPOINTMENT</span></button>
                                            </div>
                                        </div>
                                    </form>

                        </div>
                    </div>
                </section>
      
      

      


      </Layout>
  )
}

export default Kuhusuaicl