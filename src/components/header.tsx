import { useState } from 'react'
import Logo from '../assets/Logo.svg'
import styles from './header.module.scss'
import { Sling } from 'hamburger-react'



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="" />
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
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">BICICLETAS</a></li>
                    <li><a href="#">ESTAÇÕES</a></li>
                    <li><a href="#">APP</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;