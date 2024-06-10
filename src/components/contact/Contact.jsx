import React from "react";
import PhoneImg from '../../assest/phone.png'
import EmailImg from '../../assest/mail.png'

import './contact.css'

const Contact = () => {
    return(
        <>
            <section className="contact">
                <div className="container">
                    <div className="content">
                        <div className="heading">
                            <h2>Contact</h2>
                            <p>Don’t hesitate to call me  </p>
                        </div>
                        <div className="info">
                            <div className="contactItem">
                                <div className="image">
                                <img src={PhoneImg} alt="" />
                                </div>
                                <div className="des">
                                    <p>Phone Number <span>+963 938 538 446</span></p>
                                    
                                </div>
                            </div>

                            <div className="contactItem">
                                <div className="image">
                                <img src={EmailImg} alt="" />
                                </div>
                                <div className="des">
                                    <p>Email</p>
                                    <span>hanihadid.22@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;