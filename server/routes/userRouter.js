const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const UserController = require("../controllers/UserController.js");
const UploadImage = require('../controllers/UploadImage.js');

router.get('/', uploads.none(), UserController.getUsers);
router.post('/', middlewareImage.single("image"), UploadImage.uploadImage);

module.exports = router;