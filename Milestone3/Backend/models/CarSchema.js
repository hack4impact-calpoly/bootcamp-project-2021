const mongoose = require('mongoose')

const Car = new mongoose.Schema({
    id: String,
    carName: String, 
    year: Number, 
    briefDescription: String,
    imageID: String,
    carSpecs: [Object],
    carFacts: [Object]
    

}, {collection: 'cars'});

const Car = mongoose.model('Car', CarSchema)

module.exports = Car