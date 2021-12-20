import React, {useState} from "react";

function Contact() {

    document.body.style.backgroundColor = "#e7e6e1";
  
    let loginLink = "";
    const token = localStorage.getItem("token");

    if(token ? loginLink = "/profile" : loginLink = "/auth");

    return (
        <section>
            <div className="row Navbar">
                <ul>
                    <li className="navbar">
                        <a className="navbarA exp" href="/">Explora</a>
                    </li>
                    <li className="navbar dropdown">
                        <p className="navbarA">Trip</p>
                        <div className="dropdown-content">
                            <a className="navbarA" href="/newTrip">New Trip</a>
                        </div>
                    </li>
                    <li className="navbar">
                        <a className="navbarA" href="/contact">Contact</a>
                    </li>
                    <li className="navbar">
                        <a className="navbarA" href="/about">About</a>
                    </li>
                    <li className="navbarlogo">
                        <a href= {loginLink} ><img className="profileLogo" alt="logo" src="./logo.png"/></a>
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
                <div className="column"></div>
                <div className="columnQuestions">
                    <br></br>
                    <br></br>
                    <br></br>
                    <ul>
                        <li className="parametersC">
                            <p>Your Name:
                            </p>
                        </li>
                        <li className="parametersC">
                            <p>Your Surname:
                            </p>
                        </li>
                        <li className="parametersC">
                            <p>Your Email:</p>
                        </li>
                        <li className="parametersC">
                            <p>Your Message To Us:</p>
                        </li>
                    </ul>
                </div>
                <div className="columnInputs">
                    <br></br>
                    <br></br>
                    <div className="textArea">
                        <input className="textAreap" type="text"></input>
                    </div>
                    <div className="textArea">
                        <input className="textAreap" type="text"></input>
                    </div>
                    <div className="textArea">
                        <input className="textAreap" type="email"></input>
                    </div>
                    <div className="textArea">
                        <input className="textAreap texta" type="text"></input>
                    </div>
                    <br></br>
                    <div className="inputAreas">
                        <button className="formssubmit" method="POST">Submit</button>
                    </div>

                </div>
                <div className="column"></div>
            </section>
        </section>
    );
}

export default Contact;
