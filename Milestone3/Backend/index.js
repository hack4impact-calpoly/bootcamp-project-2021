const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
app.use(express.json());
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

app.get("/api/car", async (req, res) => {
  const carz = await Car.find({});
  res.send(carz);
});

app.get("/api/car/:carName", async (req, res) => {
  const carz = Car.findOne({ carName: req.params.carName });
  res.send(carz);
});

app.post("/api/car", async (req, res) => {
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

router.put("/:carName/carSpecs", async (req, res) => {
  const carName = req.params.carName;
  const car = req.body.newCar;
  const carz = await Car.findOne({carName: carName });
  carz.carSpecs.push(car);
});

app.listen(3001);
