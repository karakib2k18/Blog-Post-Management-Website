const Joi = require('joi');

// Registration Validation Schema
exports.registerSchema = Joi.object({
  username: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.pattern.base': 'Username must contain only alphabets (A-Z, a-z) without spaces.',
      'string.empty': 'Username is required.'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters long.',
      'string.empty': 'Password is required.'
    })
});

// Login Validation Schema
exports.loginSchema = Joi.object({
  username: Joi.string()
    .required()
    .messages({
      'string.empty': 'Username is required.'
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.empty': 'Password is required.'
    })
});

// Blog Post Validation Schema
exports.postSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      'string.empty': 'Title is required.'
    }),
  content: Joi.string()
    .required()
    .messages({
      'string.empty': 'Content is required.'
    }),
  tags: Joi.string().allow('')
});
