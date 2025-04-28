const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { isLoggedIn, isOwner } = require('../middleware/authMiddleware');

// View all posts
router.get('/', postController.listPosts);

// Create new post
router.get('/new', isLoggedIn, postController.getNewPost);
router.post('/', isLoggedIn, postController.createPost);

// View single post
router.get('/:id', postController.showPost);

// Edit post
router.get('/:id/edit', isLoggedIn, isOwner, postController.getEditPost);
router.post('/:id', isLoggedIn, isOwner, postController.updatePost);

// Delete post
router.get('/:id/delete', isLoggedIn, isOwner, postController.deletePost);

module.exports = router;
