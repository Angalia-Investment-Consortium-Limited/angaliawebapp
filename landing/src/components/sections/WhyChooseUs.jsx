
import backimg from "../../assets/images/background/bg-15.jpg"
import mockupimg from "../../assets/images/resource/mockup-2.png"



           
            

export default function WhyChooseUs() {
    return (
        <>
            <section className="why-choose-us-section-two" style={{ backgroundImage: `url(${backimg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sec-title style-four light">
                                <h2>The manner in which we <br/> Operate</h2>
                                <span className="text-decoration-three" />
                            </div>
                            {/* <div className="text">To provide business planning and marketing services our being <br /> able to do what we like best.</div> */}
                            <div className="whay-choose-block">
                                <div className="inner-box">
                                    {/* <div className="icon"><span className="flaticon-one" /></div> */}
                                    <h4>Discuss your business <br/> needs</h4>
                                    <div className="text">Meet with you and have a conversation that is geared towards understanding your business processes, how they are currently operationalized (as-is model) and how they could be improved. </div>
                                </div>
                            </div>
                            <div className="whay-choose-block">
                                <div className="inner-box">
                                    {/* <div className="icon"><span className="flaticon-diamond" /></div> */}
                                    <h4>Conceptualize a  solution</h4>
                                    <div className="text">With understanding your as-is model, we will clearly conceptualize your to-be model that will bridge the chasm between the two. </div>
                                </div>
                            </div>
                            <div className="whay-choose-block">
                                <div className="inner-box">
                                    {/* <div className="icon"><span className="flaticon-one" /></div> */}
                                    <h4> Strategize implementation </h4>
                                    <div className="text">Discuss implementation details with you without losing focus on what your vision is. </div>
                                </div>
                            </div>
                            <div className="whay-choose-block">
                                <div className="inner-box">
                                    {/* <div className="icon"><span className="flaticon-one" /></div> */}
                                    <h4>Execute your vision </h4>
                                    <div className="text">Create a to-be model around your vision. </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image"><img src={mockupimg} alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>

        
    )
}
