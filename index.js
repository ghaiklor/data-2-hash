var crypto = require('crypto');

/**
 * List of hashes that crypto is supports
 * @type {String}
 * @private
 */
var SUPPORTED_HASHES = crypto.getHashes();

/**
 * Hash class
 * @param {String} algorithm Algorithm that hashing data
 * @param {*} [data] Data to hash
 * @constructor
 */
function Hash(algorithm, data) {
    if (SUPPORTED_HASHES.indexOf(algorithm) === -1) {
        throw new Error('Unsupported algorithm');
    }

    this._setHash(crypto.createHash(algorithm));

    if (data) {
        this.update(data);
    }
}

Hash.prototype = Object.create({
    constructor: Hash,

    /**
     * Get current crypto hash instance
     * @returns {crypto|*}
     * @private
     */
    _getHash: function () {
        return this._hash;
    },

    /**
     * Set crypto hash instance
     * @param {crypto} hash
     * @returns {Hash}
     * @private
     */
    _setHash: function (hash) {
        this._hash = hash;
        return this;
    },

    /**
     * Update data in crypto hash
     * @param data
     * @returns {Hash}
     */
    update: function (data) {
        this._getHash().update(data);
        return this;
    },

    /**
     * Calculate hash
     * @returns {String}
     */
    digest: function () {
        return this._getHash().digest('hex');
    }
});

module.exports = Hash;
