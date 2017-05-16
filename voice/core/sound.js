const config = require('../config.js');
const exec = require('child_process').exec;

module.exports.play = function(){
    play(config.sound);
};

function play(mp3){
    var command = null;
    switch(process.platform){
        case 'darwin': 
            command = 'afplay ' + mp3;
        break;
        case 'freebsd':
        case 'linux': 
        case 'sunos':
            command = 'mpg321 ' + mp3;
        break;
    }

    if(command == null) 
        return Promise.reject(new Error(`Your system (${process.platform}) is not handled for the little sound feature.`));
    
    exec(command , (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}