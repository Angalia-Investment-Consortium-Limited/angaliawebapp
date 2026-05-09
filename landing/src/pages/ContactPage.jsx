import React from 'react'
import Layout from '../components/Layout'
import icon53 from "../assets/images/icons/icon-53.png"
import icon54 from "../assets/images/icons/icon-54.png"
import icon40 from "../assets/images/icons/icon-40.png"
import icon51 from "../assets/images/icons/icon-51.png"
import icon50 from "../assets/images/icons/icon-50.png"
import icon52 from "../assets/images/icons/icon-52.png"
import icon10 from "../assets/images/icons/icon-10.png"
import bg20 from "../assets/images/shape/pattern-13.png"
import { Link } from "react-router-dom"
import { useState } from 'react'
import BannerContact from '../components/sections/BannerContact'
import Iframe from 'react-iframe'
import mapimg from '../assets/images/resource/map-two.png'
import Breadcrumb from '../components/Breadcrumb'
import { useForm } from 'react-hook-form'
import { useFrappeCreateDoc} from 'frappe-react-sdk'





const ContactPage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const { createDoc, loading, error } = useFrappeCreateDoc()

    const onSubmit =  (data) => {
         createDoc('Contact Website Message', data)
         .then(() => {
         reset()
          // Show an alert or notification here
         alert('Thank you! for your Message');
        })
        
      }

    

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }

    }

    
  return (
    <Layout headerStyle={5} footerStyle={5}   wrapperCls="home_5">
        <BannerContact />
        <Breadcrumb breadcrumbTitle="Get in Touch" />
        <div>
        <section className="contact-details-section-three">
                        <div className="auto-container">
                            <div className="row sec-top">
                                <div className="col-lg-5">
                                    <div className="sec-title">
                                        <h2>We’d love to help you</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="text mb-30">Don’t hesitate to contact us, We’d love to help you. Better solutions<br /> for your business.</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="outer-box">
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src={icon50} alt="" /></div>
                                                <h4>Tanzania, Dar-es-Salaam</h4>
                                                <ul><li>POSTA, Plot No.1249/11</li>
                                                    <li>Bibi Titi Mohammed Road, <br /> First Floor<br/></li>
                                                    <li>Opposite DIT or Close  to City Mall</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src={icon51} alt="" /></div>
                                                <h4>Call us on</h4>
                                                <ul>
                                                    <li><Link href="tel:255696240077">+255 696 240 077</Link></li>
                                                    <li><Link href="tel:+255627669360">+255 627 669 360</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contact-info-block-three">
                                            <div className="inner-box">
                                                <div className="icon"><img src={icon52} alt="" /></div>
                                                <h4>Mail at</h4>
                                                <ul>
                                                    <li><Link href="mailto:info@aicl.co.tz">business@aicl.co.tz</Link></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="wrapper-box ml-lg-5">
                                        {/* <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div>
                                            <div className="point"><span /></div>
                                        </div>
                                        <div className="pointer-block">
                                            <div className="content">
                                                <div className="text">3333 Raleigh St, Houston, <br />TX 77021, USA.</div>
                                            </div> 
                                            <div className="point"><span /></div> 
                                        </div> */}
                                       
                                        <Iframe  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6220839135212!2d39.27823811098762!3d-6.815735666637901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4df6dd2291a5%3A0xc09fec84a3f34a7a!2sAngalia%20Investment%20Consortium%20Limited!5e0!3m2!1sen!2stz!4v1741018576855!5m2!1sen!2stz"  width="770" height="437" styles={{ border: 0}} allow="fullscreen=" />

                                        {/* <img src={mapimg} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   {/* Contact Form Section Two */}
                   <section className="contact-form-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Send your message to us</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}  className="contact-form">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" {...register("firstname", {
                                                required: true
                                                
                                            })}
                                            aria-invalid={errors.firstname ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" First Name" />
                                            {errors.firstname?.type === "required"
                                                && (<p className="form-control" role="alert">Your FirstName is required</p>)} 
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" {...register("lastname", {
                                                required: true
                                                
                                            })}
                                            aria-invalid={errors.lastname ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" Last Name" />
                                                {errors.firstname?.type === "required"
                                                && (<p className="form-control" role="alert">Your LastName is required</p>)} 
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="email" {...register("emailaddress", {
                                                required: "Email Address is required"
                                            })} 
                                            aria-invalid={errors.emailaddress ? "true" : "false"}
                                                className="form-control" 
                                                placeholder="Email Address" />
                                            {errors.emailaddress 
                                            && <p role="alert">{errors.emailaddress.message}</p>}
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" {...register("phone", {
                                                required: true
                                                
                                            })}
                                            aria-invalid={errors.phone ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" Phone Number" />
                                                {errors.phone?.type === "required"
                                                && (<p className="form-control" role="alert">Your Phone Number is required</p>)} 
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" {...register("website", {
                                                
                                                
                                            })}
                                           
                                                className="form-control"
                                                placeholder=" Website(optional)" />
                                               
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <select className="custom-select" {...register("discuss")} >
                                            
                                            <option value="" disabled>Discuss About..</option>
                                            <option value="Accounting and Finance Outsourcing">Accounting and Finance Outsourcing</option>
                                            <option value="Agritech Solutions">Agritech Solutions</option>
                                            <option value="Business Process and Technology Optimizaition">Business Process and Technology Optimizaition</option>
                                            <option value="Call Center Setup">Call Center Setup</option>
                                            <option value="Custom Enterprise Resource Planning Application - CEPRA with ERPNEXT">Custom Enterprise Resource Planning Application - CEPRA with ERPNEXT</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="Physical Security Information Management">Physical Security Information Management</option>
                                            <option value="Web App & Web Design Developmen">Web App & Web Design Development</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea {...register("message", {
                                                required: true

                                            })} aria-invalid={errors.message ? "true" : "false"}  className="form-control" placeholder="Message goes here" />
                                            {errors.message?.type === "required"
                                                && (<p className="form-control" role="alert">Message is misssing</p>)}
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="text-center">
                                            <button className="theme-btn btn-style-one" type="submit" ><span className="btn-title">SEND MESSAGE</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    
                    </div>
      

      


      </Layout>
  )
}

export default ContactPage