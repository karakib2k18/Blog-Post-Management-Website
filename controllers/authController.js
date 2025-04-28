const User = require('../models/User');
const passport = require('passport');
const { registerSchema, loginSchema } = require('../middleware/validators');

// Show Registration Form
exports.getRegister = (req, res) => {
  res.render('auth/register');
};

// Handle Registration
exports.postRegister = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    req.flash('error', error.details[0].message);
    return res.redirect('/register');
  }

  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    req.flash('success', 'Registered successfully! Please log in.');
    res.redirect('/login');
  } catch (err) {
    req.flash('error', 'Username already exists.');
    res.redirect('/register');
  }
};

// Show Login Form
exports.getLogin = (req, res) => {
  res.render('auth/login');
};

// Handle Login
exports.postLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    req.flash('error', error.details[0].message);
    return res.redirect('/login');
  }

  passport.authenticate('local', {
    successRedirect: '/posts',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
};

// Handle Logout
exports.logout = (req, res, next) => {
  req.logout(function(err) {
    if (err) return next(err);
  req.flash('success', 'Logged out successfully.');
  res.redirect('/login');
  });
};
