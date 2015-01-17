var assert = require('assert'),
    BitwiseHash = require('./../lib/BitwiseHash'),
    ShortHash = require('./../lib/ShortHash'),
    hashFactory = require('./../index');

describe('HashFactory', function () {
    it('Should properly create bitwise hash', function () {
        var hash = hashFactory.create('bitwise', 'some data');
        assert(hash instanceof BitwiseHash, 'Should be instanceof BitwiseHash');
    });

    it('Should properly create short hash', function () {
        var hash = hashFactory.create('short', 'some data');
        assert(hash instanceof ShortHash, 'Should be instanceof ShortHash');
    });
});
