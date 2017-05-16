/** 
 * Gladys Project
 * https://github.com/AngrySpartan/michael/
 * Software under AttributionNonCommercial licence 
 * https://creativecommons.org/licenses/by-nc/4.0/
 * You may not use this software for commercial purposes.
 * @author :: Michael Caprice Lindsey
 */

/**
 * EventType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        code: {
            type: 'string',
            required: true,
            unique: true
        },

        name: {
            type: 'string',
            required: true
        },

        description: {
            type: 'string'
        },
        
        category: {
            type: 'string'
        },

        service: {
            type: 'string'
        },

        faIcon: {
            type: 'string'
        },

        iconColor: {
            type: 'string'
        },

    }
};
