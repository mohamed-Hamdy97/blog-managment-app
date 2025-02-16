
const mongoose = require("mongoose");

//Blog scheme
const blogScheme = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: [String],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

//Blog model
const BlogModel = mongoose.model('Blog', blogScheme);

module.exports = BlogModel;

