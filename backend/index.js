const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Recipe = require('./models/recipeSchema')
const connection_url = "mongodb+srv://dbMeganTrieu:YHb5aXyiQPomvX4Q@cluster0.rtwvj.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
    .then(() => console.log('Successfully connected'))
    .catch((error) => console.error(`Could not connect due to ${error}`))
    
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello world!')
})
app.listen(3001)


app.get("/api/recipe", async (req, res) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

app.get("/api/recipe/:name", async (req, res) => {
    const recipeName = req.params.recipeName;
    const recipe = await Recipe.findOne({ 
        recipeName: recipeName 
    })
    res.send(recipe)
})

app.post("/api/recipe", async (req, res) => {
    const {name, link, desc, recipeImage, size, ingredients, prepTime, prep} = req.body;
    let recipe = new Recipe({name, link, desc, recipeImage, size, ingredients, prepTime, prep})
    try{
        recipe = await recipe.save()
        res.send('sucessfully added recipe')
    }
    catch(error){
        res.status(500).send(error)
        console.error(`error: ${error}`)
    }
})

//a new ingredient given a recipe name and new ingredient
app.put("/api/recipe/:name/ingredient", async (req, res) => {
    const recipeName = req.params.name
    const ingredient = req.body.newIngredient
    try {
        await Recipe.findOneAndUpdate({ name: recipeName }, { $push: { ingredients : ingredient } } )
        res.send(`ingredient was added to ${recipeName}'s ingredient list`)
    } catch (error) {
        console.log(`error is: ${error.message}`)
    }
})
//a new instruction given a recipe name and new instruction
app.put("/api/recipe/:name/instruction", async (req, res) => {
    const recipeName = req.params.name
    const instruction = req.body.newInstruction
    try {
        await Recipe.findOneAndUpdate({ name: recipeName }, { $push: { prep: instruction } })
        res.send(`instruction added to  ${recipeName}`)
    } catch (error) {
        console.log(`error is: ${error.message}`)
    }
})