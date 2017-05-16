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
        .factory('moduleService', moduleService);

    moduleService.$inject = ['$http'];

    function moduleService($http) {
        
        var service = {
            get: get,
            install: install,
            config: config,
            uninstall: uninstall
        };

        return service;

        function get() {
            return $http({method: 'GET', url: '/module'});
        }
        
        function install(module){
            return $http({method: 'POST', url: '/module/install', data: module});
        }
        
        function config(slug){
            return $http({method: 'POST', url: '/module/' + slug + '/config'});
        }
        
        function uninstall(id){
            return $http({method: 'DELETE', url: '/module/' + id });
        }
    }
})();