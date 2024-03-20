
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const ResourcesController = require('../controllers/Resources/ResourcesController.js');




module.exports = router;