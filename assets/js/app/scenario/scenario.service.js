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
        .factory('scenarioService', scenarioService);

    scenarioService.$inject = ['$http'];

    function scenarioService($http) {
        
        var service = {           
           getOptions: getOptions,
           generateTemplate: generateTemplate
        };

        return service;
        
        function getOptions(path){
            return $http({method: 'GET', url: path});
        }
        
        // will generate a templateString like
        // "devicetype == 1 && value > 12"
        // this template will be injected an ES6 template
        // evaluator
        function generateTemplate(params){
            
            if(!params || !(params instanceof Array)){
                return '';
            }
            
            // we initialize the template
            var template = '';
            
            // foreach param
            params.forEach(function(param){
                
                if(template !== ''){
                    template += ' && ';
                }
                
                if(!param.value){
                    template += ' true ';
                } else {
                    
                    // if value is not a number, we transform it into a string escaped
                    if(!isNumber(param.value)){
                        param.value = '"' + escapeDoubleQuotes(param.value) + '"';
                    }
                    
                    // we add the condition
                    template += param.variablename + ' ' + param.operator + ' ' + param.value; 
                }

            });
            
            return template;
        }
        
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        
        function escapeDoubleQuotes(str) {
            return str.replace(/\\([\s\S])|(")/g,"\\$1$2"); // thanks @slevithan!
        }
        
    }
})();