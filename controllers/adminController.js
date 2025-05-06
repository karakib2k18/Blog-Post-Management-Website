const User = require('../models/User');
const Post = require('../models/Post');

// Admin Panel Home (view paginated users and posts)
exports.getAdminPanel = async (req, res) => {
  try {
    // Posts pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Users pagination
    const userPage = parseInt(req.query.userPage) || 1;
    const userLimit = parseInt(req.query.userLimit) || 10;

    const totalUsers = await User.countDocuments();
    const totalPosts = await Post.countDocuments();

    const users = await User.find()
      .skip((userPage - 1) * userLimit)
      .limit(userLimit);

    const posts = await Post.find()
      .populate('createdBy', 'username')
      .skip((page - 1) * limit)
      .limit(limit);

    const userPages = Math.ceil(totalUsers / userLimit);
    const totalPages = Math.ceil(totalPosts / limit);

    res.render('admin/panel', {
      users,
      posts,
      currentPage: page,
      totalPages,
      limit,
      userPage,
      userPages,
      userLimit
    });
  } catch (err) {
    console.error(err);
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
