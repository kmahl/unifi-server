const logger = require('./logger');


const successResponse = (res, statusCode, serviceName, message, data = {})  => {
  logger.info(`${serviceName} success with statusCode: ${statusCode} and message: ${message}`);
  return res.status(statusCode).json({ success: true, message, data });
};

const errorResponse = (res, statusCode, serviceName, message)  => {
  logger.error(`${serviceName} error with statusCode: ${statusCode} and message: ${message}`);
  return res.status(statusCode).json({ success: false, message });
};

module.exports = {successResponse, errorResponse };