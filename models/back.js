const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BackSchema = new Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true }
});

const Back = mongoose.model("Back", BackSchema);

module.exports = Back;