import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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

  return (
    <div>
      <div className="main-screen">
        <h1 className="header">
          <strong>Welcome to Explora!</strong>
        </h1>
        <br></br>
        <div className = "container">
          <div className="login">
          <h2>Already have an account</h2>
          <br></br>
            <form action="/api/users/login" method="POST">
              <input
                onChange={handleChange}
                name="email"
                value={contact.email}
                placeholder="Email"
              />
              <input
                onChange={handleChange}
                name="password"
                value={contact.password}
                placeholder="Password"
              />
              <button type="submit" className ="button">Login</button>
            </form>   
          </div>
          <div className="register">
            <h2> <b> Not a user? </b> </h2>
            <br></br>
            <form action="/api/users/register" method="POST">
              <input
                onChange={handleChange}
                name="name"
                value={contact.name}
                placeholder="Name"
              />
              <input
                onChange={handleChange}
                name="email"
                value={contact.email}
                placeholder="Email"
              />
              <input
                  onChange={handleChange}
                  name="password"
                  value={contact.password}
                  placeholder="Password"
              />
              <input
              onChange={handleChange}
              name="password2"
              value={contact.password2}
              placeholder="Confirm Password"
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
