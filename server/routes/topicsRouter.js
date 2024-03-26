
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const TopicsController = require('../controllers/Forum/TopicsController.js');

const middlewareSingle = require('../middleware/fileResourcesMiddleware.js');
const middlewareImage = middlewareSingle('forum', false);

// TOPICS
router.get('/', uploads.none(), TopicsController.getAll);
router.get('/:id', uploads.none(), TopicsController.getOne);
router.post('/create', authMiddleware, uploads.none(), TopicsController.create);
router.put('/update/:id', authMiddleware, uploads.none(), TopicsController.update);
router.delete('/delete/:id', authMiddleware, uploads.none(), TopicsController.delete);

// COMMENT
// :id - topics_id
router.get('/:id/comments/', uploads.none(), TopicsController.getAllComment);
router.get('/:id/comments/:comment_id', uploads.none(), TopicsController.getOneComment);
router.post('/:id/comments/create/', authMiddleware, middlewareImage, TopicsController.createComment);
router.delete('/:id/comments/delete/:comment_id', authMiddleware , checkRolesMiddleware(["admin"]), TopicsController.deleteComment);

module.exports = router;