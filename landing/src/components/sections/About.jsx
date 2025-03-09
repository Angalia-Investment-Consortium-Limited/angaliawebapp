import resimage5 from "../../assets/images/why-us.png"
import resignat from "../../assets/images/resource/signature.png"
export default function About() {
    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-block">
                                <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src={resimage5} alt="" /></div></div>
                                {/* <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src={resimage4} alt="" /></div></div> */}
                                {/* <div className="logo"><img src={resicon} alt="" /></div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-title">
                                <h2>Consulting services <br/> in information technology<br /> and Project Management.</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                                <div className="text">Consulting services on all aspects of information technology and project management. Angalia Investment Consortium Limited-AICL is built on values that put customer needs first which is why we employ methodologies that are designed to work for your organization software needs.</div>
                            </div>
                            {/* <div className="text-block">
                                <h5>Industries Covered</h5>
                                <h4>Focusing on what we do best</h4>
                            </div>
                            <div className="text-block">
                                <h5>our expertise</h5>
                                <h4>High level of knowledge </h4>
                            </div> */}
                            <div className="author-box">
                                <div className="signature"><img src={resignat} alt="" /></div>
                                <div className="author-info">
                                    <h4>Brian Kintu</h4>
                                    <h5>Founder</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
