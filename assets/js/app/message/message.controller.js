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
        .controller('MessageCtrl', messageCtrl);

    messageCtrl.$inject = ['messageService', 'notificationService', '$timeout', '$scope'];

    function messageCtrl(messageService, notificationService, $timeout, $scope) {
        /* jshint validthis: true */
        var vm = this;
        vm.send = send;

        var typingMinTime = 300;
        var typingMaxTime = 600;

        vm.messages = [];

        activate();

        function activate() {
            getMessages()
                .then(function() {
                    waitForNewMessage();
                });

            return ;
        }
        
        function getMessages() {
            return messageService.getByUser('null')
                .then(function(data) {
                    vm.messages = data.data;
                    scrollToLastMessage();
                });
        }

        function scrollToLastMessage(){
             $timeout(function() {
                var chatBox = document.getElementById('chat-box');
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 0, false);
        }

        function waitForNewMessage(){
            io.socket.on('message', function (message) {
                vm.typing = true;
                $scope.$apply();
                scrollToLastMessage();
                var randomWait = Math.floor(Math.random() * typingMaxTime) + typingMinTime;
                $timeout(function() {
                    vm.typing = false;
                    vm.messages.push(message);
                    scrollToLastMessage();
                }, randomWait, true);
            });
        }
        
        function send(text) {
            
            if(!text || text.length == 0) {
                return notificationService.errorNotificationTranslated('MESSAGE.TEXT_CANNOT_BE_EMPTY');
            }

            var message = {
                receiver: null,
                text: text
            };
            
            return messageService.send(message)
                .then(function(data) {
                    vm.messages.push(data.data);
                    vm.newMessageText = '';
                    scrollToLastMessage();
                })
                .catch(function(err) {
                    notificationService.errorNotificationTranslated('MESSAGE.SEND_MESSAGE_FAILED', err);
                });
        }
    }
})();
