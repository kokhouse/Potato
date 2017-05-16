const sendCommand = require('../sonos.sendCommand.js');

module.exports = function next(params){
    return sendCommand('next', params, []);
};