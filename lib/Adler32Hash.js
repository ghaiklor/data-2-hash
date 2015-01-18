var util = require('util'),
    BaseHash = require('./BaseHash');

util.inherits(Adler32Hash, BaseHash);

/**
 * Largest prime
 * @private
 */
var BASE = 65521;

/**
 * Adler32 class
 * @param data
 * @constructor
 */
function Adler32Hash(data) {
    BaseHash.apply(this, arguments);
}

/**
 * Hash data via Adler-32 hash function
 */
Adler32Hash.prototype.hash = function () {
    var data = this.getData().toString(),
        s1 = 1,
        s2 = 0;

    for (var i = 0; i < data.length; i++) {
        s1 = (s1 + data.charCodeAt(i)) % 65521;
        s2 = (s2 + s1) % 65521;
    }

    return (s2 << 16) + s1;
};

module.exports = Adler32Hash;
