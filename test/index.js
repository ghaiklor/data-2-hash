var assert = require('assert'),
    ShortHash = require('./../lib/ShortHash'),
    hashFactory = require('./../index');

describe('HashFactory', function () {
    it('Should properly create short hash', function () {
        var hash = hashFactory.create('short', 'some data');
        assert(hash instanceof ShortHash, 'Should be instanceof ShortHash');
    });
});
