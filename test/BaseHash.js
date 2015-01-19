var assert = require('assert'),
    BaseHash = require('./../lib/BaseHash');

describe('BaseHash', function () {
    it('Should create base instance', function () {
        var hash = new BaseHash();
        assert(hash instanceof BaseHash, 'Should be instance of BaseHash');
    });

    it('Should properly update hash', function () {
        var hash = new BaseHash().update('some data');
        assert.equal(hash._data, 'some data', 'Should properly set data');
    });
});
