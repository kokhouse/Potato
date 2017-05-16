var WeMo = require('wemo'); 
var Promise = require('bluebird');

module.exports = function exec(params){
    
    var device = params.deviceType.identifier.split(":");
    var wemoSwitch = new WeMo(device[0], device[1]);
    
    if(params.deviceType.type !== 'binary'){
        return Promise.reject(new Error('Type not handled yet'));
    }
    
    return new Promise(function(resolve, reject){
        return wemoSwitch.setBinaryState(params.state.value, function(err, result) {  
           if(err) return reject(err);
           
           return resolve(result); 
        });  
    });  
};