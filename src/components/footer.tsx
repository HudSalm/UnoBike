import Logo from "../assets/Logo.svg"
import styles from "./footer.module.scss"

const Footer = () => { 
    return (
        <footer className={styles.footer}>
            <a href="#"><img className={styles.logo} src={Logo} alt="logo do site" /></a>
            <p>Copyright 2025 © UnoBike. Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer;