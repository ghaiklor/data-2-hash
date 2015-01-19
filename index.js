var crypto = require('crypto'),
    fs = require('fs');

/**
 * List of hashes that crypto is supports
 * @type {Array}
 * @private
 */
var CRYPTO_SUPPORTED_HASHES = crypto.getHashes();

/**
 * List of hashes that implemented on my own
 * @type {Array}
 * @private
 */
var CUSTOM_SUPPORTED_HASHES = [];

/**
 * Hash class
 * @param {String} algorithm Algorithm that hashing data
 * @param {*} [data] Data to hash
 * @constructor
 */
function Hash(algorithm, data) {
    if (CRYPTO_SUPPORTED_HASHES.indexOf(algorithm) === -1 && CUSTOM_SUPPORTED_HASHES.indexOf(algorithm) === -1) {
        throw new Error('Unsupported algorithm');
    }

    this._setHash(crypto.createHash(algorithm));

    if (fs.existsSync(data) && fs.lstatSync(data).isFile()) {
        var stream = fs.createReadStream(data);
        stream.on('data', function (data) {
            // FIXME: callback when hash is updated
            this.update(data);
        }.bind(this));
    } else if (data) {
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

/**
 * List of supported hashes
 * @type {Array<String>}
 */
Hash.SUPPORTED_HASHES = CRYPTO_SUPPORTED_HASHES.concat(CUSTOM_SUPPORTED_HASHES);

module.exports = Hash;
