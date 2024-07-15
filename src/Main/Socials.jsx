import styles from './Main.module.css'

function Socials() {
    return (
        <div className={styles.socials} id='socials'>
            <h1 id="-socials-">👋 Socials:</h1>
            <ul>
                <li>
                    <a href="https://github.com/EdwinRodger" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/vaidik-lotan-3b5139264/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@vaidiklotan" target="_blank" rel="noopener noreferrer">
                        Medium
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/23603815/vaidik" target="_blank" rel="noopener noreferrer">
                        StackOverflow
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials