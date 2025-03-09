import React from 'react'
import { useEffect, useState } from "react"
import BackToTop from './elements/BackToTop'
import DataBg from "./elements/DataBg"
import Header5 from "./Header/index"
import WOW from "wow.js"
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import Footer5 from './Footer/Footer5'
import SearchPopup from './SearchPopup'

const Layout = ({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) => {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        const wow = new WOW({ live: false }) // disables sync requirement
        wow.init()
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
  return (
    <>
     <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                
                {footerStyle == 5 ? < Footer5 /> : null}
            </div>
            <BackToTop scroll={scroll} />
    </>

  )
}

export default Layout