const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LocationSchema = new Schema({
    powiat: String,
    gmina: String,
    city: String,
    population: Number,
    nodeId: Number,
    category: Number

})

mongoose.model('location', LocationSchema);