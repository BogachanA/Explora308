const express = require("express");
const router = express.Router();
const Place = require("../../models/Place");

router.get("/attraction/:pid",async (req,res) => {
    console.log(req.params)
    const place = await Place.findById(req.params["pid"]).exec();
    console.log(place)
    if(!place){
        return res.status(500).json({ place_not_found: "The place you're looking for doesn't exist in our database" });
    }
    return res.json(place);
});

module.exports = router;