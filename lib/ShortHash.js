var util = require('util'),
    BaseHash = require('./BaseHash'),
    BitwiseHash = require('./BitwiseHash');

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

util.inherits(ShortHash, BaseHash);

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
 * @returns {String} Returns hashed string
 */
ShortHash.prototype.hash = function () {
    var data = new BitwiseHash(this.getData()).hash(),
        sign = data < 0 ? '-' : '',
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

    return (sign + result).replace('-', 'Z');
};

module.exports = ShortHash;
