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
    .controller('DeviceStateCtrl', DeviceStateCtrl);

  DeviceStateCtrl.$inject = ['deviceService', '$scope'];

  function DeviceStateCtrl(deviceService, $scope) {
    /* jshint validthis: true */
    var vm = this;
    
    vm.previousStates = previousStates;
    vm.nextStates = nextStates;

    activate();

    function activate() {
      getDeviceTypes();
      waitForNewValue();
      return ;
    }
    
    $scope.$watch('vm.currentDeviceType', function(){
       refreshChart();
    });
    
    function previousStates(){
        vm.currentDeviceType.skip += 25;
        refreshChart();   
    }
    
     function nextStates(){
        vm.currentDeviceType.skip -= 25;
        if(vm.currentDeviceType.skip < 0){
            vm.currentDeviceType.skip = 0;
        }
        refreshChart();   
    }
    
    function refreshChart(){
        if(vm.currentDeviceType && vm.currentDeviceType.id){
            getStatesDevice(vm.currentDeviceType);   
        }  
    }
    
    function getDeviceTypes(){
        return deviceService.getTypes()
          .then(function(data){
             vm.deviceTypes = data.data;
          });
    }
    
    function getStatesDevice(deviceType){
        if(!deviceType.skip){
            deviceType.skip = 0;
        }        
        return deviceService.getStates(deviceType.id, deviceType.skip)
          .then(function(data){
              var chartData = formatDataChartjs(data.data);
              chartData.series = [deviceType.name + ' ' + deviceType.unit];
              chartData.data = [chartData.data];
              vm.chart = chartData;
          });
    }
    
    // waiting for websocket message
    function waitForNewValue(){
        
        io.socket.on('newDeviceState', function (deviceState) {
            
            // if the device is the current device, push the value in the graph
            if(vm.currentDeviceType && deviceState.devicetype == vm.currentDeviceType.id){
                $scope.$apply(function(){
                    vm.chart.labels.push(deviceState.datetime);
                    vm.chart.data[0].push(deviceState.value);  
                });
            }
        });
    }
    
    function formatDataChartjs(rows){
        var labels = [];
        var data = [];
        rows.forEach(function(row){
           labels.unshift(row.dateFormat);
           data.unshift(row.value);
        });
        return {labels: labels, data:data};
    }
    
  }
})();