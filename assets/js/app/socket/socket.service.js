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
        .factory('socketService', socketService);

    socketService.$inject = ['$http'];

    function socketService($http) {
        var service = {
            subscribe: subscribe
        };

        return service;

        function subscribe() {
            return new Promise(function(resolve, reject){
				io.socket.post('/socket/subscribe', {}, function (data, jwres){
				    resolve();
				});
			});
        }
    }
})();