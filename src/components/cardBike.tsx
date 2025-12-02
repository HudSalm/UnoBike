import bike from "../assets/bike.png";
import styles from "./cardBike.module.scss";
import { Reveal } from "./reveal";
import plus from "../assets/Plus.svg"
import x from "../assets/X.svg"
import type { Swiper as SwiperType } from 'swiper';


interface Props {
  swiperControl: SwiperType | null;
}

const CardBike = ( {swiperControl}: Props) => {

    const handletClick = (index:number) => {
    if (swiperControl) {
      swiperControl?.slideToLoop(index);
    }
  };

    return (
        <Reveal as="div" className={styles.card}>
            <img src={bike} alt="Bicicleta Unobike" />
            <div className={styles.icon1} onClick={() => handletClick(0)}>
                <img src={plus} alt="" className={styles.plus} />
                <img src={x} alt="" className={styles.x} />
            </div>
            <div className={styles.icon2} onClick={() => handletClick(1)}>
                <img src={plus} alt="" className={styles.plus} />
                <img src={x} alt="" className={styles.x} />
            </div>
            <div className={styles.icon3} onClick={() => handletClick(2)}>
                <img src={plus} alt="" className={styles.plus} />
                <img src={x} alt="" className={styles.x} />
            </div>
            <div className={styles.icon4} onClick={() => handletClick(3)}>
                <img src={plus} alt="" className={styles.plus} />
                <img src={x} alt="" className={styles.x} />
            </div>
        </Reveal>
    );
}

export default CardBike;