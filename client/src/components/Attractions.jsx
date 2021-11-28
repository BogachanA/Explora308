import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";

function Attractions() {

    document.body.style.backgroundColor = "#e7e6e1";

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

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
            <div className="row">
                <div className="leftCol columna">
                    <ul>
                        <br></br>
                        <li className="leftColText">
                            <a href="#Forms"></a>
                        </li>
                    </ul>
                </div>
                <div className="columnAttraction">
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="columnh1">
                            <h1 className="h1Attraction">Hagia Sophia</h1>
                        </div>
                        <div className="columnh5">
                            <h5 className="h5Attraction">Location: Eminönü</h5>
                            <h5 className="h5Attraction">Category: Cultural and Heritage Tourism</h5>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="infocol">
                        <div className="stars">
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#FF4C29"
                                value={4}/>
                        </div>
                        <p className="pAttraction">
                            <br></br>
                            This architectural marvel displays 30 million gold tiles throughout its
                            interior, and a wide, flat dome which was a bold engineering feat at the time it
                            was constructed in the 6th century.
                        </p>
                        <p className="pAttraction">
                            <br></br>
                            Neighborhood: Sultanahmet
                            <br></br>
                            Location: Sultan Ahmet, Ayasofya Meydanı No:1, Istanbul 34122 Turkey
                        </p>
                        <br></br>
                        <img className="imgMap" alt="map" src="./map.png"/>
                    </div>
                    <div className="photocol">
                        <img className="imgAttraction" alt="hagiasophia" src="./ayasofya2.jpeg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Attractions;
