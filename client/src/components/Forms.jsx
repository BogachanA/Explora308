import React, {useState} from "react";
import locations from "./classes/locations";
import preferences from "./classes/preferences";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const animatedComponents = makeAnimated();

function printData(){
    console.log("Data here");
}

function Forms() {

    document.body.style.backgroundColor = "#e7e6e1";
    const [startDate,
        setStartDate] = useState(new Date());
    const [endDate,
        setEndDate] = useState(new Date());

    const [placeVal, setPlaceVal] = useState([]);
    const [activityVal, setActivityVal] = useState([]);

    const handlePlaceChange = (e) => {
        setPlaceVal(Array.isArray(e) ? e.map(x => x.value) : []);
        console.log("changed val of place");
        setItForm({
            start: startDate,
            end: endDate,
            place: placeVal,
            activity: activityVal
        });
    }

    const handleActivityChange = (e) => {
        setActivityVal(Array.isArray(e) ? e.map(x => x.value) : []);
        console.log("changed val of activity", activityVal);
        setItForm({
            start: startDate,
            end: endDate,
            place: placeVal,
            activity: activityVal
        });
    }

    const [itForm, setItForm] = useState({
        start: startDate,
        end: endDate,
        place: placeVal,
        activity: activityVal
    });

    function handleFormChange(event) {
        const { name, value } = event.target;

        setItForm((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setItForm({
            start: startDate,
            end: endDate,
            place: placeVal,
            activity: activityVal
        });
        console.log(itForm);

        var formData = new FormData();
        formData.append("start",itForm.start);
        formData.append("end",itForm.end);
        formData.append("activity",itForm.activity);
        formData.append("place",itForm.place);

        await axios({method: "post",
            url: "http://localhost:5000/create/newTrip",
            data: itForm,
            headers: { "Content-Type": "application/json" }
        }).then(r => {
            console.log("success:");
            window.location.href = "http://localhost:3000/itinerary/"+String(r.data);
        }).catch(err => {
            console.log(err);
        }); //TODO
        //console.log(res);
    }



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
                        <a href="/Profile"><img className="profileLogo" alt="logo" src="./logo.png"/></a>
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
                <form onSubmit={handleFormSubmit}>
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
                            id={"placeChoice"}
                            className="choice"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={[]}
                            onChange={handlePlaceChange}
                            isMulti
                            options={locations}/>
                    </div>
                    <div className="inputAreas">
                        <Select
                            id={"activityChoice"}
                            className="choice"
                            closeMenuOnSelect={false}
                            onChange={handleActivityChange}
                            components={animatedComponents}
                            defaultValue={[]}
                            isMulti
                            options={preferences}/>
                    </div>
                    <br></br>
                    <div className="inputAreas">
                        <button className="formssubmit" type="submit">Submit</button>
                    </div>

                </div>
                </form>
                <div className="column"></div>
            </section>
        </section>
    );
}

export default Forms;