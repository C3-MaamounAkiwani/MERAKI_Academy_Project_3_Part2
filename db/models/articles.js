const mongoose = require("mongoose");


const articles = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

module.exports = mongoose.model("articles", articles);