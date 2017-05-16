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
        .factory('alarmService', alarmService);

    alarmService.$inject = ['$http'];

    function alarmService($http) {
        
        var service = {
            create: create, 
            createTimer: createTimer,
            get: get, 
            destroy: destroy
        };

        return service;

        function create(alarm) {
          return $http({method: 'POST', url: '/alarm', data: alarm });
        }
        
        function createTimer(alarm){
          return $http({method: 'POST', url: '/alarm/timer', data: alarm });
        }
        
        function get(){
          return $http({method: 'GET', url: '/alarm' });
        }
        
        function destroy(id){
          return $http({method: 'DELETE', url: '/alarm/' + id });
        }

        
    }
})();