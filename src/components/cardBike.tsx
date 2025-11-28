import bike from "../assets/bike.png";
import styles from "./cardBike.module.scss";
import { Reveal } from "./reveal";

const CardBike = () => {
    return (
        <Reveal as="div" className={styles.card}>
            <img src={bike} alt="Bicicleta Unobike" />
        </Reveal>
    );
}

export default CardBike;