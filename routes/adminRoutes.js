const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isLoggedIn } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/adminMiddleware');

// Admin Panel Home
router.get('/', isLoggedIn, isAdmin, adminController.getAdminPanel);

// Delete any post
router.get('/posts/:id/delete', isLoggedIn, isAdmin, adminController.deleteAnyPost);

module.exports = router;
