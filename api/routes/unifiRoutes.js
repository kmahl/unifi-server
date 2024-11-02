const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.fetchExternalData);
router.post('/authorize', userController.registerUser);

module.exports = router;
