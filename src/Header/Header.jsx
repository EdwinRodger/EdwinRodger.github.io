import styles from './Header.module.css'
import logo from '../assets/favicon_io/android-chrome-192x192.png'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.profile}>
                <img src={logo} alt="profile picture" />
                <h1>Vaidik Lotan</h1>
            </div>
            <ul className={styles.list}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#tech-stack">Tech Stack</a></li>
                <li><a href="#socials">Socials</a></li>
            </ul>
        </div>
    )
}

export default Header