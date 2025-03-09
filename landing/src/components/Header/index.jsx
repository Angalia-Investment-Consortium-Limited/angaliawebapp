import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import iconbar from "../../assets/images/icons/icon-bar-2.png"
import iconbarone from "../../assets/images/icons/icon-bar.png"
import logoimage from "../../assets/images/LOGO.png"
export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-five"> */}
            <header className={`main-header header-style-five ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top style-five">
                    <div className="auto-container">
                        <div className="inner">
                            <div className="top-left">
                                {/* <div className="language">
                                    <span className="flaticon-global" />
                                     <form action="#" className="language-switcher">
                                        <select className="custom-select">
                                            <option value={1}>English</option>
                                            <option value={1}>French</option>
                                            <option value={1}>Spanish</option>
                                            <option value={1}>Bengli</option>
                                        </select>
                                    </form> 
                                </div> */}
                                <ul className="social-links clearfix">
                                    <li><a href="https://www.facebook.com/angaliatz"><span className="fab fa-facebook-f" /></a></li>
                                    <li><a href="https://www.instagram.com/angaliainvestmentconsortium/"><span className="fab fa-instagram" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/angalia-investment-consortium-limited/"><span className="fab fa-linkedin" /></a></li>
                                    
                                </ul>
                            </div>
                            <div className="top-right">
                                <ul className="contact-info">
                                    <li><a href="tel:+18005554400"><i className="flaticon-phone" />+255 768 017 100 </a></li>
                                    <li><a href="tel:+18005554400"><i className="flaticon-mail-1" />info@aicl.co.tz</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper style-five">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Sidemenu Navigation Toggler*/}
                            <div className="sidemenu-nav-toggler" onClick={handleSidebar}><img src={iconbar} alt="" /></div>
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo">
                                    <a href="/"><img src={logoimage} alt="AICL" style={{ height: '160px', width: '160px'}}/>
                                    </a>
                                    </div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src={iconbarone} alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                <div className="navbar-right-info">
                                    {/* <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button> */}
                                    {/* <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div> */}
                                    {/* <div className="link-btn"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Book a Demo</span></a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    {/* Header Upper */}
                    <div className="header-upper style-five">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Sidemenu Navigation Toggler*/}
                                <div className="sidemenu-nav-toggler" onClick={handleSidebar}><img src={iconbar} alt="" /></div>
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="/"><img src={logoimage} alt="" style={{ height: '160px', width: '160px'}} /></a></div> 
                                </div>
                                {/*Nav Box*/}
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src={iconbarone} alt="" /></div>
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <Menu />
                                    </nav>
                                    {/* Main Menu End*/}
                                    <div className="navbar-right-info">
                                        {/* <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button> */}
                                        {/* <div className="shopping-cart"><i className="flaticon-shopping-cart" /><span className="count">2</span></div> */}
                                        {/* <div className="link-btn"><a href="#" className="theme-btn btn-style-one"><span className="btn-title">Book a Demo</span></a></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
