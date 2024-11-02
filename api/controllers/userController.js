const axios = require('axios');
const bcrypt = require('bcryptjs');
const userService = require('../services/userService');
const logger = require('../utils/logger');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await userService.saveUser({ username, password: hashedPassword });
    logger.info(`User registered: ${username}`);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.fetchExternalData = async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error fetching external data' });
  }
};
