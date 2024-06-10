import React from "react";
import GitImg from '../../assest/git.png'
import project1 from '../../assest/Frame 1 1.jpg'
import project2 from '../../assest/web design- creativezaiid 1.jpg'
import project3 from '../../assest/web design- creativezaiid 2.jpg'
import ShareImg from '../../assest/share.png'
import './portfolio.css'

const  Portfolio = () => {
    return (
        <>
            <section className="portfolio">
                <div className="container">
                    <div className="content">
                        <div className="heading">
                            <h2>Portfolio </h2>
                            <p>I would like to present my portfolio for your consideration.</p>
                        </div>
                        <div className="projects">
                            <div className="project">
                            <div className="image">
                                <img src={project1} alt="" />
                            </div>
                            <div className="info">
                                <h3>Erick Coffee </h3>
                                <p>The website features a modern and sleek design, showcasing Erick Coffee's products and brand story. </p>
                                <div className="framwork">
                                    <ul>
                                        <li>React</li>
                                        <li>SCSS</li>
                                    </ul>
                                </div>
                                <div className="icons">
                                    <ul>
                                        <li><a href="#">code  <img src={GitImg} alt="" /></a></li>
                                        <li><a href="#">Live Demo  <img src={ShareImg} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <div className="project flex-row-reverse">
                            <div className="image">
                                <img src={project2} alt="" />
                            </div>
                            <div className="info">
                                <h3>Erick Coffee </h3>
                                <p>I designed a website for the restaurant Chicken, featuring an elegant and user-friendly interface to showcase their menu offerings and services. </p>
                                <div className="framwork">
                                    <ul>
                                        <li>React</li>
                                        <li>SCSS</li>
                                    </ul>
                                </div>
                                <div className="icons">
                                    <ul>
                                        <li><a href="#">code  <img src={GitImg} alt="" /></a></li>
                                        <li><a href="#">Live Demo  <img src={ShareImg} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <div className="project">
                            <div className="image">
                                <img src={project3} alt="" />
                            </div>
                            <div className="info">
                                <h3>Erick Coffee </h3>
                                <p>I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use. This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options. </p>
                                <div className="framwork">
                                    <ul>
                                        <li>React</li>
                                        <li>SCSS</li>
                                    </ul>
                                </div>
                                <div className="icons">
                                    <ul>
                                        <li><a href="#">code  <img src={GitImg} alt="" /></a></li>
                                        <li><a href="#">Live Demo  <img src={ShareImg} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                        <button className="button"> See More </button>
                    </div>
                </div>
            </section>
        </>
    )

}


export default Portfolio;