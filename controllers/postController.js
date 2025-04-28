const Post = require('../models/Post');

// List all posts (with optional search)
exports.listPosts = async (req, res) => {
  try {
    const search = req.query.search;
    let posts;

    if (search) {
      posts = await Post.find({
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { tags: { $regex: search, $options: 'i' } }
        ]
      }).populate('createdBy', 'username');
    } else {
      posts = await Post.find().populate('createdBy', 'username');
    }

    res.render('posts/index', { posts, search });
  } catch (err) {
    res.status(500).send('Error loading posts');
  }
};


// Show single post
exports.showPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('createdBy', 'username');
    if (!post) {
      req.flash('error', 'Post not found');
      return res.redirect('/posts');
    }
    res.render('posts/show', { post });
  } catch (err) {
    res.status(500).send('Error loading post');
  }
};

// Show create new post form
exports.getNewPost = (req, res) => {
  res.render('posts/new');
};

const { postSchema } = require('../middleware/validators');

// Create Post
exports.createPost = async (req, res) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    req.flash('error', error.details[0].message);
    return res.redirect('/posts/new');
  }

  try {
    const { title, content, tags } = req.body;
    const tagArray = tags.split(',').map(tag => tag.trim());
    const newPost = new Post({
      title,
      content,
      tags: tagArray,
      createdBy: req.user._id
    });
    await newPost.save();
    req.flash('success', 'Post created successfully');
    res.redirect('/posts');
  } catch (err) {
    res.status(500).send('Error creating post');
  }
};

// Show edit post form
exports.getEditPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      req.flash('error', 'Post not found');
      return res.redirect('/posts');
    }
    res.render('posts/edit', { post });
  } catch (err) {
    res.status(500).send('Error loading edit form');
  }
};
// Update Post
exports.updatePost = async (req, res) => {
    const { error } = postSchema.validate(req.body);
    if (error) {
      req.flash('error', error.details[0].message);
      return res.redirect(`/posts/${req.params.id}/edit`);
    }
  
    try {
      const { title, content, tags } = req.body;
      const tagArray = tags.split(',').map(tag => tag.trim());
  
      const post = await Post.findById(req.params.id);
      if (!post) {
        req.flash('error', 'Post not found');
        return res.redirect('/posts');
      }
  
      post.title = title;
      post.content = content;
      post.tags = tagArray;
      await post.save();
  
      req.flash('success', 'Post updated successfully');
      res.redirect(`/posts/${post._id}`);
    } catch (err) {
      res.status(500).send('Error updating post');
    }
  };
  

// Delete post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    req.flash('success', 'Post deleted successfully');
    res.redirect('/posts');
  } catch (err) {
    res.status(500).send('Error deleting post');
  }
};
