const mongoose = require("mongoose");


const user = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    country: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
});

module.exports = mongoose.model("Users", user);