const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const connection_url = "mongodb+srv://newUser:<newPassword>@websitecluster.syy0q.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to ${error}`));

const RecipeSchema = new mongoose.Schema({
    recipeName: String,
    recipeDescription: String
}, {collection: 'Recipes'});

const Recipe = mongoose.model('Recipes', RecipeSchema);
module.exports = Recipe;
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
    });

app.get("/api/recipe", async (req, res) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
})

app.get("/api/recipe/:recipeName", async (req, res) => {
    const recipes = await RecipeSchema.find({recipeName: `recipeName`});
    res.send(recipes);
})

app.post("/api/recipe", async (req, res) => {
    const { recipeName, recipeDescription } = req.body;
    let recipe = new Recipe({
        recipeName,
        recipeDescription
    })

    try{
        recipe = await person.save();
        res.send(`A recipe called ${recipeName} was added to collection`);
    } catch(error){
        res.status(500).send(error.message);
        console.log(`error is ${error.message}`);
    }
})

app.put("/:recipeName/ingredient", async(req, res) => {
    const name = req.params.recipeName;
    const ingredient = req.body.newIngredient;
    const recipes = await Recipe.findOne({ recipeName: name});
    recipes.ingredientList.push(ingredient);

    try{
        name2 = await name2.save();
        res.send(`The recipe ${name} is added`);
    } catch(error){
        res.status(500).send(error.message);
        console.log(`error is ${error.message}`);
    }
})

app.put("/:recipeName/instruction", async(req, res) => {
    const name = req.params.recipeName;
    const instruction = req.body.newInstruction;
    const recipes = await Recipe.findOne({ recipeName: name});
    recipes.instructionList.push(instruction);

    try{
        name2 = await name2.save();
        res.send(`The recipe ${name} is added`);
    } catch(error){
        res.status(500).send(error.message);
        console.log(`error is ${error.message}`);
    }
})

app.listen(3001)