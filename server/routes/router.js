const express = require('express');
const router = express.Router();

const config = require('../config/config.json');
const userRouter = require('./userRouter.js');
const roleRouter = require('./roleRouter.js');
const authRouter = require('./authRouter.js');
const postsRouter = require('./postsRouter.js');
const forumRouter = require('./forumRouter.js');
const resourcesRouter = require('./resourcesRouter.js');

router.use(`/${config.globalPrefix}/users`, userRouter);
router.use(`/${config.globalPrefix}/roles`, roleRouter);
router.use(`/${config.globalPrefix}/`, authRouter);
router.use(`/${config.globalPrefix}/forum`, forumRouter);
router.use(`/${config.globalPrefix}/posts`, postsRouter);
router.use(`/${config.globalPrefix}/resources`, resourcesRouter);

module.exports = router;