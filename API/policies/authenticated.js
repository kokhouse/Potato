/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */


  
/**
 * @apiDefine authenticated Connected user only
 * Allow only a connected user to pass
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to controller
  if (req.session.authenticated) {
    return next();
  }
  else { // User is not allowed
    return res.redirect('/login');
  }
};