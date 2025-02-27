
const { Schema, model, default: mongoose } = require("mongoose");

//Blog scheme
const blogScheme = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  //this is additions documents for more applying on schems queries
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  meta: {
    votes: { type: Number, default: 0 },
    favs: { type: Number, default: 0 },
  }
})

//Blog model
const BlogModel = model('Blog', blogScheme);

module.exports = {
  BlogModel,
};

