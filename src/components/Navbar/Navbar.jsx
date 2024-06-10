import React from "react";
import './navbar.css'

const Navbar = () => {
    return( 
            <>
                <header className="navBar">
                            <div className="logo"><h2>Ahmad.dev</h2></div>
                            <div className="navList">
                                <ul className="navItems">
                                    <il className="navItem">
                                        <a href="#" className="navLink">Home</a>
                                    </il>
                                    <il className="navItem">
                                        <a href="#" className="navLink">About</a>
                                    </il>
                                    <il className="navItem">
                                        <a href="#" className="navLink">Projects</a>
                                    </il>
                                    <il className="navItem">
                                        <a href="#" className="navLink">Contact</a>
                                    </il>
                                </ul>
                            </div>
                    </header>

            </>
    )
}

export default Navbar;