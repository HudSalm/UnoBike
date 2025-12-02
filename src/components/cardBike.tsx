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
            <div className={styles.containerInfo} onClick={() => handletClick(0)}>
                <span className={styles.icon1}>
                    <img src={plus} alt="" className={styles.plus} />
                    <img src={x} alt="" className={styles.x} />
                </span>
                <div className={styles.bikeInfo1}>
                    <h4>Segurança1</h4>
                    <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                </div>
            </div>
            <div className={styles.containerInfo} onClick={() => handletClick(1)}>
                <span className={styles.icon2}>
                    <img src={plus} alt="" className={styles.plus} />
                    <img src={x} alt="" className={styles.x} />
                </span>
                <div className={styles.bikeInfo2}>
                    <h4>Segurança2</h4>
                    <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                </div>
            </div>
            <div className={styles.containerInfo} onClick={() => handletClick(2)}>
                <span className={styles.icon3}>
                    <img src={plus} alt="" className={styles.plus} />
                    <img src={x} alt="" className={styles.x} />
                </span>
                <div className={styles.bikeInfo3}>
                    <h4>Segurança3</h4>
                    <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                </div>
            </div>
            <div className={styles.containerInfo}>
                <span className={styles.icon4} onClick={() => handletClick(3)}>
                    <img src={plus} alt="" className={styles.plus} />
                    <img src={x} alt="" className={styles.x} />
                </span>
                <div className={styles.bikeInfo4}>
                    <h4>Segurança4</h4>
                    <p>Veja e seja visto com as laternas de LED que acendem conforme você pedala.</p>
                </div>
            </div>
        </Reveal>
    );
}

export default CardBike;