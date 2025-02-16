
const mongoose = require("mongoose");

//blog scheme
const userScheme = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

//blogs model
const User = mongoose.model('User', userScheme);

module.exports = {
  User
}
