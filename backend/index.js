const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connection_Url = "mongodb+srv://newUser:newPassword@myrecipes.96r6g.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_Url)
  .then(() => console.log('Succesfully Connected'))
  .catch((error) => console.log(`Could not connect to the Database due to ${error}`))

app.get('/', (req, res) => {
  res.send('Hello world! I am trying to understand this backend stuff')
})

app.listen(3001)