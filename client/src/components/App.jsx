import React, { useState } from "react";
import axios from "axios";

function App() {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });


  function handleLoginFormChange(event) {
    const { name, value } = event.target;
    setLoginForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  } 
  function handleRegisterFormChange(event) {
    const { name, value } = event.target;

    setRegisterForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', {...loginForm}).then(res => {
      localStorage.setItem("token", res.data.token);
    })
    window.location.href = "/profile";
  }

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/register', {...registerForm}).then(res => {
      console.log(res);
    })
  }

  function getName() {
    return registerForm.name;
  }

  let loginLink = "";
  const token = localStorage.getItem("token");

  if(token ? loginLink = "/profile" : loginLink = "/auth");

  return (
    <div>
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
                  <a href = {loginLink} ><img className="profileLogo" alt="logo" src="./logo.png"/></a>
              </li>
          </ul>
        </div>
      <div className="main-screen">
        <h1 className="header">
          <strong>Welcome to Explora!</strong>
        </h1>
        <br></br>
        <div className = "container">
          <div className="login">
          <h2>Already have an account</h2>
          <br></br>
            <form onSubmit={handleLogin}>
              <input
                onChange={handleLoginFormChange}
                name="email"
                value={loginForm.email}
                placeholder="Email"
                required
              />
              <input
                onChange={handleLoginFormChange}
                name="password"
                value={loginForm.password}
                type="password"
                placeholder="Password"
                required
              />
              <button type="submit" className ="button">Login</button>
            </form>   
          </div>
          <br></br>
          <div className="register">
            <h2> <b> Not a user? </b> </h2>
            <br></br>
            <form onSubmit={handleRegister}>
              <input
                onChange={handleRegisterFormChange}
                name="name"
                value={registerForm.name}
                placeholder="Name"
                required
              />
              <input
                onChange={handleRegisterFormChange}
                name="email"
                value={registerForm.email}
                placeholder="Email"
                required
              />
              <input
                  onChange={handleRegisterFormChange}
                  name="password"
                  type="password"
                  value={registerForm.password}
                  placeholder="Password"
                  required
              />
              <input
              onChange={handleRegisterFormChange}
              name="password2"
              type="password"
              value={registerForm.password2}
              placeholder="Confirm Password"
              required
            />
              <button type="submit">Register</button>
            </form> 
          </div>  
        </div>
      </div>
    </div>
    
  );
}

export default App;
