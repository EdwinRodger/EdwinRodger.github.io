import styles from './Main.module.css'

function Projects() {
    return (
        <div className={styles.projects} id='projects'>
            <h1>👨‍💻 Projects</h1>
            <ul className={styles.list}>
                <li><a href="https://github.com/EdwinRodger/MyMangaDataBase" target="_blank" rel="noopener noreferrer">MyMangaDataBase</a> - Self Hosted Anime and Manga Tracker</li>
                <li><a href="https://github.com/EdwinRodger/MyArchives" target="_blank" rel="noopener noreferrer">MyArchives</a> - MyArchives is a software to write your diary in a minimalistic and easy way</li>
                <li><a href="https://github.com/EdwinRodger/Human-Health-Calculator" target="_blank" rel="noopener noreferrer">Human-Health-Calculator</a> - Simple Calculator to check human health.</li>
                <li><a href="https://github.com/EdwinRodger?tab=repositories" target="_blank" rel="noopener noreferrer">And many more...</a></li>
            </ul>
        </div>
    )
}

export default Projects