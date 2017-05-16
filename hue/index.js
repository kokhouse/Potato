

module.exports = function(sails) {
    
    var search = require('./lib/search.js');
    var register = require('./lib/register.js');
    var exec = require('./lib/exec.js');
    var setup = require('./lib/setup.js');
    var getScene = require('./lib/getScene.js');
    var activateScene = require('./lib/activateScene.js');
    
    return {
        search,
        register,
        exec,
        setup,
        getScene,
        activateScene
    };
};