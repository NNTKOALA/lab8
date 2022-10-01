const mongoose = require("mongoose")

var StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  image: String
})

var studentModel = mongoose.model("student", StudentSchema, "student")

module.exports = studentModel