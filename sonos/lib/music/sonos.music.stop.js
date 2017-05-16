const sendCommand = require('../sonos.sendCommand.js');

module.exports = function stop(params){
    return sendCommand('stop', params, []);
};