import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer d-flex justify-between">
            <div>
                &copy; 2023 BowWorld | All rights reserved
            </div>
            <section className="d-flex justify-around w-p-25">
                <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" title="Instagram"><i className="fa fa-instagram"></i></a>
                <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" title="youtube"><i className="fa fa-youtube"></i></a>
            </section>
        </footer>
    )
}

export default Footer