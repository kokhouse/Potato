
module.exports = function(json){
	
	var param = {
		device: {
			name: 'Sensor',
			protocol: '433Mhz',
			service: 'radioFrequency',
			identifier: json.value
		},
		types: [
			{
				type: 'motion',
				sensor: true,
				min: 1,
				max: 1
			}
		]
	};

	// we create the device if he does not exist
	// don't worry, gladys won't create the device twice
	return gladys.device.create(param)
	  .then(function(result){

	  	  // we create the state
	  	  var state = {
	  	  	value: 1
	  	  };

	  	  return gladys.deviceState.createByIdentifier(param.device.identifier, param.device.service, param.types[0].type, state);
	  });
};