
const mongoose = require("mongoose");

//blog scheme
const userScheme = new mongoose.Schema({
  name: {
    type: String,
    min: 7,
    max: 100,
    required: true
  },
  email: {
    type: String,
    unique: true,
    min: 10,
    max: 255,
    required: true
  },
  password: {
    type: String,
    min: 7,
    max: 1024,
    required: true
  },
})

//blogs model
const User = mongoose.model('User', userScheme);

module.exports = {
  User,
  userValidate
}
