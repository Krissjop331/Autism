const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImage.js");
const AuthController = require("../controllers/AuthController.js");


router.get('/signin', uploads.none(), AuthController.signIn);
router.post('/signup', middlewareImage.single("image"), AuthController.signUp);
router.get('/signout', uploads.none(), AuthController.signOut);

// Подтверждение регистрации пользователя, казывается в параметрах состояние true или false (update user)
router.get('/confirmed/:id', uploads.none(), AuthController.confirmed);
// // Генерация токена
// router.get('/generatetoken', uploads.none(), AuthController.generateToken);
// Перезапись токена
router.get('/refreshtoken', uploads.none(), AuthController.refreshTokenIfActive);
// Активен пользователь, указывается в параметрах состояние true или false
router.get('/isactive/:id', uploads.none(), AuthController.isActiveUser);
// ИЗменяем роль пользователю
router.get('/role_update/:id', uploads.none(), AuthController.userRoleUpdate);

module.exports = router;