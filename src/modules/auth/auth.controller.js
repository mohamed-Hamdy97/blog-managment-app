const { userValidate, User } = require("../user/user.model");
const { encryptPassword, comparePasswords } = require("./auth.service");


const login = async (req, res) => {
  const { name, email, password } = req.body

  const validationResult = await userValidate({ name, email, password })

  if (validationResult) return res.status(400).send(validationResult.details[0].message)

  try {
    const comparePassResult = await comparePasswords('$2b$10$bSLSesCxdMPf3dhkQAKSv.iX7.iRBKOa19/Gj3SusSg2487HP30Wu', password)

  } catch (error) {
    console.log(error)

  }
}

const signup = async (req, res) => {
  const { name, email, password } = req.body

  const validationResult = await userValidate({ name, email, password })
  if (validationResult) return res.status(400).send(validationResult.details[0].message)

  //search on the user mail first if found return 400 --> user already exist
  const searchResult = await User.findOne({ email })
  if (searchResult) return res.status(400).send('user already registered')

  //then create new user in db , if done return user if nt return error
  try {
    //hashpassword first 
    const hashedPass = await encryptPassword(password, 10)

    const newUser = new User({ name, email, password: hashedPass });
    const saveUserResult = await newUser.save();

    return res.status(200).send({ email: saveUserResult.email, name: saveUserResult.name, _id: saveUserResult._id })
  } catch (error) {
    console.log(error)
    return res.status(400).send('something went wrong')
  }
}

module.exports = {
  login,
  signup,
}
