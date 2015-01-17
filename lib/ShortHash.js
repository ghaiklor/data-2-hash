var util = require('util'),
    BaseHash = require('BaseHash');

/**
 * ShortHash instance
 * @description :: Convert any data to short string representation
 * @constructor
 */
function ShortHash(options) {
    BaseHash.apply(this, arguments);
}

/**
 * Hash data with short hash
 */
ShortHash.prototype.hash = function () {

};

module.exports = ShortHash;
