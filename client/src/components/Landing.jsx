import React, {useState} from "react";
import locations from "./classes/locations";
import preferences from "./classes/preferences";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const animatedComponents = makeAnimated();

function Landing() {

    document.body.style.backgroundColor = "#e7e6e1";
    const [startDate,
        setStartDate] = useState(new Date());
    const [endDate,
        setEndDate] = useState(new Date());

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
                <div className="column"></div>
                <div className="column"></div>
                <div className="columnlanding">
                    <br></br>
                    <br></br>
                    <br></br>
                    <ul>
                        <li className="row">
                            <div>
                                <p className="landingp">Explore Istanbul with Explora!</p>
                            </div>
                            <div>
                                <img className="landingimg" alt="img1" src="./5.jpg"/>
                            </div>
                        </li>
                        <li className="row">
                            <div>
                                <br></br>
                                <img className="landingimg" alt="img1" src="./2.jpg"/>
                            </div>
                            <div>
                                <p className="landingp">No need to bother planning!</p>
                            </div>
                        </li>
                        <li className="row">
                            <div>
                                <p className="landingp">You just need to tell us you preferences</p>
                            </div>
                            <div>
                                <img className="landingimg" alt="img1" src="./ayasofya.jpg"/>
                            </div>
                        </li>
                        <li className="row">
                            <div>
                                <img className="landingimg" alt="img1" src="./4.jpg"/>
                            </div>
                            <div>
                                <p className="landingp">Explora will plan your visits for you!</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="column"></div>
            </section>
        </section>
    );
}

export default Landing;