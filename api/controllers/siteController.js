const { createAxiosInstance } = require('../utils/axios');
const { successResponse, errorResponse } = require('../utils/responseConstructor');
const logger = require('../utils/logger');
const unifiController = require('../services/unifi');

const info = async (req, res) => {
  try {

    const mockedInfo = {
      name: 'mockedName',
      title: 'Bienvenido a',
      subtitle: 'Legoland',
      site: 'default',
      logoUrl: 'https://cdn.worldvectorlogo.com/logos/lego-2.svg',
      backgroundColor: '#e3000b',
      textColor: '#fff',
      
      button: {
        textColor: '#fff',
        backgroundColor: '#000'
      },
      form: [
        {
          name: "coso",
          label: "opcion dinamica loca",
          type: "input",
          required: true
        },
        {
          name: "coso1",
          label: "opcion dinamica loca",
          type: "input",
          required: false
        },
        {
          name: "coso2",
          label: "opcion dinamica loca",
          type: "input",
          required: false
        },
        {
          name: "coso3",
          label: "opcion dinamica loca",
          type: "input",
          required: false
        },
        {
          name: "coso4",
          label: "opcion dinamica loca",
          type: "input",
          required: false
        },
        {
          name: "selectorloco",
          label: "prueba de selector",
          type: "selector",
          options: ["primero", "segundo", "etc"],
          required: false
        },

      ],
      staticFields: ["email", "name"],
      legal: {
        tyc: 'Aquí va una descripción larga para los términos y condiciones. Puede hacer scroll si es necesario.'
      }
    }


    return successResponse(res, 201, 'info', 'User registered successfully', mockedInfo);

  } catch (err) {
    return errorResponse(err, res, 500, 'info', 'An Error has occurred. Please try again.')

  }
};

module.exports = { info }