const express = require('express');
const { authorize } = require('../controllers/unifiController');
const { commandValidator} = require('../middlewares/commandValidator');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'ok' }));

router.post('/authorize', commandValidator, authorize);

module.exports = router;
