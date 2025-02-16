const BlogModel = require("./blog.model");

const getBlogById = async (blogId) => {
  const tag = await BlogModel.findById(blogId)

  return tag
}

module.exports = {
  getBlogById
}