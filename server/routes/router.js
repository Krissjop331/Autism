const config = require('../config/config.json');
const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.js');

router.use(`/${config.globalPrefix}/users`, userRouter);

module.exports = router;