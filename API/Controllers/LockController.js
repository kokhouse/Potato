/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  
/**
 * LockController
 *
 * @description :: Server-side logic for managing locks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	/**
	 * Description
	 * @method index
	 * @param {} req
	 * @param {} res
	 * @return 
	 */
	index : function(req,res){
		req.session.authenticated = false;
		res.view('lock/index', {layout: null, User: req.session.User});
	}
	
};

