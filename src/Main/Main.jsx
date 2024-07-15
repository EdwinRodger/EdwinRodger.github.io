import styles from './Main.module.css'
import AboutMe from './AboutMe'
import Projects from './Projects'
import TechStack from './Techstack'
import Socials from './Socials'


function Main() {
    return (
        <div className={styles.main}>
            <AboutMe />
            <Projects />
            <TechStack />
            <Socials />
        </div>
    )
}

export default Main