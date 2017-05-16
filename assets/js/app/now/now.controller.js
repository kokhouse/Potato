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
        .controller('nowCtrl', nowCtrl);

    nowCtrl.$inject = ['calendarService'];

    function nowCtrl(calendarService) {
        /* jshint validthis: true */
        var vm = this;
        vm.nextEvents = [];
        activate();

        function activate() {
            return getNextEvents();
        }

        function getNextEvents() {
            return calendarService.getNextEvents()
                .then(function(data){
                    vm.nextEvents = data.data;
                });
        }
    }
})();