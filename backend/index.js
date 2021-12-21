// environmental vars
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const recipeRouter = require('./routes/recipe-router');

// setup express
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: false }));

// setup mongoose
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// router
app.use('/api/recipe', recipeRouter);

// start server
app.listen(process.env.PORT || 3001);