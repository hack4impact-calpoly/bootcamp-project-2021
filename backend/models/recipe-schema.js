const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
RecipeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Recipe', RecipeSchema);