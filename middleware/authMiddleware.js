const Post = require('../models/Post');

// Check if user is logged in
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'Please log in first');
  res.redirect('/login');
};

// Check if current user owns the post
exports.isOwner = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      req.flash('error', 'Post not found');
      return res.redirect('/posts');
    }
    if (post.createdBy.equals(req.user._id)) {
      return next();
    } else {
      req.flash('error', 'You are not authorized to do that');
      return res.redirect('/posts');
    }
  } catch (err) {
    res.status(500).send('Error checking ownership');
  }
};
