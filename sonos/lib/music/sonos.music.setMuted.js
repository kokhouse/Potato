const sendCommand = require('../sonos.sendCommand.js');

module.exports = function setMuted(params){
    return sendCommand('setMuted', params, [params.muted])
        .then((muted) => {muted});
};