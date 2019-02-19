const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArmsSchema = new Schema({
    body_part: { type: String, required: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true }
});

const Arms = mongoose.model("Arms", ArmsSchema);

module.exports = Arms;

