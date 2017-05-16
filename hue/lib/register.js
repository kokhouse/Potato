var HueApi = require("node-hue-api").HueApi;
var Promise = require('bluebird');

/**
 * Connect Gladys to the bridge
 * The user should have pressed the button first
 */
module.exports = function(bridge){

    return createUser(bridge.ipaddress, 'gladys')
      .then(function(userId){
         sails.log.info('Successfully registered Philips Hue user');
         
         // saving username and hostname in parallel
         return [gladys.param.setValue({ name: 'hue_username', value: userId}), gladys.param.setValue({name: 'hue_hostname', value:bridge.ipaddress})];
      })
      .spread(function(username, hostname){
         
         // returning username and hostname
         return {
           username,
           hostname  
         };
      });
};


function createUser(hostname, description){
    return new Promise(function(resolve, reject){
         var hue = new HueApi();
         
         hue.createUser(hostname, description, function(err, user) {
            if (err) return reject(new Error(err));
            
            return resolve(user);
        }); 
    });
}