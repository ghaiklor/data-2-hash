var BitwiseHash = require('./lib/BitwiseHash'),
    ShortHash = require('./lib/ShortHash');

/**
 * Hash factory for hash functions
 * @constructor
 */
function HashFactory() {
}

HashFactory.prototype = Object.create({
    constructor: HashFactory,

    /**
     * Create new hash instance
     * @param {String} type Type of hash
     * @param {Object} data
     * @returns {*}
     */
    create: function (type, data) {
        switch (type) {
            case 'bitwise':
                return this.createBitwise(data);
            case 'short':
                return this.createShort(data);
            default:
                throw new Error('Unrecognized type -> ' + type);
        }
    },

    /**
     * Create bitwise hashing function
     * @param {Object} data
     * @returns {BitwiseHash}
     */
    createBitwise: function (data) {
        return new BitwiseHash(data);
    },

    /**
     * Create short hashing function
     * @param {Object} data
     * @returns {ShortHash}
     */
    createShort: function (data) {
        return new ShortHash(data);
    }
});

module.exports = new HashFactory();
