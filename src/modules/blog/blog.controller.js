const BlogModel = require("./blog.model");
const { getBlogById } = require("./blog.services");

const getBlog = async (req, res) => {
  console.log('getBlog ');
}

const getAllBlogs = async (req, res) => {
  try {
    const result = await BlogModel.find();
    console.log('result');

    res.send(result)
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Server error' });
  }
}

const createBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body

    const result = await BlogModel.create({
      title,
      content,
      category,
    })

    res.send(result)
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Server error' });
  }
}

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, category } = req.body

    const blog = await BlogModel.findById(id)

    if (!blog) {
      return res.status(404).json({ message: 'blog not found' });
    }

    blog.title = title
    blog.content = content
    blog.category = category

    const result = await blog.save();

    console.log(result);

    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Server error' });
  }
}

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params

    const blog = await BlogModel.findByIdAndDelete(id);
    console.log({ blog });


    if (!blog) {
      return res.status(404).json({ message: 'blog not found' });
    }

    return res.status(200).json({ message: 'blog deleted successfully .. ' })
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: 'server error ' })
  }
}

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
}
