require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const path = require('path');

// Initialize app
const app = express();

// Passport Config
require('./config/passportConfig');

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// View engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true })); // To handle form data
app.use(express.static(path.join(__dirname, 'public'))); // For serving static files like CSS

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Flash and user data middleware
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.user = req.user;
  next();
});

// Routes
app.use('/', require('./routes/authRoutes'));
app.use('/posts', require('./routes/postRoutes'));
app.use('/admin', require('./routes/adminRoutes'));
// app.use('/admin', require('./routes/adminRoutes'));

// Home redirect (default to /posts)
app.get('/', (req, res) => {
  res.redirect('/posts');
});

// 404 Error page
app.use((req, res) => {
  res.status(404).render('error', { error: 'Page not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
