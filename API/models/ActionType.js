/** 
 * Gladys Project
 * https://github.com/AngrySpartan/michael/
 * Software under AttributionNonCommercial licence 
 * https://creativecommons.org/licenses/by-nc/4.0/
 * You may not use this software for commercial purposes.
 * @author :: Michael Caprice Lindsey
 */

/**
 * ActionType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        
        uuid: {
          type: 'string',
          uuid: true,
          unique: true,
          required: true  
        },

        service: {
            type: 'string',
            required: true
        },

        function: {
            type: 'string',
            required: true
        },

        name: {
            type: 'string',
            required: true
        },

        description: {
            type: 'string'
        },

        optionspath: {
            type: 'string'
        },

    }
};
