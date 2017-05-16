var hue = require("node-hue-api");
var shared = require('./shared.js');
var HueApi = hue.HueApi;
var lightState = hue.lightState;
var state = lightState.create();

module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            newState = state.on();
        } else {
            newState = state.off();
        }  
      break;
      case 'brightness': 
        newState = state.brightness(params.state.value);
      break;
      case 'hue': 
        newState = state.hue(params.state.value);
      break;
      case 'saturation': 
        newState = state.sat(params.state.value);
      break;
    }
    return shared.getApi()
      .then(function(api){
         return api.setLightState(params.deviceType.identifier, newState); 
      });    
};