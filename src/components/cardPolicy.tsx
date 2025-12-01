import { useState } from "react"
import styles from "./cardPolicy.module.scss"


type props = {
    paragraph: string
    title: string
}

const CardPolicy = ( {paragraph, title}: props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const alternar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button onClick={alternar} className={styles.button}>
                    {isOpen ? 'Ocultar' : 'Expandir'}
                </button>
            </div>
            {isOpen && (
                <div className={styles.content}>
                    <p>
                        {paragraph}
                    </p>
                </div>
            )}
        </>
    )
}

export default CardPolicy;