import { Link } from "react-router-dom"
import logoimg from "../assets/images/LOGO.png"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>
            <section className={`hidden-sidebar ${isSidebar ? "" : "close-sidebar"}`} style={{ right: `${isSidebar ? "0" : "-480px"}`, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                <div className="wrapper-box">
                    <div className="hidden-sidebar-close" onClick={handleSidebar}><span className="flaticon-remove" /></div>
                    <div className="logo"><Link href="#"><img src={logoimg} alt="" style={{ height: '175px', width: '175px'}} /></Link></div>
                    <div className="content">
                        {/* <div className="about-widget-two sidebar-widget">
                            <h3>Smart Business Consultancy <br />in New Milton</h3>
                            <div className="text">We denounce with righteous indignation and dislike men who we are to beguiled demoralized by the charms of pleasures that moment, so we blinded desires, that they indignations.</div>
                        </div> */}
                        {/* News Widget */}
                        {/* <div className="news-widget sidebar-widget">
                            <div className="widget-title">News &amp; Updates</div>
                            <div className="post-wrapper">
                                <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-1.jpg" alt="" /></Link></div>
                                <div className="category">Business Plans</div>
                                <h4><Link href="/blog-details">How to Manage Business’s <br />Online Reputation</Link></h4>
                            </div>
                            <div className="post-wrapper">
                                <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-2.jpg" alt="" /></Link></div>
                                <div className="category">Marketing Stratergy</div>
                                <h4><Link href="/blog-details">Inside our Daily Routines as a <br />Good Consultant</Link></h4>
                            </div>
                        </div> */}
                        {/* Newsletter Widget */}
                        <div className="newsletter-widget">
                            {/* <div className="widget-title">Desk Office</div> */}
                            
                                {/* <input type="email" placeholder="Enter Email Address" /> */}
                                <Link to="https://aicl.co.tz/login?redirect-to=%2Fapp%2Fwebsite-settings%2FWebsite%2520Settings#login" ><button className="theme-btn btn-style-one"><span className="btn-title">Desk Login</span></button></Link>
                            
                        </div>
                    </div>
                </div>
            </section >






        </>
    )
}
