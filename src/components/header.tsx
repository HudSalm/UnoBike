import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import styles from './header.module.scss'
import { Sling } from 'hamburger-react'



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className={styles.header}>
            <a href=""><img className={styles.logo} src={Logo} alt=" logo do site" /></a>
            <nav className={styles.nav}>
               <div className={styles.hamburguerIcon}>
                    <Sling 
                        toggled={isOpen}      
                        toggle={setIsOpen}    
                        size={28}            
                        color="#333"           
                        duration={0.3}        
                    />
                </div>
               
                <ul className={`${styles.navMenu} ${isOpen ? styles.open : ''}`} aria-expanded={isOpen}>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/Contact'>CONTATO</Link></li>
                    <li><Link to='/PrivacyPolicy'>POLÍTICA DE PRIVACIDADE</Link></li>
                    <li><a className={styles.app} href="https://play.google.com/store/apps/details?id=com.unobike.bikedagenteguapi">APP</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;