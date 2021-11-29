const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser:newPassword@recipecluster.qvgrl.mongodb.net/RecipeDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to ${error}`))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3001)