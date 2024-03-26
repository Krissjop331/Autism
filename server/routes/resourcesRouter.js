
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();

const checkRolesMiddleware = require("../middleware/checkRolesMiddleware.js");
const ResourcesController = require('../controllers/Resources/ResourcesController.js');
const middlewareSingle = require('../middleware/fileResourcesMiddleware.js');
const middlewareImage = middlewareSingle('', false);

router.get('/', uploads.none(), ResourcesController.getAll);
router.get('/:id', uploads.none(), ResourcesController.getId);
router.post('/create', checkRolesMiddleware(["admin"]), middlewareImage, ResourcesController.create);
router.put('/update/:id', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.update);
router.delete('/delete/:id', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.delete);

router.get('/modules',uploads.none(), ResourcesController.getAllModules);
router.get('/module/:id', uploads.none(), ResourcesController.getModule);
router.post('/module/create/', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.createModule);
router.put('/module/update/:id', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.updateModule);
router.delete('/module/delete/:id', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.deleteModule);


router.get('/types', uploads.none(), ResourcesController.getAllTypes);
router.get('/type/:id', uploads.none(), ResourcesController.getType);
router.post('/type/create/', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.createType);
router.put('/type/update/:id', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.updateType);
router.delete('/type/delete/:id', checkRolesMiddleware(["admin"]), uploads.none(), ResourcesController.deleteType);

module.exports = router;