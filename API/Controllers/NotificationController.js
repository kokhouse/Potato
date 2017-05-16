/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  

module.exports = {
    
    
    /**
     * Get notifications with pagination
     */
    index: function(req, res, next){
        req.query.user = req.session.User;
        gladys.notification.get(req.query)
          .then(function(notifications){
              return res.json(notifications);
          })
          .catch(next);
    },

    /**
     * Read notifications from a particular user
     */
    read: function(req, res, next){
        gladys.notification.read(req.session.User)
          .then((notifications) => res.json(notifications))
          .catch(next);
    }
    	
};

