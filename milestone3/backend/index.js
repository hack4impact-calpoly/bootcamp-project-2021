const express = require('express')

const app = express()
app.use(express.json())

const mongoose = require('mongoose')

const connection_url = "mongodb+srv://newUser:newPassword@recipecluster.qvgrl.mongodb.net/RecipeDB?retryWrites=true&w=majority"
const recipeEndpoints = require('./routes/recipeRoutes')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Header", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header('Access-Control-Allow-Methods', "*");
//   next();
// });

app.use("/api/recipe", recipeEndpoints)

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error(`Could not connect due to ${error}`))


app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3001)