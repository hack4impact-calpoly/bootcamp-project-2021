const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://dbUserNoah:dbPassword@cluster0.e7ixt.mongodb.net/RecipesDB?retryWrites=true&w=majority"
port = 3001

mongoose.connect(connection_url)
    .then(() => console.log('Successfully connected'))
    .catch((error) => console.error(`Could not connect due to ${error}`))

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(port)

