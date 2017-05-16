const sendCommand = require('../sonos.sendCommand.js');

module.exports = function setVolume(params){
    return sendCommand('setVolume', params, [params.volume])
        .then((volume) => {volume});
};