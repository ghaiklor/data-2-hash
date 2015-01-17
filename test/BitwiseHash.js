var assert = require('assert'),
    BitwiseHash = require('./../lib/BitwiseHash');

describe('BitwiseHash', function () {
    it('Should create instance', function () {
        var hash = new BitwiseHash('some data');
        assert(hash instanceof BitwiseHash, 'Should be instance of BitwiseHash');
    });

    it('Should properly hash data', function () {
        var hash;

        hash = new BitwiseHash('some data');
        assert.equal(hash.hash(), '-642587818', 'Should properly hash string data');

        hash.setData(['another', 'data']);
        assert.equal(hash.hash(), '-689840973', 'Should properly hash array data');

        hash.setData({
            foo: 'bar',
            bar: 'foo'
        });
        assert.equal(hash.hash(), '-1074417128', 'Should properly hash object data');
    });
});
