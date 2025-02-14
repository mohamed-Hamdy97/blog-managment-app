require('dotenv').config();
const express = require('express');
const blogsRouter = require('./modules/blogs/blogs.router');
const port = process.env.PORT || 5000

const app = express()

// app.use(express.json());

app.use('/api/blogs', blogsRouter)

app.listen(port, () => {
  console.log('the server running now on... ', port);
})