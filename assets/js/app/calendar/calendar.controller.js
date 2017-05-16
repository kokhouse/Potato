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
    .controller('calendarCtrl', calendarCtrl);

  calendarCtrl.$inject = ['calendarService'];

  function calendarCtrl(calendarService) {
    /* jshint validthis: true */
    var vm = this;
    vm.activateCalendar = activateCalendar;
    vm.dayEvents = [];
    vm.loadEvents = loadEvents;

    activate();

    function activate() {
      activateCalendar();
      return ;
    }

    function activateCalendar() {
      $("#calendar").datepicker({
        todayHighlight: true
      }).on('changeDate', function(e) {
        var selectedDate = moment(e.date).format();

        selectedDate = selectedDate.substring(0, 10);
        loadEvents(selectedDate);
      });
    }
    
    function loadEvents(date) {
      return calendarService.loadEvents(date)
        .then(function(data){
          vm.dayEvents = data.data;
        });
    }
  }
})();