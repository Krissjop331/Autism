    const express = require('express');
    const router = express.Router();
    const multer = require('multer');
    const uploads = multer();

    const middlewareImage = require("../middleware/uploadImageMiddleware.js");
    const AuthController = require("../controllers/AuthController.js");
    // const {authMiddleware} = require("../middleware/index.js");
    const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
    const authMiddleware = require("../middleware/authMiddleware.js");


    router.post('/signin', uploads.none(), AuthController.signIn);
    router.post('/signup', middlewareImage.single("image"), AuthController.signUp);
    router.get('/signout', uploads.none(), AuthController.signOut);

    // Подтверждение регистрации пользователя, казывается в параметрах состояние true или false (update user)
    router.put('/confirmed/:id', authMiddleware, checkRolesMiddleware(["admin"]), uploads.none(), AuthController.confirmed);
    // Перезапись токена
    router.get('/refreshtoken', authMiddleware, uploads.none(), AuthController.refreshTokenIfActive);
    // Активен пользователь, указывается в параметрах состояние true или false
    // id берется из токена
    router.put('/isactive/', authMiddleware, uploads.none(), AuthController.isActiveUser);
    // router.put('/isactive/:id', uploads.none(), AuthController.isActiveUser);
    // ИЗменяем роль пользователю. Передается через параметры или body
    router.put('/role_update/:id', authMiddleware, checkRolesMiddleware(["admin"]), uploads.none(), AuthController.userRoleUpdate);

    module.exports = router;