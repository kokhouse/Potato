/** 
 * Gladys Project
 * https://github.com/AngrySpartan/michael/
 * Software under AttributionNonCommercial licence 
 * https://creativecommons.org/licenses/by-nc/4.0/
 * You may not use this software for commercial purposes.
 * @author :: Michael Caprice Lindsey
 */

/**
 * launcher.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        condition_template: {
            type: 'string'
        },

        active: {
            type: 'boolean',
            defaultsTo: true
        },
        
        eventtype: {
            model: 'EventType',
            required: true
        },

        user: {
            model: 'User',
            required: true
        },

    }
};
