var Promise = require('bluebird');
var HueApi = require("node-hue-api").HueApi;
var api = null;

module.exports = {
  
  getApi: function(){
       if(api) return Promise.resolve(api);
       
       return gladys.param.getValue('hue_hostname')
         .then(function(hostname){
             return [hostname, gladys.param.getValue('hue_username')];
         })
         .spread(function(hostname, username){
             api = new HueApi(hostname, username);
             return api;
         });
  }
    
};