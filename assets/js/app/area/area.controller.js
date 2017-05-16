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
    .controller('AreaCtrl', AreaCtrl);

  AreaCtrl.$inject = ['areaService'];

  function AreaCtrl(areaService) {
    /* jshint validthis: true */
    var vm = this;
    vm.areas = [];
    vm.createArea = createArea;
    vm.deleteArea = deleteArea;
    vm.updateArea = updateArea;
    vm.saving = false;
    vm.newArea = {};

    activate();

    function activate() {
        getArea();
    }
    
   function getArea(){
       return areaService.get()
         .then(function(data){
             vm.areas = data.data;
         });
   }
   
   function createArea(area){
       return areaService.create(area)
         .then(function(data){
             vm.areas.push(data.data);
             vm.newArea = {};
         });
   }
   
   function deleteArea(index, id){
       return areaService.destroy(id)
         .then(function(){
            vm.areas.splice(index, 1); 
         });
   }
   
   function updateArea(id, area){
       vm.saving = true;
       return areaService.update(id, area)
         .then(function(area){
             vm.saving = false;
         });
   }

  }
})();