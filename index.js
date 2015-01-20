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
 * @param {String} algorithm Algorithm that hashing data
 * @param {*} [data] Data to hash
 * @constructor
 */
function Hash(algorithm, data) {
    EventEmitter.apply(this, arguments);

    if (SUPPORTED_HASHES.indexOf(algorithm) === -1) {
        return this.emit("error", "Unsupported algorithm")
    }

    this._setHash(crypto.createHash(algorithm));

    if (fs.existsSync(data) && fs.lstatSync(data).isFile()) {
        var stream = fs.createReadStream(data);
        stream.on('data', function (data) {
            this.update(data);
        }.bind(this));
        stream.on('end', function () {
            this.emit('done', this.digest());
        }.bind(this));
    } else if (data) {
        this.update(data);
        this.emit('done', this.digest());
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
