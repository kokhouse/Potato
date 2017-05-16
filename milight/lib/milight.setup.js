var milight = require('node-milight-promise');
var Promise = require('bluebird');
var init = require('./milight.init.js');

module.exports = function() {
    return milight.discoverBridges()
        .then((bridges) => {

            // foreach bridge, we create a device bridge
            return Promise.map(bridges, function(bridge) {
                return gladys.device.create({
                    device: {
                        name: 'Milight bridge',
                        protocol: 'wifi',
                        service: 'milight',
                        identifier: bridge.ip
                    },
                    types: []
                });
            });
        })
        .then(() => {

            // we init the bridge cache
            return init();
        });
};