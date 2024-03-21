const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

// const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const UserController = require("../controllers/Users/UserController.js");
const ParentUsersController = require("../controllers/Users/ParentUsersController.js");
const DoctorUsersController = require("../controllers/Users/DoctorUsersController.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const middlewareSingle = require('../middleware/imageMiddleware');
// Здесь указывается поле в какую папку сохранять изображение
const middlewareImage = middlewareSingle('user');
// const UploadImage = require('../controllers/UploadImage.js');

router.get('/', authMiddleware, uploads.none(), UserController.getAll);
router.get('/:id', authMiddleware, uploads.none(), UserController.getId);
router.put('/update/:id', authMiddleware, middlewareImage, UserController.update);
router.put('/update/admin/:id', authMiddleware, checkRolesMiddleware(["admin"]), middlewareImage, UserController.updateAdmin);
router.delete('/delete/:id', uploads.none(), UserController.delete);
router.put('/add_likes/:id', uploads.none(), UserController.addLike)
router.put('/remove_likes/:id', uploads.none(), UserController.removeLike)
router.put('/add_dislikes/:id', uploads.none(), UserController.addDislike)
router.put('/remove_dislikes/:id', uploads.none(), UserController.removeDislike)



module.exports = router;