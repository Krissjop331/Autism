
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const RoleController = require('../controllers/RoleController.js');
// const {authMiddleware} = require("../middleware/index.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.get('/', authMiddleware, checkRolesMiddleware(["admin"]), uploads.none(), RoleController.getAll);
router.get('/:id', authMiddleware, checkRolesMiddleware(["admin"]), uploads.none(), RoleController.getOne);
router.post('/create', authMiddleware, checkRolesMiddleware(["admin"]), uploads.none(), RoleController.create);
router.put('/:id', authMiddleware, checkRolesMiddleware(["admin"]), uploads.none(), RoleController.update);
router.delete('/:id', authMiddleware, checkRolesMiddleware(["admin"]), uploads.none(), RoleController.delete);

module.exports = router;