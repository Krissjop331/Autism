
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();
const authMiddleware = require("../middleware/authMiddleware.js");
const ForumController = require('../controllers/Forum/ForumController.js');

router.get('/featured', authMiddleware, uploads.none(), ForumController.getFeatured);
router.post('/featured/add/', authMiddleware, uploads.none(), ForumController.addFeatured);
router.delete('/featured/remove/', authMiddleware, uploads.none(), ForumController.removeFeatured);

module.exports = router;