const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	imageURL: {
		type: String,
		required: true
	},
	ingredients: {
		type: [String],
		required: true
	},
    instructions: {
		type: [String],
		required: true
	}
}, {collection: 'Recipes'});

module.exports = mongoose.model('Recipe', RecipeSchema);