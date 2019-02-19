const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeltsSchema = new Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true }
});

const Delts = mongoose.model("Delts", DeltsSchema);

module.exports = Delts;