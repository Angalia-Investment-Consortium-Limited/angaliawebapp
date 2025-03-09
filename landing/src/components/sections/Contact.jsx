import ContactSlider5 from "@/components/slider/ContactSlider5"
import { useForm} from "react-hook-form"
import { useFrappeCreateDoc } from "frappe-react-sdk"


export default function Contact() {

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


    return (
        <>
            <section className="contact-section-two">
                <div className="auto-container">
                    <div className="sec-title style-four text-center">
                        <h2>Get touch with us</h2>
                        <span className="text-decoration-three" />
                        {/* <div className="text">Sangara Street ,House no: 19, Mikocheni B ,Close to Rose Garden Road, Dar es Salaam, TANZANIA .</div> */}
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-8 p-0">
                            <div className="contact-form-area">
                            <form onSubmit={handleSubmit(onSubmit)}  className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                        <input type="text" {...register("firstname", {
                                                required: true
                                                
                                            })}
                                            aria-invalid={errors.firstname ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" First Name" />
                                            {errors.firstname?.type === "required"
                                                && (<p className="form-control" role="alert">Your FirstName is required</p>)} 
                                        </div>
                                        <div className="col-md-6 form-group">
                                        <input type="text" {...register("lastname", {
                                                required: true
                                                
                                            })}
                                            aria-invalid={errors.lastname ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" Last Name" />
                                                {errors.firstname?.type === "required"
                                                && (<p className="form-control" role="alert">Your LastName is required</p>)}
                                        </div>
                                        <div className="col-md-6 form-group">
                                        <input type="email" {...register("emailaddress", {
                                                required: "Email Address is required"
                                            })} 
                                            aria-invalid={errors.emailaddress ? "true" : "false"}
                                                className="form-control" 
                                                placeholder="Email Address" />
                                            {errors.emailaddress 
                                            && <p role="alert">{errors.emailaddress.message}</p>}
                                        </div>
                                        <div className="col-md-6 form-group">
                                        <input type="text" {...register("phone", {
                                                required: true
                                                
                                            })}
                                            aria-invalid={errors.phone ? "true" : "false"}
                                                className="form-control"
                                                placeholder=" Phone Number" />
                                                {errors.phone?.type === "required"
                                                && (<p className="form-control" role="alert">Your Phone Number is required</p>)}
                                        </div>
                                        <div className="col-md-12 form-group">
                                        <textarea {...register("message", {
                                                required: true

                                            })} aria-invalid={errors.message ? "true" : "false"}  className="form-control" placeholder="Message goes here" />
                                            {errors.message?.type === "required"
                                                && (<p className="form-control" role="alert">Message is misssing</p>)}
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">SEND MESSAGE <i className="fa fa-caret-right" /></span> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="contact-info-wrapper">
                                <ContactSlider5 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
