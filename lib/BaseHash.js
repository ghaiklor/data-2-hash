/**
 * BaseHash class
 * @constructor
 */
function BaseHash(options) {
    if (!(options.data)) {
        throw new Error('You need provide data');
    }

    this.setData(options.data);
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
    }
});

module.exports = BaseHash;
