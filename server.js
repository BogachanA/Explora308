const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const env = require("dotenv");
const cors = require('cors')


env.config();

var path = require('path');
global.appRoot = path.resolve(__dirname);

const browse_place = require("./routes/browse/places");
const browse_it = require("./routes/browse/itineraries");
const iten = require("./routes/browse/createItinerary");
const users = require("./routes/api/users");
const fetchPlaces = require("./routes/db_populate/placefetch");
console.log("Heyo");
//fetchPlaces();

const app = express();
app.use(cors())
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db,
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
/*
app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
});
*/



app.use("/api/users", users);
app.use("/browse", browse_place);
app.use("/browse_it", browse_it);
app.use("/create",iten);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
