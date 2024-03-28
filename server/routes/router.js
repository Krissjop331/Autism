const express = require('express');
const router = express.Router();

const config = require('../config/config.json');
const userRouter = require('./userRouter.js');
const roleRouter = require('./roleRouter.js');
const authRouter = require('./authRouter.js');
const postsRouter = require('./postsRouter.js');
const forumRouter = require('./forumRouter.js');
const topicsRouter = require('./topicsRouter.js');
const tagsRouter = require('./tagsRouter.js');
const resourcesRouter = require('./resourcesRouter.js');
const doctorUserRouter = require('./doctorUserRouter.js');
const parentUserRouter = require('./parentUserRouter.js');
const commentTopicsRouter = require('./commentTopicsRouter.js');
const resourcesTypeRouter = require('./resourcesTypeRouter.js');
const resourcesModuleRouter = require('./resourcesModuleRouter.js');

router.use(`/${config.globalPrefix}/users`, userRouter);
router.use(`/${config.globalPrefix}/doctor_users`, doctorUserRouter);
router.use(`/${config.globalPrefix}/parent_users`, parentUserRouter);
router.use(`/${config.globalPrefix}/roles`, roleRouter);
router.use(`/${config.globalPrefix}/`, authRouter);
router.use(`/${config.globalPrefix}/forum`, forumRouter);
router.use(`/${config.globalPrefix}/tags`, tagsRouter);
router.use(`/${config.globalPrefix}/topics`, topicsRouter);
router.use(`/${config.globalPrefix}/topics/comment`, commentTopicsRouter);
router.use(`/${config.globalPrefix}/posts`, postsRouter);
router.use(`/${config.globalPrefix}/resources`, resourcesRouter);
router.use(`/${config.globalPrefix}/type`, resourcesTypeRouter);
router.use(`/${config.globalPrefix}/module`, resourcesModuleRouter);

module.exports = router;