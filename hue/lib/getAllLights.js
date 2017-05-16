var shared = require('./shared.js');
var Promise = require('bluebird');

module.exports = function(){

	return shared.getApi()
      .then(function(api){
      	return api.lights();
      })
      .then(function(result){
      	return Promise.map(result.lights, function(light){
      		return createLight(light);
      	});
      });
};

function createLight(light){
	
	var lightObj = {
		device: {
			name: light.name,
			protocol: 'wifi',
			service: 'hue',
			identifier: light.id
		},
		types: [
			{
				type: 'binary',
				sensor: false,
				tag: light.name,
				min: 0,
				max: 1
			},
			{
				type: 'brightness',
				sensor: false,
				min: 0,
				max: 255
			},
			{
				type: 'hue',
				sensor: false,
				min: 0,
				max: 65535
			},
			{
				type: 'saturation',
				sensor: false,
				min: 0,
				max: 255
			}
		]
	};

	return gladys.device.create(lightObj);
}