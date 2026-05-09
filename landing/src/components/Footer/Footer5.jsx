import { Link } from "react-router-dom"
import bgimage from "../../assets/images/background/bg-16.jpg"


export default function Footer5() {
    return (
        <>
            <footer className="main-footer style-five" style={{ backgroundImage: `url(${bgimage})` }}>
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            {/*Column*/}
                            <div className="column col-lg-5">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="footer-widget logo-widget">
                                            <div className="widget-content">
                                                <div className="footer-logo">
                                                    <Link href="/"><img className="lazy-image" src="/assets/images/logo-v5-2.png" alt="" /></Link>
                                                </div>
                                                <div className="text">Consulting services on all aspects of information technology and Project Management</div>
                                                <div className="link-btn"><Link href="#" className="theme-btn">READ MORE <i className="fa fa-caret-right" /></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Useful Links</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/aicl-about">About</Link></li>
                                                    <li><Link to="/contactus-page">Contact Us</Link></li>
                                                    {/* <li><Link href="/blog-1">Services</Link></li>
                                                    <li><Link href="/services">Products</Link></li> */}
                                                    {/* <li><Link href="/contact-1">Book a demo</Link></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column col-lg-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Services</h3>
                                            <div className="widget-content">
                                                <ul>
                                                <li><Link to="/business-process-and-technology-optimization">Business Process and Technology Optimizaiton</Link></li>
                        <li><Link to="/customization-enterprise-resource-plannig">Customization Enterprise Resource Planning Application (CEPRA)</Link></li>
                        <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                        <li><Link to="/web-design-development">Web Design Development</Link></li>
                        <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
                        <li><Link to="/physical-security-information-management">Physical Security Information Management</Link></li>
                        <li><Link to="/call-center-setup">Call Center Setup</Link></li>
                        <li><Link to="/accounting-finance-outsourcing">Accounting and Finance Outsourcing</Link></li>
                        <li><Link to="/agritech-solutions">Agritech Solutions</Link></li>
                        <li><Link to="/commodity-trading">Commodity Trading</Link></li>
                        <li><Link to="/global-partnerships">Global Partnerships</Link></li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                    {/* <div className="col-md-6">
                                        <div className="footer-widget links-widget">
                                            <h3 className="widget-title">Support</h3>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link to="/contactus-page">Contact Us</Link></li>
                                                     <li><Link href="#"></Link></li> 
                                                     <li><Link href="#">Locations</Link></li>
                                                    <li><Link href="#">Policies</Link></li> 
                                                     <li><Link href="#">Resources</Link></li> 
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            {/*Column*/}
                            <div className="column col-lg-3">
                                <h3 className="widget-title">Subscribe Us</h3>
                                <div className="footer-widget subscribe-widget">
                                    <div className="text">Be the first to recive</div>
                                    {/* <form action="#">
                                        <div className="form-group">
                                            <input type="text" placeholder="Enter your email address..." />
                                            <button type="submit" className="theme-btn"><i className="flaticon-send" /></button>
                                        </div>
                                    </form> */}
                                    <ul className="social-links clearfix">
                                        <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><span className="fab fa-instagram" /></Link></li>
                                        <li><Link href="#"><span className="fab fa-linkedin" /></Link></li>
                                        {/* <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                        <li><Link href="#"><span className="fab fa-skype" /></Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="row m-0 justify-content-between">
                            <div className="copyright" style={{ width: '100%', textAlign: 'center' }}>
                                <Link href="#">© {new Date().getFullYear()} </Link> ANGALIA INVESTMENT CONSORTIUM LIMITED, All Rights Reserved.
                                <div style={{ fontSize: '12px', marginTop: '5px', opacity: 0.8 }}>Global Partnerships & Investment Facilitation — AICL</div>
                            </div>
                            {/* <ul className="menu">
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Site Map</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
