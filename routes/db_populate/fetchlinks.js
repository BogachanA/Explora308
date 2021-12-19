const express = require("express");
const Place = require("../../models/Place");
const router = express.Router();
const fetchPlace = require("placefetch");

router.get("/fetch",async (req,res) => {

    await fetchPlace();
    return res.status(200).json({message: "Successfully fetched"});
});