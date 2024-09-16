import { Navbar, Footer } from "../components"

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <h1>About Me</h1>
                <hr />
                <div className="py-4" />
                <h2>Welcome</h2>
                <p>
                    I'm <i>Vaidik Lotan</i>, a tech enthusiast with a passion for coding, web development, machine learning, and game development (in my free time!).
                    <br /><br />
                    Currently, I'm pursuing a B.Tech + M.tech Integrated Dual Degree course in Artificial Intelligence and Data Science at the School of Data Science and Forecasting, DAVV, Indore.
                    <br /><br />
                    I was Android Lead for Google Developer Student Clubs Core Team of School of Data Science and Forecasting for session 2023-2024.
                    <br />
                    I am also Google Developer Groups on Campus School of Data Science and Forecasting Organizer for session 2024-2025.
                </p>
                <div className="py-4 border-top" />
                <h2>My Interests</h2>
                <p>
                    My main focus lies in web development and machine learning. With a strong foundation in
                    programming languages like Python and JavaScript, I've had the opportunity to work with popular frameworks such as
                    Flask and React. My favorite stack is MERN (MongoDB, Express.js, React, Node.js) - there's something about
                    building scalable web applications that gets me excited!
                    <br />
                    <br />
                    I've also entered in mobile app development using React Native with Expo, creating Android apps that are both
                    functional and visually appealing.
                    <br />
                    <br />
                    When I'm not studying or working on projects related to AI and data science, you can find me experimenting with
                    different game engines like Godot, Ren'py, RPG Maker, etc. Game development is a fun hobby for me, where I get to express
                    my creativity and imagination through code.
                </p>
                <div className="py-4 border-top" />
                <h2>What drives me</h2>
                <p>
                    My passion lies at the intersection of web development and machine learning. I find it fascinating to see how
                    these technologies can be combined to build intelligent systems that can solve real-world problems. My friends
                    would describe me as someone who gives their 100% to whatever task they take on - no matter how tough it gets!
                    <br /><br />
                    If you're interested in coding, AI, data science, web development, or game development, we should totally connect!
                </p>
            </div>
            <Footer />
        </div >
    )
}

export default AboutPage