import { Link } from "react-router-dom"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li><Link to="/">Home</Link></li>
                <li className="dropdown"><Link to="#" >About</Link>
                <ul>
                    <li><Link to="/aicl-about">About AICL</Link></li>
                    {/* <li><Link to="/aicl-team">Meet our Team</Link></li> */}
                </ul>
                   
                </li>
                <li className="dropdown"><Link to="#">Services</Link>
                    <ul>
                        <li><Link to="/business-process-and-technology-optimization">Business Process and Technology Optimizaiton</Link></li>
                        <li><Link to="/customization-enterprise-resource-plannig">Customization Enterprise Resource Planning Application (CEPRA) with ERPNEXT</Link></li>
                        <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                        <li><Link to="/web-design-development">Web Design Development</Link></li>
                        <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
                        <li><Link to="/physical-security-information-management">Physical Security Information Management</Link></li>
                        <li><Link to="/call-center-setup">Call Center Setup</Link></li>
                        <li><Link to="/accounting-finance-outsourcing">Accounting and Finance Outsourcing</Link></li>
                        <li><Link to="/agritech-solutions">Agritech Solutions</Link></li>
                        
                    </ul>
                </li>
                {/* <li className="dropdown"><Link to="#">Products</Link>
                    <ul>
                        <li><Link to="/ongea">Ongea </Link></li>
                        <li><Link to="/kiganjani">Kiganjani</Link></li>
                        <li><Link to="/Afroelegance">AfroElegance</Link></li>
                        <li><Link to="/angalia-duka">AngaliaDuka</Link></li>
                        <li><Link to="/tovuti">Tovuti </Link></li>
                        <li><Link to="/karakana">Karakana </Link></li>
                        <li><Link to="/cepra-product">CEPRA </Link></li>
                        <li><Link to="/akili-central">Akili Central </Link></li>
                        <li><Link to="/shuleni">Shuleni</Link></li>
                          </ul>
                </li> */}

                       
                        
                        
                        {/* <li className="dropdown"><Link to="#">Meet Our Team</Link>
                            <ul>
                                <li><Link to="/team-1">Team Style 01</Link></li>
                                <li><Link to="/team-2">Team Style 02</Link></li>
                                <li><Link to="/team-3">Team Style 03</Link></li>
                                <li><Link to="/team-4">Team Style 04</Link></li>
                                <li><Link to="/team-details">Team Details</Link></li>
                            </ul>
                        </li> */}
                  

                <li><Link to="/contactus-page">Contact Us</Link></li>
                
                {/* <li className="dropdown"><Link to="#">Pages</Link>
                    <ul>
                        <li><Link to="/career">Career</Link></li>
                        <li className="dropdown"><Link to="#">Contact</Link>
                            <ul>
                                <li><Link to="/contact-1">Contact Style 01</Link></li>
                                <li><Link to="/contact-2">Contact Style 02</Link></li>
                                <li><Link to="/contact-3">Contact Style 03</Link></li>
                                <li><Link to="/contact-4">Contact Style 04</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/faq">FAQ’s</Link></li>
                        <li className="dropdown"><Link to="#">Pricing &amp; Plans</Link>
                            <ul>
                                <li><Link to="/pricing-1">Pricing Style 01</Link></li>
                                <li><Link to="/pricing-2">Pricing Style 02</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="#">Testimonial</Link>
                            <ul>
                                <li><Link to="/testimonial-1">Testimonial Style 01</Link></li>
                                <li><Link to="/testimonial-2">Testimonial Style 02</Link></li>
                                <li><Link to="/testimonial-3">Testimonial Style 03</Link></li>
                                <li><Link to="/testimonial-4">Testimonial Style 04</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/404">404</Link></li>
                    </ul>
                </li> */}
                {/* <li className="dropdown"><Link to="#">Portfolio</Link>
                    <ul>
                        <li className="dropdown"><Link to="#">Portfolio Grid</Link>
                            <ul>
                                <li><Link to="/portfolio-1">Grid View 01</Link></li>
                                <li><Link to="/portfolio-2">Grid View 02</Link></li>
                                <li><Link to="/portfolio-3">Grid View 03</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/portfolio-4">Portfolio Masonry</Link></li>
                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                    </ul>
                </li> */}
                {/* <li className="dropdown"><Link to="#">Blog</Link>
                    <ul>
                        <li className="dropdown"><Link to="#">Blog Default</Link>
                            <ul>
                                <li><Link to="/blog-1">Full Width</Link></li>
                                <li><Link to="/blog-2">Left Sidebar</Link></li>
                                <li><Link to="/blog-3">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="#">Blog Grdi View</Link>
                            <ul>
                                <li><Link to="/blog-4">Left Sidebar</Link></li>
                                <li><Link to="/blog-5">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="#">Blog List View</Link>
                            <ul>
                                <li><Link to="/blog-6">Full Width</Link></li>
                                <li><Link to="/blog-7">Left Sidebar</Link></li>
                                <li><Link to="/blog-8">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="#">Single Post</Link>
                            <ul>
                                <li><Link to="/blog-details">With Sidebar</Link></li>
                                <li><Link to="/blog-details-2">Without Sidebar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="dropdown"><Link to="#">Shop</Link>
                    <ul>
                        <li><Link to="/shop">Products</Link></li>
                        <li><Link to="/product-details">Product Details</Link></li>
                        <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/account">My Account</Link></li>
                    </ul>
                </li> */}
            </ul>
        </>
    )
}
