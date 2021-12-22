const express = require('express');
const app = express();
app.use(express.json())

const recipeEndpoints = require("./routes/recipe");
app.use("/api/recipe", recipeEndpoints);

const mongoose = require('mongoose');
const connection_url = 'mongodb+srv://newUser:newPassword@cluster0.bdaz5.mongodb.net/RecipesDB?retryWrites=true&w=majority'

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error('Could not connect due to ${error}'))

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3001)