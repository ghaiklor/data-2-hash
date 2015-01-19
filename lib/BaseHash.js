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
function BaseHash() {
    this._data = new Buffer(0);
}

BaseHash.prototype = Object.create({
    constructor: BaseHash,

    /**
     * Update data content
     * @param {*} data New data
     * @param {String} [encoding] Encoding type
     */
    update: function (data, encoding) {
        this._data = new Buffer(data, encoding);
        return this;
    },

    /**
     * Hash data
     */
    digest: function () {
        throw new Error(NEED_IMPLEMENT_MESSAGE);
    }
});

module.exports = BaseHash;
