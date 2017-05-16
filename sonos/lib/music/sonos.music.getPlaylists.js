const sendCommand = require('../sonos.sendCommand.js');

module.exports = function getPlaylists(params){
    
    var options = {
        start: params.take || 0, 
        total: params.skip || 100
    };

    return sendCommand('getMusicLibrary', params, ['sonos_playlists', options])
        .then((result) => result.items);
};