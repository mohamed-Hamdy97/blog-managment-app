
const Joi = require("joi");
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

const userValidate = async (userdata) => {
  const joiScheme = Joi.object({
    name: Joi.string().max(100).min(7).required(),
    email: Joi.string().max(100).min(10).required(),
    password: Joi.string().max(255).min(7).required(),
  })

  try {
    const error = await Joi.assert(userdata, joiScheme);

    return error;
  } catch (error) {
    return error
  }
}

//blogs model
const User = mongoose.model('User', userScheme);

module.exports = {
  User,
  userValidate
}
