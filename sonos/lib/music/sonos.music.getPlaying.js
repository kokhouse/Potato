const sendCommand = require('../sonos.sendCommand.js');

module.exports = function getPlaying(params){
    return sendCommand('getCurrentState', params, [])
        .then((state) => {
            if(state === 'playing') return {playing: true};
            else return {playing: false};
        });
};