var shared = require('./milight.shared.js');

module.exports = function init(){
    return gladys.device.getByService({service: 'milight'})
      .then((devices) => {

          // reset the bridge array
          shared.bridges = [];

          // foreach device, if the device 
          // is a bridge we add the IP of the bridge to the array
          devices.forEach(function(device){
              if(device.protocol == 'wifi') {
                  shared.bridges[device.id] = device.identifier;
              }
          });
      });
};