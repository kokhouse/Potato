const sendCommand = require('../sonos.sendCommand.js');

module.exports = function previous(params){
    return sendCommand('previous', params, []);
};