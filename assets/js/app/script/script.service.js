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
        .factory('scriptService', scriptService);

    scriptService.$inject = ['$http'];

    function scriptService($http) {
        
        var service = {
            create: create,
            get: get,
            exec: exec,
            update: update,
            destroy: destroy
        };

        return service;
        
        function create(script) {
            return $http({method: 'POST', url: '/script', data: script});
        }
        
        function destroy(id) {
            return $http({method: 'DELETE', url: '/script/' + id});
        }

        function get() {
            return $http({method: 'GET', url: '/script'});
        }
        
        function exec(id) {
            return $http({method: 'POST', url: '/script/' + id + '/exec'});
        }
        
        function update(id, script) {
            return $http({method: 'PATCH', url: '/script/' + id, data: script});
        }
    }
})();