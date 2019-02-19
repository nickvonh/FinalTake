const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChestSchema = new Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true }
});

const Chest = mongoose.model("Chest", ChestSchema);

module.exports = Chest;