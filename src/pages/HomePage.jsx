import { Navbar, Footer, HomePageContent } from "../components"
import '../pages/HomePage.css'

const HomePage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <HomePageContent />
            <Footer />
        </div>
    )
};

export default HomePage