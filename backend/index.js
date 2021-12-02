const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.a9qq6.mongodb.net/RecipesDB?retryWrites=true&w=majority"
const recipeEndpoints = require("./routes/recipe")

mongoose.connect(connection_url)
    .then(() => console.log("Connection Success"))
    .catch((error) => console.log("Could not Connect due to ${error}"))

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.use("/api/recipe", recipeEndpoints)

app.listen(3001)