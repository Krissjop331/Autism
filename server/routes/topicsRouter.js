
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const TopicsController = require('../controllers/Forum/TopicsController.js');

// TOPICS
router.get('/', uploads.none(), TopicsController.getAll);
router.get('/:id', uploads.none(), TopicsController.getOne);
router.post('/create', authMiddleware, uploads.none(), TopicsController.create);
router.put('/update/:id', authMiddleware, uploads.none(), TopicsController.update);
router.delete('/delete/:id', authMiddleware, uploads.none(), TopicsController.delete);

module.exports = router;