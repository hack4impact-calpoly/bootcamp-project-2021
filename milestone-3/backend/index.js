const express = require('express')
const app = express()


const mongoose = require('mongoose')

app.use(express.json())

const connection_url = "mongodb+srv://newUser:newPassword@cluster0.cay89.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(connection_url)
.then(() => console.log('Successfully connected to MongoDB!'))
.catch((error) => console.error('Could not connect due to ${error}'))

const RecipeSchema = new mongoose.Schema({
  recipeName: String,
  recipeDescription: String,
  recipeImage: String,
  ingrediantList: [String],
  instructionList: [String]
}, {collection: 'Recipes'});

const Recipe = mongoose.model('Recipe', RecipeSchema)

//idk i hope this fixes errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

// default route
app.get('/', (req, res) => {
  res.send('Hello all!')
})

// get all recipes
app.get("/api/recipe", async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})

// get recipe given recipe name
app.get("/api/recipe/:recipeName", async (req, res) => {
  const recipe = req.params.recipeName
  const recipes = await Recipe.find({recipeName: recipe})
  res.send(recipes)
})

//Creates a new recipe given a body
app.post("/api/recipe", async (req, res) => {
  const { recipeName, recipeDescription, recipeImage, ingrediantList, instructionList} = req.body
  let recipe = new Recipe({
    recipeName,
    recipeDescription,
    recipeImage,
    ingrediantList,
    instructionList,
  })

  recipe.save(function (err, recipe) {
    if (err) { 
      return next(err) 
    }
    res.send(`Recipe named ${recipeName} added to collection`)
  })
});

//updates the ingrediants of existing recipe
app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingrediant = req.body.newIngredient;
  const update = await Recipe.updateOne({ recipeName: recipeName }, { $push: {ingrediantList: ingrediant} });
  if(update.acknowledged){
    res.send(`Recipe named ${recipeName} has new ingrediant ${ingrediant}`)
  }
  else{
    res.send('update to ingrediant failed')
  }
});

//updates the instruction of existing recipe
app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  const update = await Recipe.updateOne({ recipeName: recipeName }, { $push: {instructionList: instruction} });
  if(update.acknowledged){
    res.send(`Recipe named ${recipeName} has new instruction ${instruction}`)
  }
  else{
    res.send('update to instruction failed')
  }
});


app.listen(3001)

