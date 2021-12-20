const mongoose = require("mongoose");
const Place = require("./Place");
const User = require("./User");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    accomodation: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: true
    },
    restaurants: {
        type: [Schema.Types.ObjectId],
        ref: 'Place',
        required: true
        // her güne sırayla 2 restaurant infosu ver
    },
    attractions: {
        type: [Schema.Types.ObjectId],
        ref: 'Place',
        required: true
        // her güne sırayla 2 attraction infosu ver (sana bağlı istersen değiştir)
    },
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})

module.exports = Itenarary = mongoose.model("itineraries", ItinerarySchema);