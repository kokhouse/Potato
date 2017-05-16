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
        .factory('machineService', machineService);

    machineService.$inject = ['$http'];

    function machineService($http) {
        
        var service = {
            create: create,
            get: get, 
            update: update,
            delete: destroy
        };

        return service;

        function get() {
            return $http({method: 'GET', url: '/machine'});
        }
		
		function create(machine) {
            return $http({method: 'POST', url: '/machine', data: machine});
        }

        function update(machine){
            return $http({method: 'PATCH', url: '/machine/' + machine.id, data: machine});
        }

        function destroy(id){
            return $http({method: 'DELETE', url: '/machine/' + id});
        }
	
    }
})();