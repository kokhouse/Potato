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
        .factory('boxService', boxService);

    boxService.$inject = ['$http'];

    function boxService($http) {
        
        var service = {
            get:get, 
            create:create,
            destroy: destroy,
            update: update
        };

        return service;
        
        function get() {
            return $http({method: 'GET', url: '/box' });
        }
        
        function create(box) {
            return $http({method: 'POST', url: '/box', data: box});
        }
        
        function destroy(id){
            return $http({method: 'DELETE', url: '/box/' + id});
        }
        
        function update(id, box) {
            return $http({method: 'PATCH', url: '/box/' + id, data: box});
        }
    }
})();