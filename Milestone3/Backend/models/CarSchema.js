const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    id: String,
    carName: String,
    year: String,
    briefDescription: String,
    imageID: String,
    carSpecs: [String],
    carFacts: [String],
  },
  { collection: "cars" }
);

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
