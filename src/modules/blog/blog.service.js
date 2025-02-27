const Joi = require('joi');

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
  blogValidate
};
