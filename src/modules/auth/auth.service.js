

const JWT = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const encryptPassword = async (plainPassword, saltRounds) => {
  try {
    const saltResult = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(plainPassword, saltResult);

    console.log('hashedPass--', hashedPass);

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
}