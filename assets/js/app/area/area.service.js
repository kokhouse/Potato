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
        .factory('areaService', areaService);

    areaService.$inject = ['$http'];

    function areaService($http) {
        
        var service = {
            create: create,
            get: get,
            update: update,
            destroy: destroy 
        };

        return service;

        function create(area) {
            return $http({method: 'POST', url: '/area', data: area });
        }
        
        function get() {
            return $http({method: 'GET', url: '/area' });
        }
        
        function update(id, area) {
            return $http({method: 'PATCH', url: '/area/' + id, data: area });
        }
        
        function destroy(id) {
            return $http({method: 'DELETE', url: '/area/' + id});
        }

    }
})();