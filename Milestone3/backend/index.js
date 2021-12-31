const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose');
const Recipe = require('./models/recipeSchema');
const connection_url = "mongodb+srv://new_user_24:abcdef1234@cluster0.api6a.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to ${error}`))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/api/Recipe', async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})

app.get('/api/Recipe/:name', async (req, res) => {
  const finalName = await Recipe.find({name: req.params.name})
  res.send(finalName)
})

app.post('/api/Recipe', async (req, res) => {
  const { name, description, image, link, ingredientlist, steps } = req.body;
  let recipe =  new Recipe({
    name,
    description,
    image,
    link,
    ingredientlist,
    steps
  })

  try {
    recipe = await recipe.save()
    res.send(`${name} is successfully added to collection`)
  }
  catch (err) {
    res.status(500).send(err.message);
    console.log(`${err.message} made recipe addition unsuccessful`)
  }
})

app.put("/api/Recipe/:recipeName/ingredient", async (req, res) => {
  const name = Recipe.findOne({name: req.params.name});
  const ingredient = Recipe.findOne({ingredientlist: req.body.newIngredient});
  try {
    Recipe.findOneAndUpdate({name: name}, {"$push": {"ingredientlist": ingredient}}, (err, recipe) =>
    res.send('Ingredient is successfully added to collection')
  )}
  catch (err) {
    res.status(500).send(err.message);
    console.log(`${err.message} made ingredient addition unsuccessful`)
  }
})

app.put("/api/Recipe/:recipeName/instruction", async (req, res) => {
  const name = Recipe.findOne({name: req.params.name});
  const instruction = Recipe.findOne({steps: req.body.newInstruction});
  try {
    Recipe.findOneAndUpdate({name: name}, {"$push": {"steps": instruction}}, (err, recipe) =>
    res.send('Instruction is successfully added to collection')
  )}
  catch (err) {
    res.status(500).send(err.message);
    console.log(`${err.message} made instruction addition unsuccessful`)
  }
})

app.listen(3001)