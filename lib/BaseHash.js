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
function BaseHash(data) {
    this.setData(data);
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
     * Check if data exists in instance
     * @returns {Boolean}
     */
    isDataExists: function () {
        return !!this._data;
    },

    /**
     * Hash data
     */
    hash: function () {
        throw new Error(NEED_IMPLEMENT_MESSAGE);
    }
});

module.exports = BaseHash;
