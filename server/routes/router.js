const express = require('express');
const router = express.Router();

const config = require('../config/config.json');
const userRouter = require('./userRouter.js');
const roleRouter = require('./roleRouter.js');
const authRouter = require('./authRouter.js');


router.use(`/${config.globalPrefix}/users`, userRouter);
router.use(`/${config.globalPrefix}/roles`, roleRouter);
router.use(`/${config.globalPrefix}/`, authRouter);

module.exports = router;