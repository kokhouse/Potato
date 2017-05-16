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
        .controller('ScriptCtrl', ScriptCtrl);

    ScriptCtrl.$inject = ['$scope','scriptService'];

    function ScriptCtrl($scope, scriptService) {
        /* jshint validthis: true */
        var vm = this;
        
        vm.create = create;
        vm.patch = patch;
        vm.exec = exec;
        vm.destroy = destroy;
        
        vm.error = null;
        vm.savingState = '';
        vm.scripts = [];  
        vm.currentScript = {
            text: ''
        };
        
        var editor;

        activate();

        function activate() {
            activateEditor();
            return get();
        }
        
        $scope.$watch('vm.currentScript', function(newValue, oldValue){
            editor.setValue(vm.currentScript.text);
        });
        
        /**
         * Activate the AceEditor
         */
        function activateEditor(){
            editor = ace.edit("editor");
            ace.config.set("basePath", "/js/dependencies/ace");
			editor.setTheme("ace/theme/xcode");
			editor.getSession().setMode("ace/mode/javascript");
			editor.setOptions({
				minLines:5,
				maxLines: 25
            });
        } 
        
        
        function create(name){
            return scriptService.create({name:name})
               .then(function(data){
                   
                  // add new script to script list
                  vm.scripts.push(data.data); 
                  
                  // set current script to new script
                  vm.currentScript = data.data;
                  
                  // reset and close modal
                  vm.newName = "";
                  $('#NewFileModal').modal('hide');
               });
        }
        
        function destroy(id){
            return scriptService.destroy(id)
                .then(function(data){
                    vm.currentScript = {};
                    editor.setValue('');
                    removeFromSelect(id); 
                })
                .catch(function(err){
                    vm.error = true;
                    setTimeout(removeError, 3000);
                    console.log(err);
                });
        }
        
        function removeFromSelect(id){
            var i = 0;
            var found = false;
            while(!found && i < vm.scripts.length){
                if(vm.scripts[i].id === id){
                    vm.scripts.splice(i, 1);
                    found = true;
                }
                i++;
            }
        }

        function get() {
            return scriptService.get()
                .then(function(data){
                    vm.scripts = data.data;
                });
        }
        
        function resetSavingState(){
            $scope.$apply(function () {
                  vm.savingState = '';
            });
        }
        
        function removeError(){
             $scope.$apply(function () {
                  vm.error = false;
            });
        }
        
        function exec(id){
           vm.scriptError = false;
           return patch(id)
             .then(function(){
                 return scriptService.exec(id);
             })
             .catch(function(err){
                 vm.scriptErrorMessage = err.data;
                 vm.scriptError = true; 
             });
        }
        
        function patch(id){
            vm.savingState = 'saving';
            return scriptService.update(id, {text: editor.getValue()})
                .then(function(data){
                    vm.savingState = 'saved';
                    setTimeout(resetSavingState, 3000);
                })
                .catch(function(err){
                   vm.error = true;
                   setTimeout(removeError, 3000);
                   console.log(err); 
                });
        }
    }
})();