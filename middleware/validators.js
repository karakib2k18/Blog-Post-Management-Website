const Joi = require('joi');

// Registration validation schema
exports.registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required()
});

// Login validation schema
exports.loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

// Blog Post validation schema
exports.postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  tags: Joi.string().allow('')
});
