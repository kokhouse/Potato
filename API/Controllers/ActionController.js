/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */


module.exports = {
  
    
    create: function(req, res, next){
      gladys.action.create(req.body)
        .then(function(action){
          return res.status(201).json(action);
        })
        .catch(next);
    },
    
    delete: function(req, res, next){
      gladys.action.delete({id:req.params.id})
        .then(function(){
          return res.json({success: true})
        })
        .catch(next);
    },
    
    update: function(req, res, next){
      req.body.id = req.params.id;
      gladys.action.update(req.body)
        .then(function(action){
          return res.json(action);
        })
        .catch(next);
    },
    
    addParam: function(req, res, next){
      
      req.body.action = req.params.id;
      gladys.action.addParam(req.body)
        .then(function(param){
          return res.status(201).json(param);
        })
        .catch(next);
    }
	 
};

