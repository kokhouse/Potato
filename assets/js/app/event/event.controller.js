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
        .controller('EventCtrl', EventCtrl);

    EventCtrl.$inject = ['eventService'];

    function EventCtrl(eventService) {
        /* jshint validthis: true */
        var vm = this;
    	vm.events = [];
        vm.loadMore = loadMore;
        vm.startValue = 0;
        vm.nbElementToGet = 20;
        vm.remoteIsBusy = false;
        vm.noMoreEvents = false;
        vm.nextEvents = [];
        vm.now = new Date();
        activate();

        function activate() {
            loadMore();
            return ;
        }
        
        function loadMore(){
            if(!vm.remoteIsBusy && !vm.noMoreEvents){
                get(vm.startValue+vm.nbElementToGet, vm.startValue);
                vm.startValue += vm.nbElementToGet; 
            }
        }

        function get(take, skip) {
            vm.remoteIsBusy = true;
            return eventService.get(take, skip)
                .then(function(data){
                    if(data.data.length === 0){
                        vm.noMoreEvents = true;
                    }
                    vm.events = vm.events.concat(data.data);
                    vm.remoteIsBusy = false;
                });
        }
        
    }
})();
