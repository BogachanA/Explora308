const express = require("express");
const router = express.Router();
const Place = require("../../models/Place");

let latlon = {
    "kadikoy": {
        lat: 40.9789245831939,
        lng: 29.067687192549222
    }
}



router.post("/newTrip",async (req,res) => {

    // Note no `await` here
    const cursor = Place.find().cursor();

    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
        // Use `doc`
        let distH = doc.geometry.lat - latlon[req.data.place].lat;
        let distV = doc.geometry.lng - latlon[req.data.place].lng;
        if(distV < 0.05 && distH < 0.037){
            doc.type
        }
    }
})