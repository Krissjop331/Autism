const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const UserController = require("../controllers/UserController.js");
router.get('/', upload.none(), UserController.getUsers);

module.exports = router;