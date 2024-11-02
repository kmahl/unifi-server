const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'ok' }));

router.post('/authorize', userController.registerUser);

module.exports = router;
