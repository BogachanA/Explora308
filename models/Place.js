const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Create Schema
const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["restaurant","museum","bar","tourist_attraction","night_club","shopping_mall","store","park","hotel"],
        required: true
    },
    photo_dest: {
        type: String,
    },
    geometry: {
        type: Object,
        required: true
    }
});

module.exports = Place = mongoose.model("places", PlaceSchema);
