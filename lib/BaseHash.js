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
    if (typeof options === 'string') {
        this.setData(options);
    } else if (options.data) {
        this.setData(options.data);
    } else {
        throw new Error('You need provide data');
    }
}

BaseHash.prototype = Object.create({
    constructor: BaseHash,

    /**
     * Get data from current hashing instance
     * @returns {*}
     */
    getData: function () {
        return this.data;
    },

    /**
     * Set data that need to hash
     * @param {*} data
     * @returns {BaseHash}
     */
    setData: function (data) {
        this.data = data;
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
