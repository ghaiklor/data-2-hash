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
    this.setData(new Buffer(data, 'binary'));
}

/**
 * Hash data via Adler-32 hash function
 */
Adler32Hash.prototype.hash = function () {
    var data = this.getData(),
        adler = 1,
        a = adler & 0xFFFF,
        b = (adler >>> 16) & 0xFFFF,
        i = 0,
        max = data.length,
        n, value;

    while (i < max) {
        n = Math.min(5552, max - i);

        do {
            a += data[i++] << 0;
            b += a;
        } while (--n);

        a %= BASE;
        b %= BASE;
    }

    return ((b << 16) | a) >>> 0;
};

module.exports = Adler32Hash;
