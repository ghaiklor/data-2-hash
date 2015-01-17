/**
 * Message for errors when some method is not implemented
 * @type {String}
 * @private
 */
var NEED_IMPLEMENT_MESSAGE = "This method need to implement";

/**
 * BaseHash class
 * @constructor
 */
function BaseHash(options) {
    if (!options) {
        throw new Error('You must provide data');
    }

    if (Object.prototype.toString.call(options) === '[object Object]') {
        this.setData(options.data);
    } else {
        this.setData(options);
    }
}

BaseHash.prototype = Object.create({
    constructor: BaseHash,

    /**
     * Get data from current hashing instance
     * @returns {*}
     */
    getData: function () {
        return this._data;
    },

    /**
     * Set data that need to hash
     * @param {*} data
     * @returns {BaseHash}
     */
    setData: function (data) {
        this._data = data;
        return this;
    },

    /**
     * Hash data
     */
    hash: function () {
        throw new Error(NEED_IMPLEMENT_MESSAGE);
    }
});

module.exports = BaseHash;
