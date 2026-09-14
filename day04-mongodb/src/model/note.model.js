const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    name : String,
    city : String,
})

const noteModel = mongoose.model("note",noteSchema);

module.exports = noteModel;