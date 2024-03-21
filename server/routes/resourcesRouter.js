
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const middlewareImage = require("../middleware/uploadImageMiddleware.js");
const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const ResourcesController = require('../controllers/Resources/ResourcesController.js');

router.get('/', uploads.none(), ResourcesController.getAll);
router.get('/:id', uploads.none(), ResourcesController.getId);
router.post('/create', uploads.none(), ResourcesController.create);
router.put('/update/:id', uploads.none(), ResourcesController.update);
router.delete('/delete/:id', uploads.none(), ResourcesController.delete);

router.get('/modules', uploads.none(), ResourcesController.getAllModules);
router.get('/module/:id', uploads.none(), ResourcesController.getModule);
router.post('/module/create/', uploads.none(), ResourcesController.createModule);
router.put('/module/update/:id', uploads.none(), ResourcesController.updateModule);
router.delete('/module/delete/:id', uploads.none(), ResourcesController.deleteModule);


router.get('/types', uploads.none(), ResourcesController.getAllTypes);
router.get('/type/:id', uploads.none(), ResourcesController.getType);
router.post('/type/create/', uploads.none(), ResourcesController.createType);
router.put('/type/update/:id', uploads.none(), ResourcesController.updateType);
router.delete('/type/delete/:id', uploads.none(), ResourcesController.deleteType);

module.exports = router;