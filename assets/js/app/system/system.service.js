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
        .factory('systemService', systemService);

    systemService.$inject = ['$http'];

    function systemService($http) {
        
        var service = {
            get: get,
            shutdown: shutdown,
            update: update
        };

        return service;

        function get(){
            return $http({method: 'GET', url: '/system' });
        }
        
        function shutdown(){
            return $http({method: 'POST', url: '/system/shutdown' });
        }

        function update(){
            return $http({method: 'POST', url: '/system/update' });
        }
      
        
    }
})();