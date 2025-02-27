

const JWT = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const Joi = require("joi");

const encryptPassword = async (plainPassword, saltRounds) => {
  try {
    const saltResult = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(plainPassword, saltResult);

    return hashedPass
  } catch (error) {
    return Promise.reject();
  }
}

const comparePasswords = async (storedHash, userProvidedPassword) => {

  try {
    const reult = await bcrypt.compare(userProvidedPassword, storedHash)

    return reult
  } catch (error) {
    return Promise.reject();
  }

}

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


const generateToken = (payload) => {
  //generate token 
  const token = JWT.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
  return token
}


module.exports = {
  encryptPassword,
  comparePasswords,
  generateToken,
  userValidate,
}