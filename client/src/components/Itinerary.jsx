import React, { useState } from "react";

function Itinerary() {

    document.body.style.backgroundColor = "#e7e6e1";
    
    return(
        <section>
            <div className="row Navbar">
                <ul>
                    <li className="navbar">
                        <a className="navbarA exp" href="#Forms">Explora</a>
                    </li>
                    <li className="navbar dropdown">
                        <p className="navbarA">News</p>
                        <div className="dropdown-content">
                            <a className="navbarA" href="#news">Hi</a>
                        </div>
                    </li>
                    <li className="navbar">
                        <a className="navbarA" href="#contact">Contact</a>
                    </li>
                    <li className="navbar">
                        <a className="navbarA" href="#about">About</a>
                    </li>
                    <li className="navbarlogo">
                        <a href="#profile"><img className="profileLogo" alt="logo" src="./logo.png"/></a>
                    </li>
                </ul>
            </div>
            <div className = "body itinerary-body">
                <h1> Here is your Istanbul trip planned by Explora! </h1>
                <br></br>
                <h1>-----------------------------------------------</h1>
                <br></br>


            </div>
        </section>
        
    )

}

export default Itinerary;