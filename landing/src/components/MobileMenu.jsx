import { Link } from "react-router-dom"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

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
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link to="/"><img src="/assets/images/logo-2.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/aicl-about">About</Link></li>

                                {/* <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link to="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li className={isActive.key == 8 ? "dropdown current" : "dropdown"}><Link to="/#">About Us</Link>
                                            <ul style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <li><Link to="/about-1">About Style 01</Link></li>
                                                <li><Link to="/about-2">About Style 02</Link></li>
                                                <li><Link to="/about-3">About Style 03</Link></li>
                                            </ul>
                                            <div className={isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(8)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 9 ? "dropdown current" : "dropdown"}><Link to="/#">Meet Our Team</Link>
                                            <ul style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <li><Link to="/team-1">Team Style 01</Link></li>
                                                <li><Link to="/team-2">Team Style 02</Link></li>
                                                <li><Link to="/team-3">Team Style 03</Link></li>
                                                <li><Link to="/team-4">Team Style 04</Link></li>
                                                <li><Link to="/team-details">Team Details</Link></li>
                                            </ul>
                                            <div className={isActive.key == 9 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(9)}><span className="fa fa-angle-right" /></div></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link to="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <li><Link to="/business-process-and-technology-optimization">Business Process and Technology Optimizaiton</Link></li>
                        <li><Link to="/customization-enterprise-resource-plannig">Customization of Enterprise Resource Planning Application (CEPRA)</Link></li>
                        <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                        <li><Link to="/web-design-development">Web Design Development</Link></li>
                        <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
                        <li><Link to="/physical-security-information-management">Physical Security Information Management</Link></li>
                        <li><Link to="/call-center-setup">Call Center Setup</Link></li>
                        <li><Link to="/accounting-finance-outsourcing">Accounting and Finance Outsourcing</Link></li>
                        <li><Link to="/agritech-solutions">Agritech Solutions</Link></li>
                        <li><Link to="/commodity-trading">Commodity Trading</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div></li>
                                <li><Link to="/global-partnerships">Global Partnerships</Link></li>

                                    {/* <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link to="/#">Products</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <li><Link to="/ongea">Ongea </Link></li>
                        <li><Link to="/kiganjani">Kiganjani</Link></li>
                        <li><Link to="/angalia-duka">AngaliaDuka</Link></li>
                        <li><Link to="/tovuti">Tovuti </Link></li>
                        <li><Link to="/karakana">Karakana </Link></li>
                        <li><Link to="/cepra-product">CEPRA </Link></li>
                        <li><Link to="/akili-central">Akili Central </Link></li>
                        <li><Link to="/shuleni">Shuleni</Link></li>
                                    
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div></li> */}
                                    <li><Link to="/events">Events</Link></li>
                                    <li><Link to="/contactus-page">Contact</Link></li>
                                    

                                   


                                {/* <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link to="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link to="/career">Career</Link></li>
                                        <li className={isActive.key == 10 ? "dropdown current" : "dropdown"}><Link to="/#">Contact</Link>
                                            <ul style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <li><Link to="/contact-1">Contact Style 01</Link></li>
                                                <li><Link to="/contact-2">Contact Style 02</Link></li>
                                                <li><Link to="/contact-3">Contact Style 03</Link></li>
                                                <li><Link to="/contact-4">Contact Style 04</Link></li>
                                            </ul>
                                            <div className={isActive.key == 10 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(10)}><span className="fa fa-angle-right" /></div></li>
                                        <li><Link to="/faq">FAQ’s</Link></li>
                                        <li className={isActive.key == 11 ? "dropdown current" : "dropdown"}><Link to="/#">Pricing &amp; Plans</Link>
                                            <ul style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}>
                                                <li><Link to="/pricing-1">Pricing Style 01</Link></li>
                                                <li><Link to="/pricing-2">Pricing Style 02</Link></li>
                                            </ul>
                                            <div className={isActive.key == 11 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(11)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 12 ? "dropdown current" : "dropdown"}><Link to="/#">Testimonial</Link>
                                            <ul style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}>
                                                <li><Link to="/testimonial-1">Testimonial Style 01</Link></li>
                                                <li><Link to="/testimonial-2">Testimonial Style 02</Link></li>
                                                <li><Link to="/testimonial-3">Testimonial Style 03</Link></li>
                                                <li><Link to="/testimonial-4">Testimonial Style 04</Link></li>
                                            </ul>
                                            <div className={isActive.key == 12 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(12)}><span className="fa fa-angle-right" /></div></li>
                                        <li><Link to="/404">404</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div></li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link to="/#">Portfolio</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li className={isActive.key == 13 ? "dropdown current" : "dropdown"}><Link to="/#">Portfolio Grid</Link>
                                            <ul style={{ display: `${isActive.key == 13 ? "block" : "none"}` }}>
                                                <li><Link to="/portfolio-1">Grid View 01</Link></li>
                                                <li><Link to="/portfolio-2">Grid View 02</Link></li>
                                                <li><Link to="/portfolio-3">Grid View 03</Link></li>
                                            </ul>
                                            <div className={isActive.key == 13 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(13)}><span className="fa fa-angle-right" /></div></li>
                                        <li><Link to="/portfolio-4">Portfolio Masonry</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div></li>
                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link to="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li className={isActive.key == 14 ? "dropdown current" : "dropdown"}><Link to="/#">Blog Default</Link>
                                            <ul style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                                <li><Link to="/blog-1">Full Width</Link></li>
                                                <li><Link to="/blog-2">Left Sidebar</Link></li>
                                                <li><Link to="/blog-3">Right Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 14 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(14)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 14 ? "dropdown current" : "dropdown"}><Link to="/#">Blog Grdi View</Link>
                                            <ul style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                                <li><Link to="/blog-4">Left Sidebar</Link></li>
                                                <li><Link to="/blog-5">Right Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 14 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(14)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 15 ? "dropdown current" : "dropdown"}><Link to="/#">Blog List View</Link>
                                            <ul style={{ display: `${isActive.key == 15 ? "block" : "none"}` }}>
                                                <li><Link to="/blog-6">Full Width</Link></li>
                                                <li><Link to="/blog-7">Left Sidebar</Link></li>
                                                <li><Link to="/blog-8">Right Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 15 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(15)}><span className="fa fa-angle-right" /></div></li>
                                        <li className={isActive.key == 16 ? "dropdown current" : "dropdown"}><Link to="/#">Single Post</Link>
                                            <ul style={{ display: `${isActive.key == 16 ? "block" : "none"}` }}>
                                                <li><Link to="/blog-details">With Sidebar</Link></li>
                                                <li><Link to="/blog-details-2">Without Sidebar</Link></li>
                                            </ul>
                                            <div className={isActive.key == 16 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(16)}><span className="fa fa-angle-right" /></div></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div></li>
                                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}><Link to="/#">Shop</Link>
                                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                        <li><Link to="/shop">Products</Link></li>
                                        <li><Link to="/product-details">Product Details</Link></li>
                                        <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/account">My Account</Link></li>
                                    </ul>
                                    <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></div></li> */}
                            </ul>
                        </div>

                    </div>
                    
                    {/*Social Links*/}
                    <div className="social-links">
                    <Link to="https://aicl.co.tz/login?redirect-to=%2Fapp%2Fwebsite-settings%2FWebsite%2520Settings#login"><button className="theme-btn btn-style-one"><span className="btn-title">Desk Login</span></button></Link>
                    
                        
                    </div>
                    {/* <div className="social-links"><div className="link-btn"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Book a Demo</span></a></div></div> */}
                    <div className="social-links">
                    <ul className="clearfix">
                            <li><Link to="/https://twitter.com/AngaliaInvest"><span className="fab fa-twitter" /></Link></li>
                            <li><Link to="/https://www.facebook.com/angaliatz"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link to="/https://www.instagram.com/angaliainvestmentconsortium/"><span className="fab fa-instagram" /></Link></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
