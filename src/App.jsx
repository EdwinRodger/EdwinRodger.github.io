// import routing
import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, BlogsPage, PortfolioPage } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/blog" element={<BlogsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default App
