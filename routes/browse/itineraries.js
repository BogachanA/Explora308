const express = require("express");
const router = express.Router();
const Itinerary = require("../../models/Itinerary");
const Place = require("../../models/Place");
//const Itinerary = require("../../client/src/components/Itinerary");

router.get("/itineraries/:pid",async (req,res) => {
    //console.log(req.params);
    const iti = await Itinerary.findById(req.params["pid"]).exec();
    console.log(iti)
    if(!iti){
        return res.status(500).json({ place_not_found: "The place you're looking for doesn't exist in our database" });
    }

    const acc = await Place.findById(iti.accomodation).exec();
    if(!acc){
        return res.status(500).json({ place_not_found: "The accomodation you're looking for doesn't exist in our database" });
    }

    let placeList=[]
    for(let i of iti.attractions){
        const pl = await Place.findById(i).exec();
        if(!pl){
            return res.status(500).json({ place_not_found: "The place_attr you're looking for doesn't exist in our database" });
        }
        placeList.push(pl);
    }

    let restList=[]
    for(let i of iti.restaurants){
        const pl = await Place.findById(i).exec();
        if(!pl){
            return res.status(500).json({ place_not_found: "The place_attr you're looking for doesn't exist in our database" });
        }
        restList.push(pl);
    }

    let data = {
        day: iti.duration,
        date: iti.date,
        accomodation: acc,
        restaurants: restList,
        attractions: placeList
    };
    console.log(data);
    return res.json(data);
});

module.exports = router;