var handler = require('./handler/index.js');

module.exports = function(topic, message){
	try{
		var obj = JSON.parse(message);

		if(topic.indexOf('owntracks') >= 0){
			return handler.owntrack(topic, obj);
		}
	} catch(e){
		sails.log.warn(`MQTT : handler : fail to handle incoming message on topic ${topic}`);
		sails.log.warn(e);
	};
};