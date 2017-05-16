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
    .controller('BrainCtrl', BrainCtrl);

  BrainCtrl.$inject = ['brainService'];

  function BrainCtrl(brainService) {
    /* jshint validthis: true */
    var vm = this;
    vm.classify = classify;
    vm.text = '';

    activate();

    function activate() {
      
      return ;
    }


    function classify(text){
       vm.text = '';
       return brainService.classify(text)
         .then(function(answer){
            
         });
    }

  }
})();