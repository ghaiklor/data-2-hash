var util = require('util'),
    BaseHash = require('./BaseHash');

util.inherits(BitwiseHash, BaseHash);

/**
 * BitwiseHash class
 * @description :: Convert data to 32bit integer
 * @constructor
 */
function BitwiseHash(options) {
    BaseHash.apply(this, arguments);
}

/**
 * Hash data by bitwise function
 * @returns {Number} Returns hashed data
 */
BitwiseHash.prototype.hash = function () {
    var data = this.getData().toString(),
        hash = 0;

    for (var i = 0; i < data.length; i++) {
        hash = ((hash << 5) - hash) + data.charCodeAt(i);
        hash = hash & hash;
    }

    return hash;
};

module.exports = BitwiseHash;
