const sendCommand = require('../sonos.sendCommand.js');

module.exports = function playPlaylist(params){
    return sendCommand('play', params, [params.identifier]);
};