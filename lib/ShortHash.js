var util = require('util'),
    BaseHash = require('./BaseHash');

util.inherits(ShortHash, BaseHash);

/**
 * Code table
 * @type {String}
 * @private
 */
var CODE_TABLE = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Length of code table
 * @type {Number}
 */
var BINARY_LENGTH = CODE_TABLE.length;

/**
 * ShortHash class
 * @constructor
 */
function ShortHash(data) {
    BaseHash.apply(this, arguments);
}

/**
 * Hash any data to short string representation
 * @returns {String} Returns hashed string
 */
ShortHash.prototype.hash = function () {
    function bitwise(str) {
        var data = str.toString(),
            result = 0;

        for (var i = 0; i < data.length; i++) {
            result = ((result << 5) - result) + data.charCodeAt(i);
            result = result & result;
        }

        return result.toString();
    }

    var data = parseInt(bitwise(this.getData())),
        negative = data < 0,
        result = '',
        codeTableIndex;

    data = Math.abs(data);

    while (data >= BINARY_LENGTH) {
        codeTableIndex = data % BINARY_LENGTH;
        data = Math.floor(data / BINARY_LENGTH);
        result += CODE_TABLE[codeTableIndex];
    }

    if (data > 0) {
        result += CODE_TABLE[codeTableIndex];
    }

    return negative ? 'Z' + result : result;
};

module.exports = ShortHash;
