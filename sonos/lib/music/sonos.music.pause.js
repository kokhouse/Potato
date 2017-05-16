const sendCommand = require('../sonos.sendCommand.js');

module.exports = function pause(params){
    return sendCommand('pause', params, []);
};