var WeMo = require('wemo'); 

module.exports = function(){
  var client = WeMo.Search();
  
  client.on('found', function(device) {
    
    var newDevice = {
      device: {
        name: device.friendlyName,
        protocol: 'wifi',
        service: 'wemo',
        identifier: device.ip + ':' + device.port,
      },
      types: [
        {
          type:'binary',
          sensor: false,
          min: 0,
          max: 1
        }
      ]
    };
    
    gladys.device.create(newDevice);
  });

  return Promise.resolve();
};