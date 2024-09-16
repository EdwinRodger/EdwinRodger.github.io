import { Navbar, Footer } from "../components"


const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <h1>Contact</h1>
                <hr />
                <h3 className="py-3">LinkedIn - <a href="https://www.linkedin.com/in/vaidik-lotan/" target="_blank">@vaidik-lotan</a></h3>
                <h3 className="py-3">Github - <a href="https://github.com/EdwinRodger" target="_blank">@EdwinRodger</a></h3>
                <h3 className="py-3">Instagram - <a href="https://www.instagram.com/vaidik_ftw/" target="_blank">@vaidik_ftw</a></h3>
                <h3 className="py-3">Twitter - <a href="https://twitter.com/Vaidik_Lotan" target="_blank">@Vaidik_Lotan</a></h3>
            </div>
            <Footer styles="position-fixed bottom-0 vw-100" />
        </div >
    )
}

export default ContactPage