const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose');
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.loqju.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to $(error)`));

const RecipeSchema = new mongoose.Schema({
    "recipeName" : String,
    "previewDesc" : String, 
    "recipeDescription" : String, 
    "recipeImage" : String,
    "ingredientList" : [String],
    "steps" : [String]
}, {collection: 'Recipes'});

const Recipe = mongoose.model('Recipe', RecipeSchema);
// ---- End of Schema/Model


app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/recipe', async (req, res) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
});

app.get('/api/recipe/:recipeName', async (req, res) => {
    const recipe = await Recipe.findOne({recipeName: req.params.recipeName});
    res.send(recipe);
});

app.post("/api/recipe", async (req, res) => {
    const {recipeName, previewDesc, recipeDescription, recipeImage, ingredientList, steps} = req.body;
    let recipe = new Recipe({
        recipeName, 
        previewDesc, 
        recipeDescription,
        recipeImage, 
        ingredientList, 
        steps
    })

    recipe.save(function (err, recipe) {
        if (err) {
            return next(err);
        }
        res.send(`Recipe entitled ${recipeName} added to collection`);
    })
});

app.put("/api/recipe/:recipeName/ingredient", async (req, res) => {
    const recipe = await Recipe.findOne({recipeName: req.params.recipeName});
    const ingredient = req.body.newIngredient;
    (recipe.ingredientList).push(ingredient);
    recipe.save(function (err, recipe) {
        if (err) {
            return next(err);
        }
        res.send(`ingredient ${ingredient} was added to ${recipe.recipeName} recipe`);
    });
});

app.put("/api/recipe/:recipeName/instruction", async (req, res) => {
    const recipe = await Recipe.findOne({recipeName: req.params.recipeName});
    const step = req.body.newInstruction;
    (recipe.ingredientList).push(step);
    recipe.save(function(err, recipe) {
        if (err) {
            return next(err);
        }
        res.send(`Instruction: '${step}' was added to ${recipe.recipeName} recipe`);
    });
});

app.delete("/api/recipe", (req, res) => {
    Recipe.findByIdAndRemove(req.body.id, (err, person) => {
        if (err) {
            console.log(err);
            res.send(err.message);
        }
        res.send(`Recipe with id ${req.body.id} was deleted.`);
    });
});

app.listen(3001);