const express = require('express');
const mongoose = require('mongoose');


const app = express()   //creates express object
app.use(express.json()) //Allows us to interpret the body of any request

//-------------Connection URL to mongoDB cluster-------------
const connection_url = "mongodb+srv://Sebastien:mongodb@cluster0.35yk7.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
  .then(() => console.log("Succesful connection to mongoDB"))
  .catch((error) => console.error(`Could not connect due to ${error}`))

//------------------Define Recipe Schema and Model-----------------
const recipeSchema = new mongoose.Schema({
  name : String,
  title: String,
  desc : String,
  ingredientList : [String],
  instructionList : [String],
  recipePic : String,
  alt : String
}, {collection: 'Recipes'}) //Collection name TBD

//mongoose.model(Name of mongo DB collection, schema)
const Recipe = mongoose.model("Recipes", recipeSchema);

//-------------------End of Schema and Model Section -----------------

app.get('/', (req, res) => { //listens for a GET request to be made to the / path, and then executes a function that takes in a request and a response parameter
  res.send('Hello world!')   //Sends hello world as a response to the request
})

/*******Note: Routes are created when building personal mongoDB API, subject to change */

//Get Query
app.get('/api/recipe', async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
})

//Get Query Look Up
app.get('api/recipe/:name', async (req, res) => { //Alternate url 'api/recipe/?name=###'
  const specificRecipe = await Recipe.findOne({name: req.params.name});
  res.send("Recipe was removed: ", specificRecipe);
});

//Post Query
app.post("api/recipe", async (req, res) => {
  const { name, title, desc, ingredientList, instructionList, recipePic, alt} = req.body;
  let recipe = new Recipe({
    name,
    title,
    desc,
    ingredientList,
    instructionList,
    recipePic,
    alt
  })

  recipe.save(function(err, recipe) { //Writes code into database
    if (err) {  //Error handling for request
      console.log(err);
      return next(err);
    }
    res.send(`Recipe ${name} added to collection`)
  })
});

router.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  const wantedRecipe = await Recipe.findOne(recipeName);
  wantedRecipe.ingredientList.addToSet(ingredient);
	// You now should have access to recipeName and ingredient assuming your 
	// request URL and body are correct. 
  wantedRecipe.save(function(err, wantedRecipe) { //Writes code into database
    if (err) {  //Error handling for request
      console.log(err);
      return next(err);
    }
    res.send(`Recipe ${recipeName} added to collection`)
  })
});

router.put("/api/recipe/:recipeName/instruction", async (req, res) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  const wantedRecipe = await Recipe.findOne(recipeName);
  wantedRecipe.instructionList.addToSet(instruction);
	// You now should have access to recipeName and ingredient assuming your 
	// request URL and body are correct. 
  wantedRecipe.save(function(err, wantedRecipe) { //Writes code into database
    if (err) {  //Error handling for request
      console.log(err);
      return next(err);
    }
    res.send(`Recipe ${recipeName} added to collection`)
  })
});

//Delete Query
app.delete("api/recipe", (req, res) => {
  //"Recipe" gets schema and tells us what schema to use
  Recipe.findByIdAndRemove(req.body.id, (err, recipe) => {
    if (err) { //error handling
      console.log(err);
      res.send(err.message);
    }
    res.send(`Recipe with id ${req.body.id} was deleted`)
  });
});


app.listen(3001)  //Tells the server to listen for requests made on port 3001

/*-------------------Notes----------------
 
-Adding ID to body allows us to request the id through the object (using req.body.id)
  -> Can also add id directly into function "id: 32535532"
-START SERVER: 'npm run dev'  from backend/ directory

*/