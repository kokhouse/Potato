/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  
(function() {
  'use strict';

  angular
    .module('gladys')
    .run(runBlock);

  runBlock.$inject = ['languageService', 'socketService', 'recognitionService'];

  function runBlock(languageService,socketService, recognitionService) {
    languageService.initialize();
    socketService.subscribe();
    //recognitionService.start();
  }
  
})();