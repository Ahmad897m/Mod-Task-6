import React from "react";
import GitImg from '../../assest/white2.png'
import LinkedImg from '../../assest/white.png'
import './footer.css'

const Footer = () => {
    return (

        <>
                <section className="footer">
                    <footer>
                        <div className="container">
                            <div className="content">
                                <p>Copyright   2024.All rights are reserved.</p>
                                <ul className="icons">
                                    <li><a href=""><img src={GitImg} alt="" /></a></li>
                                    <li><a href=""><img src={LinkedImg} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </section>
        </>
    )
}

export default Footer;