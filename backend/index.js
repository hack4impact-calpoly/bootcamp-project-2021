const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser:2021@cluster0.uhkri.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url).then(() => console.log('successfully connected')).catch((error) => console.error(`Could not connect due to ${error}`))
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3001)