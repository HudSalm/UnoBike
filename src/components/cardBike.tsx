import bike from "../assets/bike.png";
import styles from "./cardBike.module.scss";

const CardBike = () => {
    return (
        <div className={styles.card}>
            <img src={bike} alt="Bicicleta Unobike" />
        </div>
    );
}

export default CardBike;