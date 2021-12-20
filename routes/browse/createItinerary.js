const express = require("express");
const router = express.Router();
const passport = require("passport-jwt");
const Place = require("../../models/Place");
const User = require("../../models/User");
const Itinerary = require("../../models/Itinerary");

let latlon = {
    "karakoy": {
        lat: 41.024374346801764,
        lng: 28.978345431691658
    },
    "maslak": {
        lat: 41.11652532019485,
        lng: 29.02100330700415
    },
    "beyoglu": {
        lat: 41.041489018639425,
        lng: 28.96411732028873
    },
    "kadikoy": {
        lat: 40.9789245831939,
        lng: 29.067687192549222
    },
    "besiktas": {
        lat: 41.06731197065712,
        lng: 29.025592952436
    },
    "sariyer": {
        lat: 41.17276001199538,
        lng: 29.008494111120083
    },
    "ortakoy": {
        lat: 41.05175033375508,
        lng: 29.03042701375752
    },
    "fatih": {
        lat: 41.01140453205563,
        lng: 28.964092129273887
    },
    "uskudar": {
        lat: 41.02823462731762,
        lng: 29.053906660964653
    },
    "sisli": {
        lat: 41.0582073431304,
        lng: 28.98319251134533
    },
    "kagithane": {
        lat: 41.08418647547262,
        lng: 28.978440013859963
    },
    "atasehir": {
        lat: 40.98736718246843,
        lng: 29.114882436050834
    },
    "beykoz": {
        lat: 41.143934380410286,
        lng: 29.158266073858595
    }
}

let activityTypes = {
    'cultural and heritage tourism': [
        {type: "tourist_attraction"},
        {type: "museum"}
    ],
    'shopping': [
        {type: "store"},
        {type: "shopping_mall"}
    ],
    'food tourism': [
        {type: "restaurant"},
        {type: "bar"}
    ],
    'outdoor': [
        {type: "park"}
    ],
    'entertainment': [
        {type: "night_club"},
        {type: "bar"},
        {type: "shopping_mall"}
    ]
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function findID(arr, id){
    for(let a of arr){
        if(a.toString()===id.toString()) return true;
    }
    return false;
}

router.post("/newTrip",async (req,res) => {

    //Daycount
    console.log(req.body);
    let st = new Date(req.body.start);
    let en = new Date(req.body.end);
    let dayCount= Math.floor((en-st) / (1000*60*60*24)) + 1;
    console.log(dayCount);
    //Place for each day
    let placeList = req.body.place;
    let placeDayMatch = {}

    for (let i = 0; i < dayCount; i++) {
        if(i < placeList.length) placeDayMatch[i] = placeList[i];
        else {
            placeDayMatch[i] = placeList[Math.floor(Math.random()*placeList.length)];
        }
    }

    let chosenHotel;
    //Find an accomodation
    const hotels = await Place.find({type: "hotel"}).exec();
    shuffleArray(hotels);
    for(hotel of hotels){
        //console.log(req.body.place);
        let distH = Math.abs(hotel.geometry.lat - latlon[req.body.place[0]].lat);
        let distV = Math.abs(hotel.geometry.lng - latlon[req.body.place[0]].lng);
        if(distV < 0.05 && distH < 0.037){
            chosenHotel = hotel._id;
            break;
        }
    }


    //Find filtered places
    let filters = [];
    for(l of req.body.activity){
        filters = filters.concat(activityTypes[l]);
    }

    let placesList = [];
    let restaurantList = [];
    // Note no `await` here

    for (let i = 0; i < dayCount; i++) {

        const cursor = Place.find({$or: filters}).cursor();
        const cursorNight = Place.find({$or: [{type: "bar"},{type: "night_club"}]}).cursor();
        const cursorRes = Place.find({type: "restaurant"}).cursor();

        // Choose 2 attractions
        let currPlace = placeDayMatch[i];
        let count = 0;
        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
            // Use `doc`
            let distH = Math.abs(doc.geometry.lat - latlon[currPlace].lat);
            let distV = Math.abs(doc.geometry.lng - latlon[currPlace].lng);
            if(distV < 0.05 && distH < 0.037 && !findID(placeList,doc._id)){
                placesList.push(doc._id);
                count++;
            }
            if(count===2) break;
        }

        count=0;
        for (let docN = await cursorNight.next(); docN != null; docN = await cursorNight.next()) {
            // Use `doc`
            let distH = Math.abs(docN.geometry.lat - latlon[currPlace].lat);
            let distV = Math.abs(docN.geometry.lng - latlon[currPlace].lng);
            if(distV < 0.05 && distH < 0.037 && !findID(placeList,docN._id)){
                placesList.push(docN._id);
                count++;
            }
            if(count===1) break;
        }


        //restaurants
        count = 0;
        for (let docR = await cursorRes.next(); docR != null; docR = await cursorRes.next()) {
            // Use `doc`
            let distH = Math.abs(docR.geometry.lat - latlon[currPlace].lat);
            let distV = Math.abs(docR.geometry.lng - latlon[currPlace].lng);
            if(distV < 0.05 && distH < 0.037 && !findID(restaurantList,docR._id)){
                restaurantList.push(docR._id);
                count++;
            }
            if(count===2) break;
        }



    }

    console.log(placesList);
    console.log("*******************");
    console.log(restaurantList);
    console.log("*******************");
    console.log(res.locals.user);

    /*
    const token = localStorage.getItem("token");

    let x = {...passport(token.replace("Bearer ", ""))}
    let u= await User.findOne({email: x.email}).exec();
    */


    let it = new Itinerary({
        //owner: u._id,
        accomodation: chosenHotel,
        restaurants: restaurantList,
        attractions: placesList,
        date: st,
        duration: dayCount
    });

    console.log(it);
    /*
    const it = new Itinerary({
       owner
    });
    */
    it.save().catch(err => console.log(err));

    return res.json(it._id);
})

module.exports = router;