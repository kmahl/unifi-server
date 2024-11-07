const { Router } = require('express');
const unifiRouter = require("./unifiRoutes");
const userRouter = require("./userRoutes");

const router = Router();

router.use('/unifi', unifiRouter);
router.use('/site', userRouter);
router.use('/user', userRouter);

module.exports = router;