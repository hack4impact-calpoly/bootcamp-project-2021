const express = require('express')

const app = express()
app.use(express.json())

const mongoose = require('mongoose')

const connection_url = "mongodb+srv://newUser:newPassword@recipecluster.qvgrl.mongodb.net/RecipeDB?retryWrites=true&w=majority"
const recipeEndpoints = require('./routes/recipeRoutes')

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to ${error}`))


app.use("/api/recipe", recipeEndpoints)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3001)