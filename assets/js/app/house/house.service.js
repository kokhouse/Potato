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
        .factory('houseService', houseService);

    houseService.$inject = ['$http'];

    function houseService($http) {
        var service = {
            create: create,
            get: get, 
            update: update,
            destroy: destroy
        };

        return service;

        function create(house) {
            return $http({method: 'POST', url: '/house', data: house});
        }

        function get() {
            return $http({method: 'GET', url: '/house'});
        }
        
        function update(id, house) {
            return $http({method: 'DELETE', url: '/house/' + id, data: house});
        }
        
        function destroy(id) {
            return $http({method: 'DELETE', url: '/house/' + id});
        }

    }
})();