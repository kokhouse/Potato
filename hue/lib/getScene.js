var hue = require('node-hue-api');
var shared = require('./shared.js');

module.exports = function exec(params){
   
    return shared.getApi()
      .then(function(api){
         return api.scenes();
      });    
};