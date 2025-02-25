const express = require('express');
const { getAllBlogs, createBlog, updateBlog, deleteBlog } = require('./blog.controller');
const verifyToken = require('../../middlewares/auth.Middleware');

const blogsRouter = express.Router()

blogsRouter.get('/', getAllBlogs)
blogsRouter.post('/', verifyToken, createBlog)
blogsRouter.put('/:id', verifyToken, updateBlog)
blogsRouter.delete('/:id', verifyToken, deleteBlog)

module.exports = blogsRouter