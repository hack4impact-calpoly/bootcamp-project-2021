const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const Recipe = require('./models/recipeSchema')
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.vh76p.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url).then(() => console.log('Successfully connected')).catch((error) => console.error('Could not connect due to ${error}'))

app.get('/', (req, res) => {
  res.send('Hello world!')
})

// Get all recipes
app.get("/api/recipe", async (req, res) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

// Get specific recipe
app.get("/api/recipe:recipeName", async (req, res) => {
    const recipeName = req.params.recipeName
    const recipes = await Recipe.find({recipeName})
    res.send(recipes)
})

app.post("/api/recipe", async (req, res) => {
    const { recipeName, link, previewDesc, recipeDesc, recipeImage, ingredients, steps } = req.body

    let recipe = new Recipe({
        recipeName : recipeName,
        link : link,
        previewDesc : previewDesc,
        recipeDesc : recipeDesc,
        recipeImage : recipeImage,
        ingredients : ingredients,
        steps : steps
    })

    try {
        recipe = await recipe.save()
        res.send(`${recipeName} recipe added to collection`)
    } catch (err) {
        res.status(500).send(err.message)
        console.log(`Error: ${err.message}`)
    }
})

app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
    const recipeName = req.params.recipeName
    const newIngredient = req.body.newIngredient
    let newIngredients = await Recipe.findOneAndUpdate(
        { recipeName: recipeName },
        { $push: { ingredients: newIngredient } 
    })

    try {
    newIngredients = await newIngredients.save()
    res.send(`Ingredient: "${newIngredient}" added to ${recipeName} ingredient list`)
    } catch (error) {
    res.status(500).send(error.message)
    console.log(`error is ${error.message}`)
    }
})

app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
    const recipeName = req.params.recipeName
    const newInstruction = req.body.newInstruction
    let newInstructions = await Recipe.findOneAndUpdate(
    { recipeName: recipeName },
    { $push: { steps: newInstruction } }
    )
    
    try {
    newInstructions = await newInstructions.save()
    res.send(`Instruction: "${newInstruction}" added to ${recipeName} instruction list`)
    } catch (error) {
    res.status(500).send(error.message)
    console.log(`Error: ${error.message}`)
    }
})

app.listen(3001)