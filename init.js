#!/usr/bin/env node

/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */

// force dev ENV
process.env.NODE_ENV = 'development';

var sailsApp = require('./index.js');

var config = {
    hooks: {
        grunt: false,
        userhooks: false
    }
};

sailsApp.start(config, function(err, app){
    if(err) {
        console.log(err);
        process.exit(1);
    }
    
    console.log('Gladys started with success');
    
    app.after('lifted', function(){
       
       // if we don't wait, it crashed for already in use port
       setTimeout(function(){
        app.lower();    
        console.log('Init with success !');
       }, 200);
    });
});