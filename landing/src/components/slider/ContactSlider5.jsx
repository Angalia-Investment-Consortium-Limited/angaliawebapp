
import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import logo5 from "../../assets/images/LOGO.png"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     767: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // }
}

export default function ContactSlider5() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="contact-info">
                        <div className="logo"><img src={logo5} alt="" /></div> 
                        <h4>HEAD OFFICES</h4>
                        <ul>
                            <li>Soko la Madini Dar</li>
                            <li>Samora Avenue, NHC Building </li>
                            <li>6TH Floor</li>
                            <li>Dar es Salaam, TANZANIA </li>
                            <li>APPOINTMENT ONLY</li>
                            <li>+255 696 240 077</li>
                            <li>business@aicl.co.tz</li>
                        </ul>
                        <Link to="#" className="read-more-link">Make an appointment<i className="fa fa-caret-right" /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="contact-info">
                        <div className="logo"><img src={logo5} alt="" /></div>
                        <h4>COMMERCIAL OFFICES</h4>
                        <ul>
                            <li>Plot No 1249 / 11 Bibi Titi Mohammed Road</li>
                            <li>Mon - Friday 09.00 to 06.00 Saturday:Closed</li>
                            <li>+255 696 240 077</li>
                            <li>business@aicl.co.tz</li>
                        </ul>
                        <Link href="#" className="read-more-link">Get Direction <i className="fa fa-caret-right" /></Link>
                    </div>
                </SwiperSlide> 


                <div className="owl-nav">
                    <button type="button" className="owl-prev h1p">
                        <span>‹</span>
                    </button>
                    <button type="button" className="owl-next h1n">
                        <span>›</span>
                    </button>
                </div>
            </Swiper>
        </>
    )
}
