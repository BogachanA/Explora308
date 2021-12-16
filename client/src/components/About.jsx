import React, {useState} from "react";

function About() {

    document.body.style.backgroundColor = "#e7e6e1";

    return (
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
            <section className="row">
                <div className="leftCol column">
                    <ul>
                        <br></br>
                        <li className="leftColText">
                            <a href="#Forms"></a>
                        </li>
                    </ul>
                </div>
                <div className="aboutDiv">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className="aboutH1">About Us</h1>
                    <br></br>
                    <p className="aboutP">Explora is based on a travel guide for tourists in Istanbul. The website aims to provide a daily itinerary according to the wishes of the customers while they try to plan their visit.</p>
                    <br></br>
                    <p className="aboutP">The motivation and the goal of Explora is to make the planning process easier for tourists with customized recommendations. We believe that Explora will solve the problem of the difficulty of scheduling a tour and the absence of a local perspective of competitors in the market.</p>
                    <br></br>
                    <p className="aboutP">We plan to give you some choices for specification of your trip by asking questions like how many days your trip will last, what kind of activities you would like to do, etc. At the end, according to your choices, Explora will provide a daily trip.</p>
                    <br></br>
                    <p className="aboutP">Explora removes the redundant work of searching for different websites on the internet for different kinds of activities, Explora will produce a planned trip for you on its own.</p>
                </div>
            </section>
        </section>
    );
}

export default About;
