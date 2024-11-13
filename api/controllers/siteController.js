const { createAxiosInstance } = require('../utils/axios');
const { successResponse, errorResponse } = require('../utils/responseConstructor');
const logger = require('../utils/logger');
const unifiController = require('../services/unifi');

const info = async (req, res) => {
  try {

    const mockedInfo = {
      name: 'mockedName',
      title: 'Bienvenido a',
      description: 'Legoland',
      site: 'default',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg',
      backgroundColor: '#e3000b',
      
      form: [
        {
          name: "coso",
          label: "opcion dinamica loca",
          type: "input",
          required: true
        },
        {
          name: "selectorloco",
          label: "prueba de selector",
          type: "selector",
          options: ["primero", "segundo", "etc"],
          required: false
        },
        {
          name: "pruebaradiobutton",
          label: "prueba radiobutton",
          type: "radiobutton",
          options: ["si", "no"],
          required: true
        }
      ],
      staticFields: ["email", "name"]
    }


    return successResponse(res, 201, 'info', 'User registered successfully', mockedInfo);

  } catch (err) {
    return errorResponse(err, res, 500, 'info', 'An Error has occurred. Please try again.')

  }
};

module.exports = { info }