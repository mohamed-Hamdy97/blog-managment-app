

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

module.exports = {
  encryptPassword,
  comparePasswords
}