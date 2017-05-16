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
        .factory('eventService', eventService);

    eventService.$inject = ['$http'];

    function eventService($http) {
        
        var service = {
            get: get,
            create: create
        };

        return service;

        function get(take, skip) {
            return $http({method: 'GET', url: '/event', params: {take: take, skip: skip}});
        }

        function create(event) {
            return $http({method: 'POST', url: '/event', data: event});
        }
        
    }
})();