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
     * Get all modules
     */
    index: function(req, res, next){
      gladys.module.get()
            .then(function(modules){
                return res.json(modules);
            })  
            .catch(next);
    },
    
    /**
     * Install a given module
     */
    install: function(req, res, next){
        gladys.module.install(req.body)
              .then(function(module){
                  return res.json(module);
              })
              .catch(next);
    },
    
    
    config: function(req, res, next){
        gladys.module.config({slug: req.params.slug})
          .then(function(){
              return res.json({success: true});
          })
          .catch(next);
    },
    
    uninstall: function(req, res, next){
        gladys.module.uninstall({id: req.params.id})
          .then(function(module){
              return res.json(module);
          })
          .catch(next);
    }
	
};

