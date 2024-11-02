const { errorResponse } = require('../utils/responseConstructor');
const logger = require('../utils/logger');

const commandList = ['authorize-guest', 'unauthorize-guest', 'block-sta', 'unblock-sta']

const isValidCommand = (command) => commandList.includes(command)

exports.commandValidator = (req, res, next) => {
    if (!isValidCommand(req.body.cmd)) {
        logger.error(`Error Data: ${JSON.stringify(req.body.cmd)}`);
        return errorResponse(res, 403, 'Forbbiden.');
    }
    next();
}