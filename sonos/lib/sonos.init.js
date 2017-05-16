var shared = require('./shared.js');
var Sonos = require('sonos').Sonos

module.exports = function init() {
    return gladys.device.getByService({service: 'sonos'})
      .then((devices) => {

          // reset all instances 
          shared.instances = {};

          // foreach device, create an instance
          devices.forEach(function(device){

              // separate IP and port
              var infos = device.identifier.split(':');
              shared.instances[device.id] = new Sonos(infos[0], infos[1]);
          });
      });
};