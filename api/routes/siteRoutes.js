const express = require('express');
const { info } = require('../controllers/siteController');
const { commandValidator } = require('../middlewares/commandValidator');

const router = express.Router();

router.get('/info', info);

module.exports = router;
