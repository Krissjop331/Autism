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
// router.put('/add_likes/:id', uploads.none(), UserController.addLike)
// router.put('/remove_likes/:id', uploads.none(), UserController.removeLike)
// router.put('/add_dislikes/:id', uploads.none(), UserController.addDislike)
// router.put('/remove_dislikes/:id', uploads.none(), UserController.removeDislike)

router.get('/parents_users/', uploads.none(), ParentUsersController.getAll);
router.get('/parents_users/:id', uploads.none(), ParentUsersController.getId);
router.post('/create_parents_users', uploads.none(), ParentUsersController.create);
router.put('/update_parents_users/:id', uploads.none(), ParentUsersController.update);
router.delete('/delete_parents_users/:id', uploads.none(), ParentUsersController.delete);

router.get('/doctor_users/', uploads.none(), DoctorUsersController.getAll);
router.get('/doctor_users/:id', uploads.none(), DoctorUsersController.getId);
router.post('/create_doctor_users', uploads.none(), DoctorUsersController.create);
router.put('/update_doctor_users/:id', uploads.none(), DoctorUsersController.update);
router.delete('/delete_doctor_users/:id', uploads.none(), DoctorUsersController.delete);

// Создать роут и для загрузки файлов
// router.post('/', middlewareImage.single("image"), UploadImage.uploadImage);

module.exports = router;