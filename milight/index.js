

module.exports = function (sails) {

    var exec = require('./lib/milight.exec.js');
    var setup = require('./lib/milight.setup.js');
    var init = require('./lib/milight.init.js');

    gladys.on('ready', function(){
        init();
    });
      
    return {
        exec, 
        setup,
        init
    };
};