const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection of exercises and inserts the exercises below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pro3"
);

const ArmsSeed = [
    {
        body_part: "Bicep",
        name: "Barbell Curl",
        rating: 9.3
    },
    {
        body_part: "Bicep",
        name: "Hammer Curl",
        rating: 9.1
    },
    {
        body_part: "Biceps",
        name: "Dumbbell Curl",
        rating: 8.9
    },
    {
        body_part: "Biceps",
        name: "Preacher Curl",
        rating: 8.8
    },
    {
        body_part: "Triceps",
        name: "Dips",
        rating: 9.4
    },
    {
        body_part: "Triceps",
        name: "Close Grip Barbell Bench Press",
        rating: 9.1
    },
    {
        body_part: "Triceps",
        name: "Dumbbell Tricep Extension",
        rating: 9
    },
    {
        body_part: "Triceps",
        name: "Cable Push Down",
        rating: 8.3
    }
];

db.Arms
  .remove({})
  .then(() => db.Arms.collection.insertMany(ArmsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });