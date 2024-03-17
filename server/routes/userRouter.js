const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();
const upload = require("../middleware/upload.js");

const UserController = require("../controllers/UserController.js");
const UploadImage = require('../controllers/UploadImage.js');

router.get('/', uploads.none(), UserController.getUsers);
// router.post('/upload', uploads.single("image"), UploadImage.uploadImage);
router.post('/', upload.single("image"), UploadImage.uploadImage);

module.exports = router;