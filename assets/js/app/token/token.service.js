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
        .factory('tokenService', tokenService);

    tokenService.$inject = ['$http'];

    function tokenService($http) {
        
        var service = {
            create: create,
            get: get,
            destroy: destroy,
            update: update
        };

        return service;

        function create(token) {
            return $http({method: 'POST', url: '/token', data: token });
        }
        
        function destroy(id) {
            return $http({method: 'DELETE', url: '/token/' + id });
        }
        
        function get() {
            return $http({method: 'GET', url: '/token' });
        }
        
        function update(id, token) {
            return $http({method: 'PATCH', url: '/token/' + id, data: token });
        }
    }
})();