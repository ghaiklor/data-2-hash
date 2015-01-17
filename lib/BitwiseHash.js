var util = require('util'),
    BaseHash = require('./BaseHash');

util.inherits(BitwiseHash, BaseHash);

function BitwiseHash() {
    BaseHash.apply(this, arguments);
}

BitwiseHash.prototype.hash = function () {

};

module.exports = BitwiseHash;
