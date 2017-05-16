const sendCommand = require('../sonos.sendCommand.js');

module.exports = function getCurrentTrack(params){
    return sendCommand('currentTrack', params, []);
};