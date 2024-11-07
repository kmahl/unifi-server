const { createAxiosInstance } = require('../utils/axios');
const { successResponse, errorResponse } = require('../utils/responseConstructor');
const logger = require('../utils/logger');
const unifiController = require('../services/unifi');

const info = async (req, res) => {
  try {

    const mockedInfo = {
      name: 'mockedName',
      site: 'default',
      logoUrl: 'https://img.freepik.com/vector-gratis/gradiente-ilustracion-pajaro-colorido_343694-1741.jpg?t=st=1730941154~exp=1730944754~hmac=d15a77cf54681a3a096484d52cad20a20e0979d48caee94f206a0b4ab5b5ef20&w=740',
      form: [],
      staticFields: ["email", "name"]
    }


    return successResponse(res, 201, 'info', 'User registered successfully', mockedInfo);

  } catch (err) {
    return errorResponse(err, res, 500, 'info', 'An Error has occurred. Please try again.')

  }
};

module.exports = { info }