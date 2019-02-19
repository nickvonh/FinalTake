const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection of exercises and inserts the exercises below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pro3"
);

const LegsSeed = [
    {
        name: "Barbell Back Squat",
        rating: 9.4
    },
    {
        name: "Leg Press",
        rating: 8.8
    },
    {
        name: "Barbell Deadlift",
        rating: 9.4
    },
    {
        name: "Walking Lunge",
        rating: 9.2
    },
    {
        name: "Barbell Front Squat",
        rating: 8.9
    },
    {
        name: "Hack Squat",
        rating: 8.8
    },
    {
        name: "Seated Calf Raise",
        rating: 9
    },
    {
        name: "Standing Calf Raise",
        rating: 9
    }
];

db.Legs
  .remove({})
  .then(() => db.Legs.collection.insertMany(LegsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });