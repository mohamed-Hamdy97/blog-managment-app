const express = require('express');
const { getAllBlogs, createBlog, updateBlog, deleteBlog } = require('./blog.controller');

const blogsRouter = express.Router()

blogsRouter.get('/', getAllBlogs)
blogsRouter.post('/', createBlog)
blogsRouter.put('/:id', updateBlog)
blogsRouter.delete('/:id', deleteBlog)

module.exports = blogsRouter