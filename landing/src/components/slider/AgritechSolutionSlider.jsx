import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import imgservice5 from "../../assets/images/resource/smartirrigationpicture.jpg"
import imgservice1 from "../../assets/images/resource/drone.jpg"
import imgservice3 from "../../assets/images/resource/single-service-3.jpg"
import imgservice4 from "../../assets/images/resource/skills.png"
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
export default function AgritechSolutionSlider() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice5} alt="" />
                        <div className="content">
        <h4>Irrigation solutions utilize sensors and data analytics to optimize water usage, <br/>ensuring crops receive the right amount of water at the right time.</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice1} alt="" />
                        <div className="content">
                            <h4>We employ drones and satellite technology </h4>
                        </div>
                    </div>
               </SwiperSlide>
                 {/* <SwiperSlide className="slide">
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
