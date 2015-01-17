var util = require('util'),
    BaseHash = require('./BaseHash');

util.inherits(BitwiseHash, BaseHash);

/**
 * BitwiseHash class
 * @constructor
 */
function BitwiseHash(data) {
    BaseHash.apply(this, arguments);
}

/**
 * Hash data to 32bit integer
 * @returns {String} Returns hashed data
 */
BitwiseHash.prototype.hash = function () {
    var data = this.getData().toString(),
        result = 0;

    for (var i = 0; i < data.length; i++) {
        result = ((result << 5) - result) + data.charCodeAt(i);
        result = result & result;
    }

    return result.toString();
};

module.exports = BitwiseHash;
