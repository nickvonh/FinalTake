const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection of exercises and inserts the exercises below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pro3"
);

const ChestSeed = [
    {
        name: "Barbell Bench Press",
        rating: 9
    },
    {
        name: "Dumbbell Bench Press",
        rating: 9.2
    },
    {
        name: "Incline Bench Press",
        rating: 8.9
    },
    {
        name: "Incline Dumbbell Press",
        rating: 9.1
    },
    {
        name: "Chest Dips",
        rating: 8.8
    },
    {
        name: "Dumbbell Flyes",
        rating: 9.1
    },
    {
        name: "Incline Cable Fly",
        rating: 9
    }
];

db.Chest
  .remove({})
  .then(() => db.Chest.collection.insertMany(ChestSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
