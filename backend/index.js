const express = require('express')
const app = express()
app.use(express.json()) // allows us to interpret the body of any request

const mongoose = require('mongoose')

const recipeEndpoints = require('./routes/recipe')
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.tnzfc.mongodb.net/RecipesDB?retryWrites=true&w=majority"

app.use('/api/recipe', recipeEndpoints)

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to ${error}`))

// listens for a get request to be made to the / path
app.get('/', (req, res) => { // executes a function that takes in a request and response parameter
  res.send('Hello world!')  // sends 'Hello world!' as a response to this request
})

app.listen(3001)    // tells the server to listen for requests made on port 3001