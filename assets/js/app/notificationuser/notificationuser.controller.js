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
        .controller('NotificationUserCtrl', NotificationUserCtrl);

    NotificationUserCtrl.$inject = ['notificationUserService'];

    function NotificationUserCtrl(notificationUserService) {
        /* jshint validthis: true */
        var vm = this;

        vm.notificationUsers = [];
        vm.notificationTypes = [];
        
        vm.createNotificationUser = createNotificationUser;
        vm.destroyNotificationUser = destroyNotificationUser;

        activate();

        function activate() {
            getNotificationTypes();
            getNotificationUsers();
        }

        function getNotificationUsers(){
            return notificationUserService.get()
              .then(function(data){
                  vm.notificationUsers = data.data; 
              });
        }
        
        function getNotificationTypes(){
            return notificationUserService.getTypes()
              .then(function(data){
                  vm.notificationTypes = data.data; 
              });
        }
        
        function createNotificationUser(notificationUser){
            return notificationUserService.create(notificationUser)
              .then(function(data){
                  
                  return getNotificationUsers();
              });
        }
        
        function destroyNotificationUser(index, id){
            return notificationUserService.destroy(id)
              .then(function(){
                 vm.notificationUsers.splice(index, 1); 
              });
        }

        
        
    }
})();