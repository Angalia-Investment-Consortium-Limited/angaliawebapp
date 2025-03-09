import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import imgservice from "../../assets/images/resource/accounting.png"
import imgservice1 from "../../assets/images/resource/Helpdesk.png"
import imgservice3 from "../../assets/images/resource/erpnext.png"
import imgservice4 from "../../assets/images/resource/erpnexts.png"
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
export default function CepraSlider() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice4} alt="" />
                        <div className="content">
                            <h4>CEPRA, Almost <br /> Everything you need </h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice1} alt="" />
                        <div className="content">
                        <h4>CEPRA, Almost <br /> Everything you need </h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice3} alt="" />
                        <div className="content">
                        <h4>CEPRA, Almost <br /> Everything you need </h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src={imgservice} alt="" />
                        <div className="content">
                        <h4>CEPRA, Almost <br /> Everything you need </h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
