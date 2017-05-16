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
        .controller('SystemCtrl', SystemCtrl);

    SystemCtrl.$inject = ['systemService', 'updateService', 'notificationService', 'brainService'];

    function SystemCtrl(systemService, updateService, notificationService, brainService) {
        /* jshint validthis: true */
        var vm = this;
        
        vm.updateAllData = updateAllData;
        
        vm.infos = {};
        vm.updatingData = false;
        vm.shutdown = shutdown;
        vm.update = update;
        
        activate();

        function activate() {
            get();
        }
        
       function get(){
           return systemService.get()
             .then(function(data){
                vm.infos = data.data; 
             });
       }
       
       function shutdown(){
           systemService.shutdown();
       }

       function update(){
           systemService.update();
       }
       
       function updateAllData(){
           vm.updatingData = true;
           
           return updateService.updateModes()
            .then(function(){
                
                // get all sentences
                return updateService.updateSentences();
            })
            .then(function(){
                
                // get all events
                return updateService.updateEvents(); 
            })
            .then(function(){
                
                // get all actions
                return updateService.updateActions(); 
            })
            .then(function(){
                
                // get all answers
                return updateService.updateAnswers(); 
            })
            .then(function(){
                
                // get all boxTypes
                return updateService.updateBoxTypes();
            })
            .then(function(){
                
                // get all Categories
                return updateService.updateCategories();
            })
            .then(function(){
                
                // get all states
                return updateService.updateStates();
            })
            .then(function(){
                
                // train brain
                return brainService.trainNew(); 
            })
            .then(function(){

                return updateService.verify();
            })
            .then(function(){
                 vm.updatingData = false;
                 notificationService.successNotificationTranslated('SYSTEM.UPDATE_DATA_SUCCESS');
            })
            .catch(function(err){
                 vm.updatingData = false;
                 notificationService.errorNotificationTranslated('SYSTEM.UPDATE_DATA_FAIL', err);
            });
       }
    }
})();
