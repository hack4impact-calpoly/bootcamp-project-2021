const Recipe = require("./models/recipeSchema")

const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser1:notmypassword@uswest.e7u3b.mongodb.net/RecipesDB?retryWrites=true&w=majority"


mongoose.connect(connection_url)
    .then(() => console.log('Successfully connected'))
    .catch((error) => console.error(`Could not connect due to ${error}`))

app.get('/', (req, res) => {
  res.send('Hello world!')
})

// GET - /api/recipe
app.get("/api/recipe", async (req, res) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

// GET - /api/recipe/:recipeName
app.get("/api/recipe/:recipeName", async (req, res) => {
    const recipeName = req.params.recipeName
    const recipe = await Recipe.find({name: recipeName})
    res.send(recipe)
})

// POST - /api/recipe
app.post("/api/recipe", async (req, res) => {
    const {name, description, image, ingredients, instructions} = req.body
    let recipe = new Recipe({
        name,
        description,
        image,
        ingredients,
        instructions
    })

    try {
        recipe = await recipe.save()
        res.send(`Recipe named ${name} added to collection`)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})

// PUT - /api/recipe/:recipeName/ingredient
app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
    const recipeName = req.params.recipeName
    const ingredient = req.body.newIngredient

    try{
        await Recipe.findOneAndUpdate({name: recipeName}, {$push: {ingredients: ingredient}})
        res.send(`New ingredient added to ${recipeName}`)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
    
})

// PUT - /api/recipe/:recipeName/instruction
app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
    const recipeName = req.params.recipeName
    const instruction = req.body.newInstruction

    try{
        await Recipe.findOneAndUpdate({name: recipeName}, {$push: {instructions: instruction}})
        res.send(`New instruction added to ${recipeName}`)
    } catch(error) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
    
})


app.listen(3001)