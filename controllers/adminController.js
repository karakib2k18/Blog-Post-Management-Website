const User = require('../models/User');
const Post = require('../models/Post');

// Admin Panel Home (view users and posts)
exports.getAdminPanel = async (req, res) => {
  try {
    const users = await User.find();
    const posts = await Post.find().populate('createdBy', 'username');
    res.render('admin/panel', { users, posts });
  } catch (err) {
    res.status(500).send('Error loading admin panel');
  }
};

// Delete any post
exports.deleteAnyPost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    req.flash('success', 'Post deleted successfully.');
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send('Error deleting post');
  }
};
