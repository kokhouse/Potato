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
        .factory('weatherService', weatherService);

    weatherService.$inject = ['$http'];

    function weatherService($http) {
        
        var service = {
            get: get
        };

        return service;
    
        function get(options) {
            return $http({method: 'GET', url: '/weather', params: options });
        }
    }
})();