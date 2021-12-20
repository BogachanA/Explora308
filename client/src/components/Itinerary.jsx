import React, {useEffect, useState} from "react";
import axios from "axios";

function Itinerary() {
    var day = 2;
    var date = new Date;

    const [Itinerary, setItinerary] = useState({
            owner: "Ataberk",
            accomodation: "Ev",
            restaurants: ["a", "b","c","d"],
            attractions: ["a1","a2","a3","a4","a5","a6"],
            day: 2,
            date: date,
    });
    useEffect(()=> {
        const id = window.location.pathname.replace("/itinerary/", "");
        if(id) {
            axios.get(`http://localhost:5000/browse_it/itineraries/${id}`).then(res => {
                setItinerary(res.data);
                console.log(res.data);
            })
        }
    }, []);



    const itinerary = [];

    for (let i = 0; i < day; i++) {
        itinerary.push(
            <div>
                <br></br>
                <h1> Day {i+1}: {Itinerary.date.getDay} . {Itinerary.date.getMonth} . {Itinerary.date.getFullYear} </h1>
                <p>--------------------------------------</p>
                <h2> </h2>
                <li> 1 - {Itinerary.restaurants[2 * i + 0].name} </li>
                <li> 2 - {Itinerary.restaurants[2 * i + 1].name} </li>
                <p>--------------------------------------</p>
                <h2> Places to visit: </h2>
                <li> 1 - {Itinerary.attractions[3 * i + 0].name} </li>
                <li> 2 - {Itinerary.attractions[3 * i + 1].name} </li>
                <li> 3 - {Itinerary.attractions[3 * i + 2].name} </li>
                <p>--------------------------------------</p>
            </div>
        );
    }

    document.body.style.backgroundColor = "#e7e6e1";
    let loginLink = "";
    const token = localStorage.getItem("token");

    if(token ? loginLink = "/profile" : loginLink = "/auth");

    return(
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
            <div className = "body itinerary-body">
                <h1> Here is your Istanbul trip planned by Explora! </h1>
                <br></br>
                <h1>-----------------------------------------------</h1>
                <div className = "Itinerary">
                    <h1> Accomodation at: {Itinerary.accomodation.name} </h1>
                    {itinerary.map((opt,index) =>
                        <h3>{opt}</h3>
                    )}
                </div>
                <br></br>
            </div>
        </section>
    )

}

export default Itinerary;