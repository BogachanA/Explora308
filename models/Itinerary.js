const mongoose = require("mongoose");
const Place = require("./Place");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
    accomodation: {
        type: Place,
        required: true
    },
    restaurants: {
        type: [Place],
        required: true
        // her güne sırayla 3 restaurant infosu ver
    },
    attractions: {
        type: [Place],
        required: true
        // her güne sırayla 2 attraction infosu ver (sana bağlı istersen değiştir)
    },
    nightEvents: {
        type: [Place],
        required: true
    },
    date: {
        type: [Date],
        required: true
    },
})