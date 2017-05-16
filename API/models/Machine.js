/** 
 * Gladys Project
 * https://github.com/AngrySpartan/michael/
 * Software under AttributionNonCommercial licence 
 * https://creativecommons.org/licenses/by-nc/4.0/
 * You may not use this software for commercial purposes.
 * @author :: Michael Caprice Lindsey
 */

/**
 * Machine.js
 *
 * @description :: A Machine represent a instance of Gladys Server. Can be a Master or a Slave.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'string'
        },
        
        uuid:{
            type:'uuid',
            required: true,
            unique: true
        },

        house: {
            model: 'House'
        },

        host: {
            type: 'string'
        },

        me: {
            type: 'boolean',
            defaultsTo: false
        }

    }
};
