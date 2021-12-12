import React, {useState} from "react";
import locations from "./classes/locations";
import preferences from "./classes/preferences";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const animatedComponents = makeAnimated();

function Forms() {

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

export default Forms;