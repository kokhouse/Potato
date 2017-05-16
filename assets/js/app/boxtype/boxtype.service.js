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
        .factory('boxTypeService', boxTypeService);

    boxTypeService.$inject = ['$http'];

    function boxTypeService($http) {
        
        var service = {
            get:get
        };

        return service;
        
        function get() {
            return $http({method: 'GET', url: '/boxtype' });
        }
    }
})();