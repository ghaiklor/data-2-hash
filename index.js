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
     * @param {Object} options
     * @returns {*}
     */
    create: function (type, options) {
        switch (type) {
            case 'bitwise':
                return this.createBitwise(options);
            case 'short':
                return this.createShort(options);
            default:
                throw new Error('Unrecognized type -> ' + type);
        }
    },

    /**
     * Create bitwise hashing function
     * @param {Object} options
     * @returns {BitwiseHash}
     */
    createBitwise: function (options) {
        return new BitwiseHash(options);
    },

    /**
     * Create short hashing function
     * @param {Object} options
     * @returns {ShortHash}
     */
    createShort: function (options) {
        return new ShortHash(options);
    }
});

module.exports = HashFactory;
