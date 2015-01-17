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
 * @returns {String} Returns hashed data
 */
BitwiseHash.prototype.hash = function () {
    var data = this.getData(),
        hash = 0;

    for (var i = 0; i < data.length; i++) {
        var ch = data.charCodeAt(i);
        hash = ((hash << 5) - hash) + ch;
        hash = hash & hash;
    }

    return hash;
};

module.exports = BitwiseHash;
