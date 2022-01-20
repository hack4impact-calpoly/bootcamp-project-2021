const express = require('express')
const mongoose = require('mongoose')

const connection_url = "mongodb+srv://brandonhuynh:hack4impact@cluster0.xkumh.mongodb.net/RecipesDB?retryWrites=true&w=majority"
const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

mongoose.connect(connection_url)
.then(() => console.log('Successfully Connected'))
.catch((error) => console.error('Could not connect due to ', error.message))

const Recipe = require('./models/schema');

app.get('/',  async (req, res) => {
  res.send('The back end is connected!')
})





//Get all recipes
app.get('/api/recipe/', async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
});

//Get recipe with recipeName
app.get('/:recipeName', async (req, res) => {
  const recipes = await Recipe.findOne({recipeTitle: req.params.recipeName})
  res.send(recipes)
});

// post
app.post('/', async (req, res) => {
  const { recipeTitle, description, image, ingredientList, stepsList } = req.body;
  let newRecipe = new Recipe({
    recipeTitle,
    description,
    image,
    ingredientList,
    stepsList,
  });
  
try {
  newRecipe = await newRecipe.save();
  res.send(`New Recipe, ${recipeTitle}, added to collection`);
} catch (error) {
  res.status(500).send(error.message);
  console.error(error.message);
}
});

app.put("/:recipeName/ingredient", async (req, res) => {
const recipeName = req.params.recipeName;
const ingredient = req.body.newIngredient;
let updatedRecipe = await Recipe.findOneAndUpdate(
  { recipeTitle: recipeName },
  {
    $push: { ingredientList: ingredient },
  }
);

try {
  updatedRecipe = await updatedRecipe.save();
  res.send(
    `Updated recipe "${recipeName}", with additional ingredient of "${ingredient}"`
  );
} catch (error) {
  res.status(500).send(error.message);
  console.error(error.message);
}
});

app.put("/:recipeName/instruction", async (req, res) => {
const recipeName = req.params.recipeName;
const instruction = req.body.newInstruction;
let updatedRecipe = await Recipe.findOneAndUpdate(
  { recipeTitle: recipeName },
  {
    $push: { stepsList: instruction },
  }
);

try {
  updatedRecipe = await updatedRecipe.save();
  res.send(
    `Updated recipe "${recipeName}", with additional instruction of "${instruction}"`
  );
} catch (error) {
  res.status(500).send(error.message);
  console.error(error.message);
}
});

const recipeEndpoints = require("./api/recipes.js");

app.use("/api/recipe", recipeEndpoints);

app.listen(3001)