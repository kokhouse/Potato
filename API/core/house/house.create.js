var uuid = require('uuid');

module.exports = function(house){
    house.uuid = house.uuid || uuid.v4();
    return House.create(house);
};