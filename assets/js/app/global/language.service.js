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
        .factory('languageService', languageService);

    languageService.$inject = ['userService','amMoment', '$translate'];

    function languageService(userService,amMoment, $translate) {
        
        var service = {
            initialize:initialize
        };

        return service;

        function initialize(){
            
            // get User Language
			return userService.whoAmI()
                .then(function(user){
                    if(user.language){
                        // set the language of the moment library
                        amMoment.changeLocale(user.language.substring(0,2));
                        $translate.use(user.language.substring(0,2));
                    }
                });
		}
		
    }
})();