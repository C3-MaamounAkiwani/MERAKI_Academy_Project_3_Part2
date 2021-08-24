const mongoose = require("mongoose");

const comment = new mongoose.Schema({
    comment: { type: String },
    commenter: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});


module.exports = mongoose.model("comment", comment);