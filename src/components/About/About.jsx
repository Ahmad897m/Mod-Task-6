import React from "react";
import leftImg from '../../assest/0_UnaZKWRx_J94eTVw 1.jpg'
import './about.css'

const About = () => {
    return (
        <>
           <section className="about">
            <div className="container">
                <div className="content">
                    <div className="image">
                        <img src={leftImg} alt="" />
                    </div>
                    <div className="text">
                        <h2>About me </h2>
                        <p>Hello, I'm Ahmad, a Frontend Developer who is dedicated to crafting sleek UI/UX experiences for users. Currently, I primarily work with React/Next.js, Tailwind CSS, and TypeScript in my projects.
                        </p>
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}


export default About;