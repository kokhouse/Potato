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
    .controller('WeatherCtrl', WeatherCtrl);

  WeatherCtrl.$inject = ['weatherService', 'geoLocationService', 'cacheService', 'notificationService', '$timeout'];

  function WeatherCtrl(weatherService, geoLocationService, cacheService, notificationService, $timeout) {

    /* jshint validthis: true */
    var vm = this;
    vm.weather = [];
    var EXPIRATION = 30*60*1000;
    
    activate();

    function activate() {
      refresh();
      
      // Start the timer
      $timeout(tick, 1000);
      return ;
    }

   function tick () {
        vm.currentTime = Date.now();
        $timeout(tick, 1000);
    }

    function refresh() {

        // first get GEOLOCATION from cache if exist
        var coords = cacheService.get('GEOLOCATION_USER');
        
        // if geoloc exist in cache
        if(coords) {
            return getWeather(coords);
        } 
        // if not, get geoloc from browser
        else {
            return geoLocationService.getCurrentPosition()
              .then(function(data) {

                  if(data.coords && data.coords.latitude && data.coords.longitude) {

                    var geoloc = {
                      latitude: data.coords.latitude,
                      longitude: data.coords.longitude,
                      accuracy: data.coords.accuracy
                    };
                    
                    // save geoloc in cache
                    cacheService.set('GEOLOCATION_USER', geoloc, EXPIRATION);
                    return getWeather(geoloc);
                  } else {

                    return null;
                  }
              })
              .catch(function(err) {
                  notificationService.errorNotificationTranslated('WEATHER.GET_GEOLOCATION_FAILED', err);
              });
        }
    }

    function getWeather(coords) {
        
        var latitude = coords.latitude;
        var longitude = coords.longitude;

        return weatherService.get({latitude: latitude, longitude: longitude})
            .then(function(data) {
                vm.weather[0] = data.data;

                // get weather in 
                return weatherService.get({latitude: latitude, longitude: longitude, offset: 24});
            })
            .then(function(data) {

                vm.weather[1] = data.data;

                // get weather in 48h
                return weatherService.get({latitude: latitude, longitude: longitude, offset: 48});
            })
            .then(function(data) {

              vm.weather[2] = data.data;

                // get weather in 72h
                return weatherService.get({latitude: latitude, longitude: longitude, offset: 72});
            })
            .then(function(data) {
              
              vm.weather[3] = data.data;
            });
     }
    
  }
})();