require('dotenv').config();
const express = require('express');
const blogsRouter = require('./modules/blog/blog.router');
const authRouter = require('./modules/auth/auth.router');
const morgan = require('morgan');
const { connectDB } = require('./config/database.config');
const port = process.env.PORT || 5000

// conect to db
connectDB()

//for transfomr body to json
const app = express()
app.use(express.json());


//custom middleware 
app.use(function (req, res, next) {
  next()
})
app.get('env') === 'development' && app.use(morgan('tiny'))

app.use('/api/blogs', blogsRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
  console.log('the server running now on... ', port);
})