var util = require('util'),
    BaseHash = require('./BaseHash'),
    BitwiseHash = require('./BitwiseHash');

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
    var data = parseInt(new BitwiseHash(this.getData()).hash()),
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
