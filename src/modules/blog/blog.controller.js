const { BlogModel, blogValidate } = require("./blog.model");

const getAllBlogs = async (req, res) => {
  try {
    const { category } = req.query;

    let filterByCategory = {};

    if (category) {
      // will depend on query param will be like "tech,health" to be ["tech", "health"]
      const categoriesArray = category.split(',');

      filterByCategory = { category: { $in: categoriesArray } };
      console.log('categoriesArray', categoriesArray, filterByCategory);
    }
    const result = await BlogModel.find(filterByCategory);

    res.send(result)
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Server error' });
  }
}

const createBlog = async (req, res) => {
  try {
    const { title, content, category, owner } = req.body
    const validationResult = await blogValidate(req.body);

    if (validationResult) return res.status(400).send(validationResult.details[0].message)


    const result = await BlogModel.create({
      title,
      content,
      category,
      owner
    })

    res.status(200).send(result)
  } catch (error) {
    console.error('console error', error);

    return res.status(500).json({ message: 'Server error' });
  }
}

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, category } = req.body

    const validationResult = await blogValidate(req.body);
    if (validationResult) return res.status(400).send(validationResult.details[0].message)

    const blog = await BlogModel.findById(id)

    if (!blog) {
      return res.status(404).json({ message: 'blog not found' });
    }

    blog.title = title
    blog.content = content
    blog.category = category

    const result = await blog.save();

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Server error' });
  }
}

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params

    const blog = await BlogModel.findByIdAndDelete(id);

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
  createBlog,
  updateBlog,
  deleteBlog,
}
