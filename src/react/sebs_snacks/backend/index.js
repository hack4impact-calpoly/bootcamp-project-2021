const express = require('express')
const app = express()   //express object
app.use(express.json()) //Allows us to interpret the body of any request

app.get('/', (req, res) => { //listens for a GET request to be made to the / path, and then executes a function that takes in a request and a response parameter
  res.send('Hello world!')   //Sends hello world as a response to the request
})

app.listen(3001)  //Tells the server to listen for requests made on port 3001

/*START SERVER: 'npm run dev'  from backend/ directory */