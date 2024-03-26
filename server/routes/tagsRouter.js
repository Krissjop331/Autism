
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const TagsController = require('../controllers/Forum/TagsController.js');

// TAGS
router.get('/', uploads.none(), TagsController.getAll);
router.get('/:id', TagsController.getOne);
router.post('/create', TagsController.create);
router.put('/update/:id', TagsController.update);
router.delete('/delete/:id', TagsController.delete);


module.exports = router;