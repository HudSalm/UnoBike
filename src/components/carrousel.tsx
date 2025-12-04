import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "./carrousel.module.scss";
import 'swiper/swiper.css'

interface Props {
  setSwiperRef: React.Dispatch<React.SetStateAction<SwiperType | null>>;
}


const Carrousel = ( {setSwiperRef}:Props ) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.5}
            loop={true}
            onSwiper={(swiper) => setSwiperRef(swiper)}
            watchSlidesProgress={true}
            className={styles.swiper}
            >
                <SwiperSlide>
                    <div className={styles.swiperslide}>
                        <h4>Segurança1</h4>
                        <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperslide}>
                        <h4>Segurança2</h4>
                        <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperslide}>
                        <h4>Segurança3</h4>
                        <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperslide}>
                        <h4>Segurança4</h4>
                        <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                    </div>
                </SwiperSlide>

        </Swiper>
        
    )
}
export default Carrousel;