import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Landing from "./components/Landing";
import Attractions from "./components/Attractions";
import Profile from "./components/Profile";
import Forms from "./components/Forms";
import AppRouter from "./AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
