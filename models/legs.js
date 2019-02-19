const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LegsSchema = new Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true }
});

const Legs = mongoose.model("Legs", LegsSchema);

module.exports = Legs;
