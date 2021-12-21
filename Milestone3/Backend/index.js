const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});
const connection_url =
  "mongodb+srv://newUser001:lifeis11@cluster0.rsqsa.mongodb.net/carBlogDB?retryWrites=true&w=majority";
const Car = require("./models/CarSchema");

mongoose
  .connect(connection_url)
  .then(() => console.log("Succesfully Connected"));
mongoose
  .connect(connection_url)
  .catch((error) =>
    console.error("Could not connect due to ${error}", error.message)
  );

app.get("/api/getCar", async (req, res) => {
  const carz = await Car.find({});
  res.send(carz);
});

app.get("/api/car/:carName", async (req, res) => {
  const carz = Car.findOne({ carName: req.params.carName });
  res.send(carz);
});

app.post("/api/addCar", async (req, res) => {
  const { id, carName, year, briefDescription, imageID, carSpecs, carFacts } =
    req.body;
  let car = new Car({
    id,
    carName,
    year,
    briefDescription,
    imageID,
    carSpecs,
    carFacts,
  });
  try {
    car = await car.save();
    res.send("The ${carName} added");
  } catch (error) {
    res.status(500).send(error.message);
    console.log("error is ${error.message}");
  }
});

app.put("/api/car/:carName/updatedCarSpec", async (req, res) => {
  try {
    const carName = req.params.carName;
    const updates = req.body.newUpdate;
    const updatedCarSpec = await Car.findOneAndUpdate(
      { carName: carName },
      { $push: { carSpecs: updates } }
    );

    const val = await updatedCarSpec.save();
    res.json(val);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

app.put("/api/car/:carName/updatedCarFact", async (req, res) => {
  try {
    const carName = req.params.carName;
    const updates = req.body.newUpdate;
    const updatedCarFact = await Car.findOneAndUpdate(
      { carName: carName },
      { $push: { carFacts: updates } }
    );
    const val = await updatedCarFact.save();
    res.json(val);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});
app.listen(3001);
