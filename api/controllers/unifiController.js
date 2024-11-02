const { createAxiosInstance } = require('../utils/axios');
const { successResponse, errorResponse } = require('../utils/responseConstructor');
const logger = require('../utils/logger');
const unifiController = require('../services/unifi');

const authorize = async (req, res) => {
  try {

    const unifiApiClient = createAxiosInstance();
    logger.info('Starting Unifi Login Attempt');
    const loginResponse = await unifiController.login(unifiApiClient);

    // if (config.logAuthDriver) {
    //   await logAuth(req.body);
    // }
    // Se inyectan los headers para autorizar
    unifiApiClient.defaults.headers['X-Csrf-Token'] = loginResponse.headers['x-csrf-token'];


    logger.debug('Starting Unifi Device Authorisation Attempt');
    await unifiController.authorize(unifiApiClient, req);

    // if (config.showConnecting === 'true') {
    //   logger.debug(`Redirecting to ${'./connecting'}`);
    //   res.redirect('./connecting');
    // }

    // if (
    //   config.showConnecting === 'false' &&
    //   config.serverSideRedirect === 'true'
    // ) {
    // sleep 5s
    await new Promise((r) => setTimeout(r, 1000));

    // logger.debug('Starting Unifi Logout Attempt');
    // await unifiController.logout(unifiApiClient);
    // logger.debug(`Redirecting to ${process.env.REDIRECTURL}`);

    return successResponse(res, 201, 'User registered successfully');

  } catch (err) {
    console.log(err)
    res.status(500).json({
      err: {
        message: 'An Error has occurred. Please try again.',
      },
    });
  }
};

module.exports = { authorize }