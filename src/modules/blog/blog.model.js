
const { Schema, model, default: mongoose } = require("mongoose");
const Joi = require('joi');
const { User } = require("../user/user.model");

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

const blogValidate = async (blog) => {
  const joiScheme = Joi.object({
    title: Joi.string().max(100).min(7).required(),
    content: Joi.string().max(100).min(10).required(),
    category: Joi.array().items(Joi.string().valid('it', 'business', 'marketing')).required(),
    owner: Joi.string().required(),
    //this i added just for learning and applying on validation types 
    comments: Joi.array().items(Joi.object({
      body: Joi.string().min(3).max(200),
      date: Joi.date().iso()
    })),
    date: Joi.date().iso(),
    meta: Joi.object({
      votes: Joi.number().integer().min(0),
      favs: Joi.number().integer().min(0),
    }),

  })

  try {
    const error = await Joi.assert(blog, joiScheme);

    return error;
  } catch (error) {
    return error
  }
}


module.exports = {
  BlogModel,
  blogValidate
};

