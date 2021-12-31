const express = require('express');
const mongoose = require('mongoose');


const app = express()   //creates express object
app.use(express.json()) //Allows us to interpret the body of any request
app.use((req, res, next) => { //Allows us to bypass CORS Error with React
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

//-------------Connects mongoose to mongoDB cluster via URL-------------
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


//-------------------API Routes---------------------------------

//Test Route (No functional purpose)
app.get('/', (req, res) => { //listens for a GET request to be made to the / path, and then executes a function that takes in a request and a response parameter
  res.send('Hello world!')   //Sends hello world as a response to the request
})

//Gets all recipes from DB
app.get('/api/recipe', async (req, res) => {
  try{
    const recipes = await Recipe.find({});
    res.send(recipes);
    console.log("Success: recipes found");
  }
  catch (error){
    console.error(error);
    res.send(`An error has occured while finding recipes: ${error}`)
  }
})

//Get single recipe by name param
app.get('/api/recipe/:name', async (req, res) => { 
  try{
    const specificRecipe = await Recipe.findOne({ name: req.params.name });
    res.send(specificRecipe);
    console.log(`Success: recipe ${specificRecipe.name} found`);
  }
  catch(error){
    console.error({error});
    res.send(`An error has occured while finding recipe: ${error}`);
  }
});

//Add New Recipe to DB
app.post("/api/recipe", async (req, res) => {
  try{
    //Another way: "const name = req.body.name;"" etc.
    const { name, title, desc, ingredientList, instructionList, recipePic, alt} = req.body;
    let recipe = new Recipe({
      name,
      title,
      desc,
      ingredientList,
      instructionList,
      recipePic,
      alt
    });

    recipe.save(function(err, recipe) { //Writes code into database
      if (err) {  //Error handling for save request
        console.log(`An error has occured while adding recipe to DB: ${err}`);
        return next(err);
      }
      res.send(`Success: Recipe ${name} added to collection`);
      console.log(`Success: Recipe ${name} added to collection`);
    })
  }
  catch(error){
      console.error(error);
      res.send(`An error has occured while creating new recipe: ${error}`)
  }
});

//Add new ingredient to a recipe
app.put("/api/recipe/:name/ingredient", async (req, res) => {
  try{
    //Gets recipe name and new ingredient
    const recipeName = req.params.name;
    const newIngredient = req.body.newIngredient;
    
    //Updates ingredient list
    let wantedRecipe = await Recipe.findOne({ name : recipeName}); //Finds the recipe to update from the params
    wantedRecipe.ingredientList.addToSet(newIngredient); //Gets access to newIngredient JSON from body and adds to ingredient list (If not already in the list)

    //Changes recipe in DB
    wantedRecipe.save(function(err, wantedRecipe) { //Writes code into database
      if (err) {  //Error handling for request
        console.log(`An error has occured while adding ingredient to DB: ${err}`);
        return next(err);
      }
      res.send(`Success: "${newIngredient}" added to ${recipeName} ingredient list`)
      console.log(`Success: "${newIngredient}" added to ${recipeName} ingredient list`)
    })
  }
  catch(error){
    console.error(error);
    res.send(`An error has occured while updating ingredient list: ${error}`)
  }
});

//Add new instruction to a recipe
app.put("/api/recipe/:name/instruction", async (req, res) => {
  try{
    //Gets recipe name and new instruction
    const recipeName = req.params.name;
    const newInstruction = req.body.newInstruction;

    //Updates instruction list
    let  wantedRecipe = await Recipe.findOne({ name : recipeName}); //Finds the recipe to update from the params
    wantedRecipe.instructionList.addToSet(newInstruction); //Gets access to newInstruction JSON from body and adds to ingredient list (if not already in the list)

    //Changes recipe in DB
    wantedRecipe.save(function(err, wantedRecipe) { //Writes code into database
      if (err) {  //Error handling for request
        console.log(`An error has occured while adding instruction to DB: ${err}`);
        return next(err);
      }
      res.send(`Success: "${newInstruction}" added to ${recipeName} instruction list`)
      console.log(`Success: "${newInstruction}" added to ${recipeName} instruction list`)
    })
  }
  catch(error){
    console.error(error);
    res.send(`An error has occured while updating instruction list: ${error}`)
  }
});

app.listen(3001)  //Tells the server to listen for requests made on port 3001

/*-------------------Notes----------------
 
-Adding ID to body allows us to request the id through the object (using req.body.id)
  -> Can also add id directly into function "id: 32535532"
-START SERVER: 'npm run dev'  from backend/ directory

  -Add error handling
  -Use "res" to send confirmation/failure message

 -CRUD Operation: Create <- Alternate ways
    1.  await Event.create({
          name: "Bootcamp 7",
          topic: "MongoDB",
          date: Date.now(),
        });

    2.  const bootcamp = new Event({
          name: "Bootcamp 7",
          topic: "MongoDB",
          date: Date.now(),
        });
        await bootcamp.save();
  -CRUD Operation: Read 
        -> find() - Zero or More
        -> findOne() - Zero or One
        -> findById() - Zero or One
  -CRUD Operation: Update
        -> findByIdAndUpdate()
        -> findOneAndUpdate()
        Example:
        const updatedEvent =
          await Event.findOneAndUpdate(
            { topic: "MongoDB" },
            { date: new Date(2021, 10, 8)}
          )'
  -CRUD Operation: Delete
        -> findByIdAndDelete()
        -> findOneAndDelete()
        Example:
        const removedEvent =
            await Event.findByIdAndDelete(
              "6187324a38ea5815a2cbb222"
            );
*/