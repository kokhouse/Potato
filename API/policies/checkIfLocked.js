/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  
/**
 * Allow any authenticated user.
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to controller
  if (req.session.User) {
    return next();
  }
  else { // User is not allowed
    return res.redirect('/login');
  }
};