require('dotenv').config();
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log('the server running now on ', process.env.PORT);
})