const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://CBrazell23:dbpw@cluster0.jm5gt.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error('Could not connect due to ${error}'))

const RecipeSchema = new mongoose.Schema({
  Route: String,
  Name: String,
  Description: String,
  Introduction: String,
  Image: String,
  Ingredients: [String],
  Instructions: [String]
}, {collection: 'Recipes'})

const Recipe = mongoose.model('Recipe', RecipeSchema)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('suck world!')
})

app.get("/api/recipe", async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
  return(res)
})

app.get("/api/recipe/:recipeName", async (req, res) => {
  const recipes = await Recipe.findOne({Name: req.params.recipeName})
  res.send(recipes)
})

app.post("/api/recipe", async (req, res) => {
  const { Route, Name, Description, Introduction, Image, Ingredients, Instructions } = req.body
  let recipe = new Recipe({
    Route, 
    Name, 
    Description, 
    Introduction, 
    Image, 
    Ingredients, 
    Instructions
  })
  recipe.save(function (err, recipe){
    if(err){
      return next(err)
    }
    res.send('Recipe named ${Name} added to collection')
  })
})

app.put("/api/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  const rec = await Recipe.findOne({Name: recipeName})

  rec.Ingredients.push(ingredient) // The ingredient is added to the array rec.Ingredients

  rec2 = rec.Ingredients // rec2 is the ingredients list

  // res.send(rec2)

  const updatedRecipe = await Recipe.findOneAndUpdate(
    {Name: recipeName},

    {Ingredients: rec2}
  )

  res.send(updatedRecipe)
})

app.listen(3001)