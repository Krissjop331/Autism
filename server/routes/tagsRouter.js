
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const TagsController = require('../controllers/Forum/TagsController.js');

// TAGS
router.get('/', uploads.none(), TagsController.getAll);
router.get('/:id', uploads.none(), TagsController.getOne);
router.post('/create', checkRolesMiddleware(["admin"]), uploads.none(), TagsController.create);
router.put('/update/:id', checkRolesMiddleware(["admin"]), uploads.none(), TagsController.update);
router.delete('/delete/:id', checkRolesMiddleware(["admin"]), uploads.none(), TagsController.delete);


module.exports = router;