const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connection_url = 'mongodb+srv://newUser:newPassword@cluster0.sszx6.mongodb.net/RecipesDB?retryWrites=true&w=majority'

const Recipe = require('./recipeSchema')


mongoose.connect(connection_url)
.then(() => console.log('Successfully Connected'))
.catch((error) => console.error(`Could not connect due to ${error}`))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

// gets all recipes
app.get("/api/recipe", async (req, res) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
  })

// gets recipe by link (name)
app.get("/api/recipe/:recipeName", async (req, res) => {
    const recipe = await Recipe.findOne({recipeName: req.params.recipeName})
    res.send(recipe)
})

// add a new ingredient to a specific recipe
app.post("/api/recipe/:recipeName/ingredient", async (req, res) => {
  try {
      const recipeName = req.params.recipeName
      const newIngredient = req.body.newIngredient
      const updatedRecipe = await Recipe.findOneAndUpdate(
          {recipeName: recipeName},
          {$push: {ingredients: newIngredient}},
          {new: true}
      )
      const ret = await updatedRecipe.save()
      res.json(ret)
  } catch(error) {
      res.status(500).send(error.message)
      console.log(`error is ${error.message}`)
  }
})

//add a new instruction to a specific recipe
app.post("/api/recipe/:recipeName/instruction", async (req, res) => {
  try {
      const recipeName = req.params.recipeName
      const newInstruction = req.body.newInstruction
      const updatedRecipe = await Recipe.findOneAndUpdate(
          {recipeName: recipeName},
          {$push: {procedure: newInstruction}},
          {new: true}
      )
      const ret = await updatedRecipe.save()
      res.json(ret)
  } catch(error) {
      res.status(500).send(error.message)
      console.log(`error is ${error.message}`)
  }
})




app.listen(3001)