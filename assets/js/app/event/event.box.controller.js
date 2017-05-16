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
        .controller('EventBoxCtrl', EventBoxCtrl);

    EventBoxCtrl.$inject = ['eventService', 'eventTypeService', 'notificationService', 'userService', 'houseService'];

    function EventBoxCtrl(eventService, eventTypeService, notificationService, userService, houseService) {
        /* jshint validthis: true */
        var vm = this;
    	vm.createEvent = createEvent;
        vm.eventTypes = [];

        activate();

        function activate(){
            getEventTypes();
            getUsers();
            getHouses();
        }

        function getEventTypes() {
            return eventTypeService.get()
              .then(function(data){
                  vm.eventTypes = data.data;
              });
        }

        function getUsers(){
            return userService.get()
                .then(function(data){
                    vm.users = data.data;
                });
        }

        function getHouses(){
            return houseService.get()
                .then(function(data){
                    vm.houses = data.data;
                });
        }

        function createEvent(event) {
            return eventService.create(event)
                .then(function(){
                    notificationService.successNotificationTranslated('EVENT.CREATED_SUCCESS_NOTIFICATION', code);
                })
                .catch(function(){
                    notificationService.errorNotificationTranslated('EVENT.CREATED_FAIL_NOTIFICATION', code);
                });
        }

        
    }
})();
