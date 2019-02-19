const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection of exercises and inserts the exercises below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pro3"
);

const BackSeed = [
    {
        name: "T-Bar Row",
        rating: 9.5
    },
    {
        name: "Barbell Row",
        rating: 9.2
    },
    {
        name: "Pull Up",
        rating: 9
    },
    {
        name: "Dumbbell Row",
        rating: 9
    },
    {
        name: "Lat Pulldown",
        rating: 8.9
    },
    {
        name: "Seated Cable Row",
        rating: 8.9
    }
];

db.Back
  .remove({})
  .then(() => db.Back.collection.insertMany(BackSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });