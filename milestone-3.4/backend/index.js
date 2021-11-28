const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Recipe = require('./models/recipeSchema')
const connection_url = "mongodb+srv://Rover:ynx2Bigw7NQqc5W@cluster0.9j3ta.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log("Successfully connected"))
.catch((error) => console.error(`Could not connect due to ${error}`))

// listens for a GET request to be made to the / path. It then executes a function that takes in a request and a response parameter
app.get('/', (req, res) => {
    // sends 'Hello, world!' as a response to this request
    res.send('Hello, world!') 
})

// #1 - get all recipes
// PM Testing: http://localhost:3001/api/recipe
app.get("/api/recipe", async (req, res) => {
    try {
        const recipes = await Recipe.find({})
        res.send(recipes)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})

//#2 - get specific recipe given recipe namefindone 
// :recipeName indicates that we are expecting some dynamic data (not the literal string "recipeName") 
// PM Testing: http://localhost:3001/api/recipe/Strawberry Banana Smoothie
app.get("/api/recipe/:recipeName", async (req, res) => {
    try {
        const recipe = await Recipe.findOne({recipeName: req.params.recipeName})
        res.send(recipe)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})

// allows us to interpret the body of any request
app.use(express.json()) 

// #3 - create a new recipe given a body
// PM Testing: http://localhost:3001/api/recipe, paste new JSON obj in body
app.post("/api/recipe", async (req, res) => {
    try {
        const {recipeName, recipeLink, recipeSource, recipeDescription, recipeImage, ingredientList, instructionList} = req.body 
    
        let recipe = new Recipe({recipeName, recipeLink, recipeSource, recipeDescription, recipeImage, ingredientList, instructionList})

        recipe = await recipe.save()
        res.json(recipe)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})

// #4 - add an ingredient to a given recipe
// PM Testing: http://localhost:3001/api/recipe/Strawberry Banana Smoothie/ingredient, paste new JSON obj in body 
app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
    try {
        const recipeName = req.params.recipeName
        const ingredient = req.body.newIngredient
        const updatedRecipe = await Recipe.findOneAndUpdate(
            { recipeName: recipeName },
            { $push: {ingredientList: ingredient} }
        )
        const ret = await updatedRecipe.save()
        res.json(ret)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})

// #5 - add an instruction to a given recipe
// PM Testing: http://localhost:3001/api/recipe/Strawberry Banana Smoothie/instruction, paste new JSON obj in body 
app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
    try {
        const recipeName = req.params.recipeName
        const instruction = req.body.newInstruction
        const updatedRecipe = await Recipe.findOneAndUpdate(
            { recipeName: recipeName },
            { $push: {instructionList: instruction} }
        )
        const ret = await updatedRecipe.save()
        res.json(ret)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})

// tells the server to listen for requests made on port 3001
app.listen(3001) 
