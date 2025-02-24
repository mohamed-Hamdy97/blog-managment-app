const { userValidate } = require("../user/user.model");


const login = async (req, res) => {
  const { name, email, password } = req.body

  const validationResult = await userValidate({ name, email, password })

  if (validationResult) return res.status(400).send(validationResult.details[0].message)

  res.send('login')
}

const signup = async (req, res) => {
  const { name, email, password } = req.body

  const validationResult = await userValidate({ name, email, password })

  if (validationResult) return res.status(400).send(validationResult.details[0].message)

  res.send('signup')
}

module.exports = {
  login,
  signup,
}
