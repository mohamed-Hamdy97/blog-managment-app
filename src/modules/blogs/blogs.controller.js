
const getBlog = async (req, res) => {
  console.log('getBlog ');
}

const getAllBlogs = async (req, res) => {
  console.log('get blog');
  res.send('getAllBlogs')
}

const createBlog = async (req, res) => {
  console.log('create blog');
  res.send('createBlog')
}

const updateBlog = async (req, res) => {
  console.log('updateBlog...');
  res.send('updateBlog')
}

const deleteBlog = async (req, res) => {
  console.log('deleteBlog');
  res.send('deleteBlog')
}

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
}
