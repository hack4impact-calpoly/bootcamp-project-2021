const Recipe = require("../models/recipeSchema")
const express = require('express')

const router = express.Router()

router.get("/", async (req, res) => {
    const recipe = await Recipe.find({})
    res.send(recipe)
})

router.get('/:recipeName', async (req, res) => {
    const name = req.params.recipeName
    const recipe = await Recipe.findOne({
        'recipeName': name
    });
    res.send(recipeName)
})

module.exports = router