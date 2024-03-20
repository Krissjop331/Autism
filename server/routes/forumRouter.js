
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const ForumController = require('../controllers/Forum/ForumController.js');




module.exports = router;