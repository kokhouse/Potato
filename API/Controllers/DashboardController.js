/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
/**
 * DashboardController
 *
 * @description :: Server-side logic for managing the dashboard
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

   index : function (req, res, next){
        gladys.box.get({user:req.session.User, view: 'dashboard'})
            .then(function(boxs){
                return res.view('dashboard/index', { User: req.session.User, boxs: boxs, pageName: req.__('pagename-homepage') }); 
            }); 
  },

  parametres : function(req, res, next){
  	res.view('parametres/index', { User: req.session.User, pageName: req.__('pagename-parametres') });
  },

  scenario :function(req,res,next){
    res.view('scenario/index', {User:req.session.User , pageName: req.__('pagename-scenario') });
  },

  script:function(req,res,next){
    res.view('script/index',  { User: req.session.User, pageName: req.__('pagename-script') });
  },

  maps:function(req,res,next){
    res.view('maps/index',  { User: req.session.User, pageName: req.__('pagename-maps') });
  },
  
  device: function(req,res,next){
    res.view('device/index',  { User: req.session.User, pageName: req.__('pagename-device') });
  },
  
  module: function(req, res, next){
      res.view('module/index', { User: req.session.User, pageName: req.__('pagename-module') });
  },

  alarm:function(req,res,next){
    res.view('alarm/index', {User: req.session.User, pageName: req.__('pagename-alarm')});
  },

  me:function(req,res,next){
    res.view('me/index', {User: req.session.User, pageName: req.__('pagename-me')});
  },

};

