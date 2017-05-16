/** 
 * Gladys Project
 * https://github.com/AngrySpartan/michael/
 * Software under AttributionNonCommercial licence 
 * https://creativecommons.org/licenses/by-nc/4.0/
 * You may not use this software for commercial purposes.
 * @author :: Michael Caprice Lindsey
 */


module.exports = {

    attributes: {

        name: {
           type:'string',
           required: true
        },
        
        value: {
            type:'string',
            required: true
        },

        user: {
            model: 'User',
            required: true
        }

    }
};
