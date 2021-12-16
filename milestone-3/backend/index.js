const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require('mongoose')
const Recipe = require('./models/recipeSchema')
const connection_url = "mongodb+srv://dbUserNoah:dbPassword@cluster0.e7ixt.mongodb.net/RecipesDB?retryWrites=true&w=majority"
port = 3001

mongoose.connect(connection_url)
    .then(() => console.log('Successfully connected'))
    .catch((error) => console.error(`Could not connect due to ${error}`))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
    });

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

// routes will go here

// route to get all recipes
app.get("/api/recipe", async (req, res) => {
    try {
        const recipes = await Recipe.find({})
        res.send(recipes)
    } catch {
        console.log("Could not fetch recipe")
    }
})

// route to get specific recipe
app.get("/api/recipe/:recipeName", async (req, res) => {
    const recipeName = req.params.recipeName;
    const recipe = await Recipe.findOne({ 
        recipeName: recipeName 
    })
    res.send(recipe)
})

// route to post a new recipe given a body
app.post("/api/recipe", async (req, res) => {
    const { recipeName, description, imageSrc, ingredients, servingSize, instructions } = req.body
    let recipe = new Recipe({
        recipeName,
        description,
        imageSrc,
        ingredients,
        servingSize,
        instructions
    })
    try {
        recipe = await recipe.save()
        res.send(`Recipe named ${recipeName} and description: ${description}, added to collection`)
    } catch (error) {
        console.log(`error is: ${error.message}`)
    }
})

// route to put a new ingredient given a recipe name and new ingredient
app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
    const recipeName = req.params.recipeName
    const ingredient = req.body.newIngredient
    try {
        await Recipe.findOneAndUpdate({ recipeName: recipeName }, { $push: { ingredients : ingredient } } )
        res.send(`Added: ${ingredient} to ${recipeName}'s ingredient list!`)
    } catch (error) {
        console.log(`error is: ${error.message}`)
    }
})

// route to put a new instruction given a recipe name and new instruction
app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
    const recipeName = req.params.recipeName
    const instruction = req.body.newInstruction
    try {
        await Recipe.findOneAndUpdate({ recipeName: recipeName }, { $push: { instructions: instruction } })
        res.send(`Added: ${instruction} to ${recipeName}'s instruction list!'`)
    } catch (error) {
        console.log(`error is: ${error.message}`)
    }
})


app.listen(port)

