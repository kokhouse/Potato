/** 
 * Gladys Project
 * https://github.com/AngrySpartan/michael/
 * Software under AttributionNonCommercial licence 
 * https://creativecommons.org/licenses/by-nc/4.0/
 * You may not use this software for commercial purposes.
 * @author :: Michael Caprice Lindsey
 */

/**
 * state.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        state: {
            model: 'StateType',
            required: true
        },

        condition_template: {
            type: 'string'
        },

        active: {
            type: 'boolean',
            defaultsTo: true
        },

        launcher: {
            model: 'Launcher',
            required: true
        }

    }
};
