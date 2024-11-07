const { Router } = require('express');
const unifiRouter = require("./unifiRoutes");
const userRouter = require("./userRoutes");
const siteRouter = require("./siteRoutes");
const router = Router();

router.use('/unifi', unifiRouter);
router.use('/site', siteRouter);
router.use('/user', userRouter);

module.exports = router;