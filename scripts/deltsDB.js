const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection of exercises and inserts the exercises below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pro3"
);

const DeltsSeed = [
    {
        name: "Barbell Military Press",
        rating: 9.3
    },
    {
        name: "Seated Dumbbell Press",
        rating: 9.1
    },
    {
        name: "Front Raise",
        rating: 8.7
    },
    {
        name: "Dumbbell Side Raise",
        rating: 9.1
    },
    {
        name: "Cable Side Raise",
        rating: 8.9
    },
    {
        name: "Barbell Upright Row",
        rating: 8.6
    },
    {
        name: "Reverse Fly",
        rating: 8.9
    },
    {
        name: "Face Pull",
        rating: 8.8
    },
];

db.Delts
  .remove({})
  .then(() => db.Delts.collection.insertMany(DeltsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });