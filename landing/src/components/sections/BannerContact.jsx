import { Link } from "react-router-dom"
import shape1 from "../../assets/images/shape/shape-11.png"
import shape2 from "../../assets/images/shape/shape-12.png"
import shape3 from "../../assets/images/shape/shape-13.png"
import shape4 from "../../assets/images/shape/shape-14.png"
import shape5 from "../../assets/images/shape/shape-15.png"
import shape6 from "../../assets/images/shape/shape-16.png"
import mockupimage from "../../assets/images/main-slider/mockup-1.png"

export default function BannerContact() {
    return (
        <>
            <section className="banner-section-two">
                <div className="shape-one"><img src={shape1} alt="" /></div>
                <div className="shape-two"><img src={shape2} alt="" /></div>
                <div className="shape-three"><img src={shape3} alt="" /></div>
                <div className="shape-four"><img src={shape4} alt="" /></div>
                <div className="shape-five"><img src={shape5} alt="" /></div>
                <div className="shape-six"><img src={shape6} alt="" /></div>
                <div className="auto-container">
                    {/* <div className="content-box">
                        <div>
                            <h2>Bespoke <br /> <span>software solutions for your unique </span> business needs</h2>
                            <div className="text">Angalia Investment Consortium Limited - AICL approach focuses on client's needs from business <br />analysis to solution implementation, delivery and support.Increase your productivity by automating many of your <br/> manual tasks.</div>
                            <div className="btn-box">
                                <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Get a Custom Enterprise Resource Planning Application <i className="fa fa-caret-right" /></span></Link>
                                <Link href="#" className="theme-btn btn-style-six">CEPRA <i className="fa fa-caret-right" /></Link>
                            </div>
                        </div>
                        
                    </div> */}
                </div>
            </section>
        </>
    )
}
