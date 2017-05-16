/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  
(function () {
    'use strict';

    angular
        .module('gladys')
        .factory('calendarService', calendarService);

    calendarService.$inject = ['$http'];

    function calendarService($http) {
        var service = {
            loadEvents: loadEvents
        };

        return service;

        function loadEvents(date) {
            var start = new Date(date);
            start.setHours(0);
            start.setMinutes(0);
            start.setSeconds(0);

            var end = new Date(date);
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);


            return $http({method: 'GET', url: '/calendarevent', params: {start: start, end: end} });
        }
        
    }
})();