import React from 'react'

const Footer = (props) => {
    return (
        <div className={`bg-black ${props.styles}`}>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-white">© 2021-2024 Vaidik Lotan</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a href="https://www.instagram.com/vaidik_ftw/" target="_blank"><i className="bi bi-instagram"></i></a></li>
                        <li className="ms-3"><a href="https://x.com/Vaidik_Lotan" target="_blank"><i className="bi bi-twitter-x"></i></a></li>
                        <li className="ms-3"><a href="https://github.com/EdwinRodger" target="_blank"><i className="bi bi-github"></i></a></li>
                    </ul>
                </footer>
            </div>
        </div >
    )
}

export default Footer