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
        .factory('geoLocationService', geoLocationService);

    geoLocationService.$inject = ['$http'];

    function geoLocationService($http) {
        
        var service = {
            create: create,
            get: get,
            getCurrentPosition: getCurrentPosition
        };

        return service;

        function create(location) {
            var locationObj = {
              latitude: location.latitude,
              longitude:  location.longitude,
              accuracy: location.accuracy,
              altitude: location.altitude
            };
            return $http({method: 'POST', url: '/location', data: locationObj });
        }

        function get(){
           return $http({ method: 'GET', url: '/location'}); 
        }

        function getCurrentPosition() {
            return new Promise(function(resolve, reject) {
                if (navigator.geolocation) {
                    var options = {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    };
                    navigator.geolocation.getCurrentPosition(resolve, reject, options);
                }else{
                    reject('Navigator not capable of geolocation');
                }
            });
        }
    }
})();