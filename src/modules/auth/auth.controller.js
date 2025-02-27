const _ = require('lodash')
const { User } = require("../user/user.model");
const { userValidate } = require("./auth.service");
const { encryptPassword, comparePasswords, generateToken } = require("./auth.service");


const login = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const validationResult = await userValidate({ name, email, password })
    if (validationResult) return res.status(400).send(validationResult.details[0].message)

    const searchResult = await User.findOne({ email })
    const comparePassResult = await comparePasswords(searchResult.password, password)
    if (!searchResult || !comparePassResult) return res.status(400).send('email or pass is invalid')

    //generate token 
    const token = generateToken({ userId: searchResult._id })

    const response = _.pick(searchResult, ['_id', 'name', 'email'])

    return res.status(200).setHeader("x-auth-token", token).send({ ...response, token })
  } catch (error) {
    console.log(error)
    return res.status(400).send('something went wrong')
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

    //generate token here also after signup logically
    const token = generateToken({ userId: newUser._id })
    res.setHeader("x-auth-token", token);

    const saveUserResult = await newUser.save();

    const pickedUser = _.pick(saveUserResult, ['_id', 'name', 'email'])

    return res.status(200).send({ ...pickedUser, token })
  } catch (error) {
    console.log(error)
    return res.status(400).send('something went wrong')
  }
}

module.exports = {
  login,
  signup,
}
