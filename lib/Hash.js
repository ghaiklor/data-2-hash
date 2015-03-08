var crypto = require('crypto'),
    fs = require('fs'),
    util = require('util'),
    EventEmitter = require('events').EventEmitter;

util.inherits(Hash, EventEmitter);

/**
 * List of hashes that crypto is supports
 * @type {Array}
 * @private
 */
var SUPPORTED_HASHES = crypto.getHashes();

/**
 * Hash class
 * @param {String} algorithm Algorithm that hash data
 * @param {String} [data] Data to hash
 * @param {Boolean} [isFile] If data it's file location then should be true
 * @constructor
 */
function Hash(algorithm, data, isFile) {
    EventEmitter.apply(this, arguments);

    if (SUPPORTED_HASHES.indexOf(algorithm) === -1) {
        throw new Error('Unsupported algorithm');
    }

    this._setHash(crypto.createHash(algorithm));

    if (isFile) {
        if (!(fs.existsSync(data) && fs.lstatSync(data).isFile())) {
            throw new Error("File not exists");
        }

        fs.createReadStream(data)
            .on('data', function (data) {
                this.update(data);
            }.bind(this))
            .on('end', function () {
                this.emit('done', this.digest());
            }.bind(this));
    } else if (data) {
        this.update(data);
    }
}

/**
 * Get current crypto hash instance
 * @returns {crypto|*}
 * @private
 */
Hash.prototype._getHash = function () {
    return this._hash;
};

/**
 * Set crypto hash instance
 * @param {crypto} hash
 * @returns {Hash}
 * @private
 */
Hash.prototype._setHash = function (hash) {
    this._hash = hash;
    return this;
};

/**
 * Update data in crypto hash
 * @param data
 * @returns {Hash}
 */
Hash.prototype.update = function (data) {
    this._getHash().update(data);
    return this;
};

/**
 * Calculate hash
 * @returns {String}
 */
Hash.prototype.digest = function () {
    return this._getHash().digest('hex');
};

/**
 * List of supported hashes
 * @type {Array<String>}
 */
Hash.SUPPORTED_HASHES = SUPPORTED_HASHES;

module.exports = Hash;
