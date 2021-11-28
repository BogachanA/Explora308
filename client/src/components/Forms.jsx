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
                        <li className="parameters">
                            <p>Begin Date:
                            </p>
                        </li>
                        <li className="parameters">
                            <p>End Date:
                            </p>
                        </li>
                        <li className="parameters">
                            <p>Where Do You Want To Go?</p>
                        </li>
                        <li className="parameters">
                            <p>What Do You Want To Do?</p>
                        </li>
                    </ul>
                </div>
                <div className="columnInputs">
                    <br></br>
                    <br></br>
                    <DatePicker
                        className="inputAreas"
                        dateFormat='dd-MM-yyyy'
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => setStartDate(date)}/>

                    <DatePicker
                        className="inputAreas"
                        dateFormat='dd-MM-yyyy'
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => setEndDate(date)}/>

                    <div className="inputAreas1 inputAreas">
                        <Select
                            className="choice"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={[locations[0]]}
                            isMulti
                            options={locations}/>
                    </div>
                    <div className="inputAreas">
                        <Select
                            className="choice"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={[preferences[0]]}
                            isMulti
                            options={preferences}/>
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