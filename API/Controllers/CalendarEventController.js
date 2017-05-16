/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
/**
 * CalendarEventController
 *
 * @description :: Server-side logic for managing Calendarevents
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

   index: function(req, res, next){
     var options = req.query;
     options.user = req.session.User;

      gladys.calendar.getEventsDates(options)
        .then((calendarEvents) =>  res.json(calendarEvents))
        .catch(next);
   }

};