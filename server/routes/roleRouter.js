
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer();
const RoleController = require('../controllers/RoleController.js');

router.get('/', uploads.none(), RoleController.getAll);
router.get('/:id', uploads.none(), RoleController.getOne);
router.post('/create', uploads.none(), RoleController.create);
router.put('/:id', uploads.none(), RoleController.update);
router.delete('/:id', uploads.none(), RoleController.delete);

module.exports = router;