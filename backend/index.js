// imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const recipeRouter = require('./routes/recipe-router');

// constants
const CONNECTION_URL = 'mongodb+srv://admin:password12345@bootcampproject.n3e9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 3001

// setup express
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: false }));

// setup mongoose
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// router
app.use('/api/recipe', recipeRouter);

// start server
app.listen(PORT);