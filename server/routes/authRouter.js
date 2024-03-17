const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImage.js");
const AuthController = require("../controllers/AuthController.js");


router.get('/signin', uploads.none(), AuthController.signin);
router.get('/signup', uploads.none(), AuthController.signup);
router.get('/signout', uploads.none(), AuthController.signout);

// Подтверждение регистрации пользователя
router.get('/confirmed/:id', uploads.none(), AuthController.confirmed);
// Отклонение регистрации пользователя
router.get('/notconfirmed/:id', uploads.none(), AuthController.notConfirmed);

// Генерация токена
router.get('/generateToken', uploads.none(), AuthController.generateToken);
// Перезапись токена
router.get('/refreshToken', uploads.none(), AuthController.refreshTokenIfActive);

module.exports = router;