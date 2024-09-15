import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className='bg-black'>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4 text-white">Vaidik Lotan</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/" className="nav-link text-white"><u>Home</u></Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link text-white"><u>About</u></Link></li>
                        <li className="nav-item"><Link to="/portfolio" className="nav-link text-white"><u>Portfolio</u></Link></li>
                        <li className="nav-item"><Link to="/blog" className="nav-link text-white"><u>Blogs</u></Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link text-white"><u>Contact</u></Link></li>
                    </ul>
                </header>
            </div>
        </nav>
    )
}

export default Header