
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
    email: Joi.string().email().required().messages({
      "string.email": "Invalid email format.",
      "any.required": "Email is required."
    }),
    //will use joi complex passwordvalidate for additional validation later 
    password: Joi.string()
      .min(8)
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .required()
      .messages({
        "string.min": "Password must be at least 8 characters long.",
        "string.pattern.base": "Password must contain both letters and numbers."
      }),
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
