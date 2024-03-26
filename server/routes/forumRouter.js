
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const ForumController = require('../controllers/Forum/ForumController.js');

router.get('/', ForumController.getAll);
router.get('/:id', ForumController.getOne);
router.post('/create', ForumController.create);
router.put('/update/:id', ForumController.update);
router.delete('/delete/:id', ForumController.delete);

router.post('/featured/add', ForumController.addFeatured);
router.delete('/featured/remove', ForumController.removeFeatured);


module.exports = router;