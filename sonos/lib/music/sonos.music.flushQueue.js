const sendCommand = require('../sonos.sendCommand.js');

module.exports = function flushQueue(params){
    return sendCommand('flush', params, []);
};