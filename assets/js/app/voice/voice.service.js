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
        .factory('voiceService', voiceService);

    voiceService.$inject = ['userService'];

    function voiceService(userService) {
        
        var service = {
            say: say
        };

        return service;

        function say(text){
            if (window.SpeechSynthesisUtterance === undefined) {
               return Promise.reject(new Error('SpeechSynthesisUtterance is not supported in your browser.'));    
            }
            userService.whoAmI()
              .then(function(user){
                 var utterance = new SpeechSynthesisUtterance();
                 utterance.text = text;
                 utterance.lang = user.language;
                 utterance.rate = 1.2;
                 window.speechSynthesis.speak(utterance); 
              });
        }
    }
})();