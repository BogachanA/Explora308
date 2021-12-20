import React, { useState } from "react";
import jwt_decode from "jwt-decode";

function Profile() {

    const [isEdit, setEdit] = useState(true);    
    const token = localStorage.getItem("token");

    const [editContact, setContact] = useState(token ? { ...jwt_decode(token.replace("Bearer ", "")), tempName: "",
        tempUsername: "",
        tempEmail: "",
        tempPhoneNumber: "",
        tempProfilePhoto: ""
    }: {
        name: "Ataberk Yılmaz",
        username: "ataberkyilmaz",
        email: "ataberkyilmaz@sabanciuniv.edu",
        phoneNumber: "+901234567890",
        profilePhoto: "./profile-temp.png",

        tempName: "",
        tempUsername: "",
        tempEmail: "",
        tempPhoneNumber: "",
        tempProfilePhoto: "",
      });

    console.log(editContact)

      function handleChange(event) {
        const { name, value } = event.target;
    
        setContact((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }
    
      const  saveEdit = event => {
            event.preventDefault()
            if(editContact.tempName !== "") {
                editContact.name = editContact.tempName;
                editContact.tempName = "";
            }
            if(editContact.tempUsername !== "") {
                editContact.username = editContact.tempUsername;
                editContact.tempUsername = "";
            }
            if(editContact.tempEmail !== "") {
                editContact.email = editContact.tempEmail;
                editContact.tempEmail = "";
            }
            if(editContact.tempPhoneNumber !== "") {
                editContact.phoneNumber = editContact.tempPhoneNumber;
                editContact.tempPhoneNumber = "";
            }

          setEdit(!isEdit);
      }
    let loginLink = "";

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
            <section>
                
                <div className = "body profile-page"> 
                    <div className = "profile-photo">
                        <img className = "profile-photo" alt = "img1" src = { editContact.profilePhoto }></img>
                    </div>
                    <div className = "row">
                        <button className = "profile-edit-button" onClick={() => setEdit(!isEdit)}>
                            <img src = "./settings.png" className = "profile-edit-image"></img>
                        </button>
                    </div>
                    
                    {isEdit ? 
                        
                        <div className = "container row profile-text" >
                            <br></br>
                            <p> {editContact.name} </p>
                            <br></br>
                            <p> {editContact.username} </p>
                            <br></br>
                            <p> {editContact.email}</p>
                            <br></br>
                            <p> {editContact.phoneNumber} </p>
                        </div>

                        :
                        <div className = "container">
                            <form /*action="/api/users/login" method="POST"*/>
                                {/* <input 
                                    onChange={handleChange}
                                    type="file"
                                    value = {editContact.profilePhoto}
                                    placeholder="Choose photo"
                                /> */}
                                <input
                                    onChange={handleChange}
                                    name="tempName"
                                    value={editContact.tempName}
                                    placeholder="Name - Surname"
                                    required
                                />
                                <input
                                    onChange={handleChange}
                                    name="tempUsername"
                                    value={editContact.tempUsername}
                                    placeholder="Username"
                                    required
                                />
                                <input
                                    onChange={handleChange}
                                    name="tempEmail"
                                    value={editContact.tempEmail}
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    onChange={handleChange}
                                    name="tempPhoneNumber"
                                    value={editContact.tempPhoneNumber}
                                    placeholder="Phone Number"
                                />

                                <a className ="profile-save-button" href="" onClick = {saveEdit}> Save </a>
                            </form>
                        </div>
                        }
                </div>
            </section>
            <section>
                <div className = "container">
                    <h2> Previous Itenaries </h2>
                    <br></br>
                    <ul>
                        <div className = "row">
                            <li> Istanbul Trip 1</li>
                            <p> Kadıköy was visited </p>
                        </div>
                        <br></br>
                        <div className = "row">
                            <li> Istanbul Trip 2</li>
                            <p> Beşiktaş was visited </p>
                        </div>
                        <br></br>
                        <div className = "row">
                            <li> Istanbul Trip 3</li>
                            <p> Taksim was visited </p>
                        </div>
                        <br></br>
                        <div className = "row">
                            <li> Istanbul Trip 4</li>
                            <p> Sultanahmet was visited </p>
                        </div>
                        <br></br>
                        <div className = "row">
                            <li> Istanbul Trip 5</li>
                            <p> Caddebostan was visited </p>
                        </div>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default Profile;