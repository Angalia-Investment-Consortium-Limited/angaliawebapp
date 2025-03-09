import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import imgservice from "../../assets/images/resource/single-service-5.jpg"
import imgservice1 from "../../assets/images/resource/single-service-2.jpg"
import imgservice3 from "../../assets/images/resource/single-service-3.jpg"
import imgservice4 from "../../assets/images/resource/skills-mobile.jpeg"
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
}
export default function MobileSlider() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice4} alt="" />
                        {/* <div className="content">
                            <h4>We assess your current tools, methods, and outputs,<br/>then build a plan and work side by side with you to execute it.</h4>
                        </div> */}
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice1} alt="" />
                        <div className="content">
                            <h4>We approach your audit with a deep understanding <br /> of your business.</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice3} alt="" />
                        <div className="content">
                            <h4>We approach your audit with a deep understanding <br /> of your business.</h4>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}
