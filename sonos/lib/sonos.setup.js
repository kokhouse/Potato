var sonos = require('sonos');
var Promise = require('bluebird');
var init = require('./sonos.init.js');

module.exports = function setup(){
    
    sonos.search({}, function (device, model) {
    
        var newDevice = {
            device: {
                name: `Sonos ${model}`,
                protocol: `wifi`,
                service: `sonos`,
                identifier: `${device.host}:${device.port}`
            },
            types: [{
                name: 'Music',
                type: 'music',
                identifier: 'music',
                sensor: false,
                min: 0,
                max: 0
            }]
        };

        gladys.device.create(newDevice)
            .then(() => init());
    });

    return Promise.resolve();
};