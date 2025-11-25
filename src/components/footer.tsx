import Logo from "../assets/Logo.svg"
import styles from "./footer.module.scss"

const Footer = () => { 
    return (
        <footer className={styles.footer}>
            <a href="#sobre"><img src={Logo} alt="logo do site" /></a>
            <p>Copyright 2020 © Zero9. Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer;