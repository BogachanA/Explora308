import React, { useState } from "react";

function Profile() {

    const [isEdit, setEdit] = useState(false);    
     
    const [editContact, setContact] = useState({
        name: "Ataberk Yılmaz",
        username: "ataberkyilmaz",
        email: "ataberkyilmaz@sabanciuniv.edu",
        phoneNumber: "+905057967160",
      });

      function handleChange(event) {
        const { name, value } = event.target;
    
        setContact((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

    function changeEdit() {
        console.log(isEdit);
        if (isEdit === true) {
            isEdit = false;
        }
        else {
            isEdit = true;
        }
        return isEdit;
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
                        <a href="#profile"><img className="profileLogo" alt="logo" src="./logo.png"/></a>
                    </li>
                </ul>
            </div>
            <section>
                
                <div className = "body profile-page"> 
                    <div className = "profile-photo">
                        <img className = "profile-photo" alt = "img1" src = "./profile-temp.png"></img>
                    </div>
                    <div className = "profile-text">  
                        <h1> { Profile.isEdit } </h1>
                    </div>
                    <button className = "profile-text" onClick={() => setEdit(!isEdit)}> Change Edit </button>
                    {isEdit ? 
                        <div className = "profile-text" >
                        <p> {editContact.name} </p>
                        <br></br>
                        <p> {editContact.username} </p>
                        <br></br>
                        <p> {editContact.email}</p>
                        <br></br>
                        <p> {editContact.phoneNumber} </p>
                        </div>

                        :
                        <div>
                            <form /*action="/api/users/login" method="POST"*/>
                                <input
                                    onChange={handleChange}
                                    name="name"
                                    value={editContact.name}
                                    placeholder="Name - Surname"
                                    required
                                />
                                <input
                                    onChange={handleChange}
                                    name="username"
                                    value={editContact.username}
                                    placeholder="Username"
                                    required
                                />
                                <input
                                    onChange={handleChange}
                                    name="email"
                                    value={editContact.email}
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    onChange={handleChange}
                                    name="phoneNumber"
                                    value={editContact.phoneNumber}
                                    placeholder="Phone Number"
                                />
                            <button type="submit" className ="button"> Save </button>
                            </form>
                        </div>
                        }
                    
                    
                </div>
            </section>
        </section>
    );
}

export default Profile;