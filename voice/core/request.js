const config = require('../config.js');
const request = require('request');

module.exports = function(sentence){
    console.log('Received sentence : ' + sentence);
    var url = `${config.gladys.gladysUrl}/brain/classify?token=${config.gladys.token}&q=${encodeURIComponent(sentence)}`;
    request.get({url}, function(err, httpResponse, body){
            if(err) return console.log(err);
            
            console.log(body);
        });
}