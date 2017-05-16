/** 
 * Gladys Project
 * https://github.com/AngrySpartan/michael/
 * Software under AttributionNonCommercial licence 
 * https://creativecommons.org/licenses/by-nc/4.0/
 * You may not use this software for commercial purposes.
 * @author :: Michael Caprice Lindsey
 */

/**
 * CalendarList.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        externalid: {
            type: 'string',
            required: true,
            unique: true
        },

        name: {
            type: 'string'
        },

        description: {
            type: 'string'
        },

        service: {
            type: 'string'
        },

        active: {
            type: 'boolean',
            defaultsTo: true
        },

        user: {
            model: 'User',
            required: true
        }

    }
};
