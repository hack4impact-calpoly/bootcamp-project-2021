const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
  name: String,
}, {collection: 'recipes'})

const Recipe = mongoose.model('recipes', exampleSchema)

module.exports = Recipe