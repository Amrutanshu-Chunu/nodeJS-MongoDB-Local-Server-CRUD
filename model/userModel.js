
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    name: String,
    email: String,
    age: Number,
    _id: Number
});

module.exports = mongoose.model("test",userSchema);