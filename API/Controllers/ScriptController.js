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
	 * Get all Scripts
     */
	index: function(req,res,next){
        req.query.user = req.session.User;
		gladys.script.get(req.query)
              .then(function(scripts){
                 return res.json(scripts); 
              })
              .catch(next);
	},
    
    /**
     * Create a script
     */
    create: function(req, res, next){
        req.body.user = req.session.User.id;
        gladys.script.create(req.body)
              .then(function(script){
                 return res.json(script); 
              })
              .catch(next);
    },
    
    /**
     * Update a script
     */
    update: function(req, res, next){
        req.body.id = req.params.id;
        gladys.script.update(req.body)
              .then(function(script){
                  return res.json(script);
              })
              .catch(next);
    },
    
    /**
     * Delete a script
     */
    delete: function(req, res, next){
        gladys.script.delete({id:req.params.id})
              .then(function(script){
                  return res.json(script);
              })
              .catch(next);
    },
    
     /**
     * @api {post} /script/:id/exec Execute a script
     * @apiName execScript
     * @apiGroup Script
     * @apiPermission authenticated
     */
    exec: function (req, res, next){
        var script = {id: req.params.id, user: req.session.User.id};
        gladys.script.exec(script)
              .then(function(result){
                  return res.json(result);
              })
              .catch(function(err){
                  return res.status(500).json(err);
              });
    }
    
    
    
    
};

