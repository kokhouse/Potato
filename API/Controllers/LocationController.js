/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  
/**
 * @apiDefine LocationSuccess
 * @apiSuccess {datetime} datetime Datetime of the location
 * @apiSuccess {float} latitude Latitude
 * @apiSuccess {float} longitude  Longitude
 * @apiSuccess {float} altitude  Altitude
 * @apiSuccess {float} accuracy  Accuracy in meters
 * @apiSuccess {integer} user  User ID
 */

/**
 * @apiDefine LocationParam
 * @apiParam {datetime} [datetime] Datetime of the location
 * @apiParam {float} latitude Latitude
 * @apiParam {float} longitude  Longitude
 * @apiParam {float} [altitude]  Altitude
 * @apiParam {float} [accuracy]  Accuracy in meters
 */

module.exports = {

	/**
     * @api {post} /location create location
     * @apiName createLocation
     * @apiGroup Location
     * @apiPermission authenticated
     *
     * @apiUse LocationParam
     * 
     * @apiUse LocationSuccess
     */
	create : function(req,res, next){
        
        var location;
        
        // request can be a get or post request
        if(req.query.latitude) {
            location = req.query;
        } else {
            location = req.body;
        }
        
        location.user = req.session.User.id;

        gladys.location.create(location)
          .then(function(location){
              return res.status(201).json(location);
          })
          .catch(next);
	},

    get: function(req, res, next){
        gladys.location.get()
            .then(locations => res.json(locations))
            .catch(next);
    }

};

