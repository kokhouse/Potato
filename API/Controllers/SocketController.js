/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  
/**
 * SocketController
 *
 * @description :: Server-side logic for managing sockets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	
	/**
	 * Subscribe to all the sockets room the user is concerned by
	 */
	subscribe: function(req, res) {
		
        // if request is not a socket, bad request
		if (!req.isSocket) return res.badRequest();

		// Get socket Id
		var socketId = sails.sockets.getId(req);
        gladys.socket.join(req.session.User.id, socketId); 
    }
	
};

