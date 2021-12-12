const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const connection_url = "mongodb+srv://newUser001:lifeis11@cluster0.rsqsa.mongodb.net/carBlogDB?retryWrites=true&w=majority"

mongoose.connect(connection_url).then(() => console.log('Succesfully Connected'))
mongoose.connect(connection_url).catch((error) => console.error('Could not connect due to ${error}', error.message))

const CarSchema = new mongoose.Schema({
    id: String,
    carName: String, 
    year: String, 
    briefDescription: String,
    imageID: String,
    carSpecs: [String],
    carFacts: [String],
}, {collection: 'cars'});

const Car = mongoose.model('Car', CarSchema)

// app.get('/api/hi', async (req,res) => {
//     res.send("Hello World")
// })
app.get('/api/car', async (req,res) => {
    const carz = await Car.find({})
    res.send(carz)
})

app.listen(3001)