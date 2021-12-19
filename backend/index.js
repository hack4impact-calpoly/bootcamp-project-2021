const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newuser:newPassword@cluster0.w4wyn.mongodb.net/RecipeDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(()=> console.log('Succesfully Connected'))
.catch((error)=> console.log('Could not connect due to ${error}'))

const Recipe = require("./models/recipeSchema")

app.get('/api/recipe', async (req, res) => {
  const recipe = await Recipe.find({})
  res.send(recipe)
})

app.get('/api/recipes/:recipeName', async (req, res) => {
  const recipeName = await Recipes.findOne({recipeName: req.params.recipeName})
  res.send(recipeName)
})

app.post('/api/recipe', async (req, res) => {
  const {id, recipeName, link, recipeDescription, recipeImage, ingredientList, steps} = req.body
  let recipe = new Recipe({
    id,
    recipeName,
    link,
    recipeDescription,
    recipeImage,
    ingredientList,
    steps
  })
  try{
    recipe = await recipe.save()
    res.send('Recipe named ${recipeName} added to collection.')
  } catch(error){
    res.status(500).send(error.message)
    console.log('Could not add recipe because ${error.message}')
  }
})

app.put('/api/recipe/:recipeName/ingredient', async (req, res) =>{
  const recipeName = req.params.recipeName
  const ingredient = req.body.newIngredient

  try {
    const recipe = await Recipe.findOneAndUpdate({recipeName: recipeName}, {$push: {ingredientList: ingredient}})
    res.send('New ingredient: ${ingredient} added to ${recipename}')
  } catch(error){
    res.status(500).send(error.message)
    console.log('Could not add ${ingredient} because ${error.message}')
  }
})

app.put('/api/recipe/:recipeName/instruction', async (req, res) =>{
  const recipeName = req.params.recipeName
  const instruction = req.body.newInstruction
  try {
    const recipe = await Recipe.findOneAndUpdate({recipeName: recipeName}, {$push: {steps: instruction}})
    res.send('New instruction: ${instruction} added to ${recipename}')
  } catch(error){
    res.status(500).send(error.message)
    console.log('Could not add ${instrcution} because ${error.message}')
  }
})

app.listen(3001)
