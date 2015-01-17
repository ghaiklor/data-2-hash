var assert = require('assert'),
    BaseHash = require('./../lib/BaseHash');

describe('BaseHash', function () {
    it('Should create base instance', function () {
        var hash = new BaseHash('some data');
        assert(hash instanceof BaseHash, 'Should be instance of BaseHash');
    });

    it('Should create base instance with params', function () {
        var hash = new BaseHash('some data');
        assert.equal(hash._data, 'some data', 'Should properly set data');
    });

    it('Should properly get/set data', function () {
        var hash = new BaseHash('some data');
        assert.equal(hash.getData(), 'some data', 'Should properly get data');

        hash.setData('another data');
        assert.equal(hash.getData(), 'another data', 'Should properly set data');
    });

    it('Should properly check if data exists', function () {
        var hash = new BaseHash();
        assert.equal(hash.isDataExists(), false, 'Should properly check that data is not exists');

        hash.setData('some data');
        assert.equal(hash.isDataExists(), true, 'Should properly check that data is exists');
    })
});
