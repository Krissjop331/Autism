const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();
a
const UserController = require("../controllers/Users/UserController.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const middlewareSingle = require('../middleware/imageMiddleware.js');
const middlewareImage = middlewareSingle('users', false);

router.get('/', uploads.none(), UserController.getAll);
router.get('/:id', uploads.none(), UserController.getId);
router.put('/update/', authMiddleware, middlewareImage, UserController.update);
router.put('/update/admin/:id', authMiddleware, checkRolesMiddleware(["admin"]), middlewareImage, UserController.updateAdmin);
router.delete('/delete/:id', checkRolesMiddleware(["admin"]), uploads.none(), UserController.delete);
// router.put('/add_likes/:id', uploads.none(), UserController.addLike)
// router.put('/remove_likes/:id', uploads.none(), UserController.removeLike)
// router.put('/add_dislikes/:id', uploads.none(), UserController.addDislike)
// router.put('/remove_dislikes/:id', uploads.none(), UserController.removeDislike)



module.exports = router;