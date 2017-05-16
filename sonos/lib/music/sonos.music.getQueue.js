const sendCommand = require('../sonos.sendCommand.js');

module.exports = function getQueue(params){

    return sendCommand('getQueue', params, [])
        .then((result) => result.items);
};