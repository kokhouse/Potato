/** 
  * Gladys Project
  * https://github.com/AngrySpartan/michael/
  * Software under AttributionNonCommercial licence 
  * https://creativecommons.org/licenses/by-nc/4.0/
  * You may not use this software for commercial purposes.
  * @author :: Michael Caprice Lindsey
  */
  
  
/* To get the path for scripts 
*/

module.exports.scripts = {
	folder:'api/scripts',
	servicesFolder: './api/services',
	modelFolder: './api/models',
	servicesHooksFolder: 'services',
	hooksFolder: './api/hooks',
	vmOptions:{ 
	},
	defaultSandbox: {
		console:console,
		setTimeout:setTimeout,
		setInterval: setInterval,
		clearTimeout:clearTimeout,
		clearInterval:clearInterval
	}
};