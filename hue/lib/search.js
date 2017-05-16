var hue = require("node-hue-api");

module.exports = function(){
  return hue.nupnpSearch();
};