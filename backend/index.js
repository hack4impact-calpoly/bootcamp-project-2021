const express = require('express')
const app = express()
app.use(express.json())

const Recipe = require('./models/recipeSchema');
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser:2021@cluster0.uhkri.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url).then(() => console.log('successfully connected')).catch((error) => console.error(`Could not connect due to ${error}`))
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get("/api/recipe", async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})


app.get("/api/recipe/:recipeName", async (req, res) => {
  const recipes = await Recipe.find({recipeName: req.params.recipeName})
  res.send(recipes)
})

app.post("/api/recipe", async (req, res) => {
  const {recipeName,link,previewDesc, recipeImage,ingredientList, instructionList} = req.body;
  let recipe = new Recipe({recipeName,link,previewDesc, recipeImage,ingredientList, instructionList})
try{
  recipe = await recipe.save()
  res.send('recipe sucessfully added')
}
catch(error){
  res.status(500).send(error)
  console.error(`Could not add recipe due to ${error}`)
}
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header('Access-Control-Allow-Methods', "*");
  next();
  });

app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
 const recipeName = req.params.recipeName
 const ingredient = req.body.newIngredient
 const recipe = await Recipe.findOne({recipeName:recipeName})
try{
  recipe.ingredientList.push(ingredient)
  await recipe.save()
  res.send('ingredient sucessfully added')
}
catch(error){
  res.status(500).send(error)
  console.error(`Could not add ingredient due to ${error}`)
}
})

app.put("//api/recipe/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName
  const ingredient = req.body.newIngredient
  const recipe = await Recipe.findOne({recipeName:recipeName})
 try{
   recipe.ingredientList.push(ingredient)
   await recipe.save()
   res.send('ingredient sucessfully added')
 }
 catch(error){
   res.status(500).send(error)
   console.error(`Could not add ingredient due to ${error}`)
 }
 })





app.listen(3001)