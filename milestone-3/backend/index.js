const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser:<newPassword>@websitecluster.syy0q.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to ${error}`))

const Recipe = new mongoose.Schema({
    recipe_name: String,
    recipe_description: String
}, {collection: 'Recipes'})

const Setup = mongoose.model('Recipes', Recipe)
module.exports = Setup
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Hello world!`)
})

app.get("/api/recipe", async (req, res) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

app.get("/api/recipe/:recipeName", async (req, res) => {
    const recipes = await Recipe.find({"/:recipeName"})
    res.send(recipes)
})

app.post("/api/recipe", async (req, res) => {
    const { recipe_name, recipe_description, imgsrc, id } = req.body
    let recipe = new Setup({
        recipe_name,
        recipe_description,
        imgsrc,
        id
    })

    try{
        recipe = await person.save()
        res.send(`A recipe called ${recipe_name} was added to collection`)
    } catch(error){
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})

app.put("/:recipeName/ingredient", async(req, res) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;
})

app.put("/:recipeName/instruction", async(req, res) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;
})

app.listen(3001)