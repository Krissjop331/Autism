const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

// const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const UserController = require("../controllers/UserController.js");
// const UploadImage = require('../controllers/UploadImage.js');

router.get('/', uploads.none(), UserController.getUsers);
// router.get('/:id', uploads.none(), UserController.getUser);
// router.put('/update/:id', uploads.none(), UserController.update);
// router.delete('/delete/:id', uploads.none(), UserController.delete);
// router.create('/createParents', uploads.none(), UserController.createParents);
// router.create('/createDoctors', uploads.none(), UserController.createDoctors);

// router.post('/', middlewareImage.single("image"), UploadImage.uploadImage);

module.exports = router;