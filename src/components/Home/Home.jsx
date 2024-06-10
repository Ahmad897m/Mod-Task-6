import React from "react";
import Photo from '../../assest/photo_2023-05-10_10-46-40.jpg'
import GitImg from '../../assest/git.png'
import LinkedImg from '../../assest/linkedin.png'
import HTMLImg from '../../assest/vscode-icons_file-type-html.png'
import CSSImg from '../../assest/css.png'
import TwnImg from '../../assest/Group 3.png'
import JSImg from '../../assest/js.png'
import ReactImg from '../../assest/react.png'
import SASSImg from '../../assest/sass.png'

import './home.css'
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <>
        <Navbar />
            <div className="home">
                    <div className="images">
                    <img src={HTMLImg} alt="" className="html"/>
                    <img src={CSSImg} alt="" className="css" />
                    <img src={TwnImg} alt="" className="Twn" />
                    <img src={JSImg} alt="" className="js" />
                    <img src={ReactImg} alt="" className="react" />
                    <img src={SASSImg} alt=""  className="sass" />
                    </div>
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <h2>Front-End React Developer</h2>
                            <div className="image">
                            <img src={Photo} alt="" />
                        </div>
                </div>
                            <p className="about">Hi, I am Ahmad Mustafa, a passionate Front-End Developer from syria</p>
                            <ul className="icons">
                                <li>
                                    <a href="#" className="icon"> <img src={GitImg} alt="" /></a>
                                </li>
                                <li>
                                    <a href="#" className="icon"> <img src={LinkedImg} alt="" /></a>
                                </li>
                            </ul>
                            <p className="p-line">Tech stack</p>
                        </div>
                    </div>
            </div>
        </>
    )   
}

export default Home;