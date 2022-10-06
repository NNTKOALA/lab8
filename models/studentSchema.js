const mongoose = require("mongoose")

var studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  image: String, 
  phone: Number
  //Note: các thuộc tính "name", "email" ,.. là các cột trong bảng
})

var studentModel = mongoose.model("sinh vien", studentSchema, "student")
//Note: "student" là tên của bảng (collection)

module.exports = studentModel