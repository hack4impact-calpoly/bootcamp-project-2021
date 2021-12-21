const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newuser:newPassword@cluster0.w4wyn.mongodb.net/RecipeDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(()=> console.log('Succesfully Connected'))
.catch((error)=> console.log('Could not connect due to ${error}'))

const Recipe = require("./models/recipeSchema")

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.get('/api/recipes', async (req, res) => {
  console.log("get request")
  const recipe = await Recipe.find({})
  res.send(recipe)
  console.log("done")
})

app.get('/api/recipes/:recipeName', async (req, res) => {
  const recipeName = await Recipe.findOne({recipeName: req.params.recipeName})
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
    res.send(`New ingredient: ${ingredient} added to ${recipeName}`)
  } catch(error){
    res.status(500).send(error.message)
    console.log(`Could not add ${ingredient} because ${error.message}`)
  }
})

app.put('/api/recipe/:recipeName/instruction', async (req, res) =>{
  const recipeName = req.params.recipeName
  const instruction = req.body.newInstruction
  try {
    const recipe = await Recipe.findOneAndUpdate({recipeName: recipeName}, {$push: {steps: instruction}})
    res.send(`New instruction: ${instruction} added to ${recipeName}`)
  } catch(error){
    res.status(500).send(error.message)
    console.log(`Could not add ${instruction} because ${error.message}`)
  }
})

app.listen(3001)
