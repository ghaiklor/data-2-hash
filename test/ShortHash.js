var assert = require('assert'),
    ShortHash = require('./../lib/ShortHash');

describe('ShortHash', function () {
    it('Should properly create instance', function () {
        var hash = new ShortHash('some data');
        assert(hash instanceof ShortHash, 'Should be instanceof ShortHash');
    });

    it('Should properly hash data', function () {
        var hash;

        hash = new ShortHash('some data');
        assert.equal(hash.hash(), 'ZEreuu', 'Should properly hash string');

        hash.setData(['some', 'data']);
        assert.equal(hash.hash(), 'ZErJJJ', 'Should properly hash array');

        hash.setData({
            foo: 'bar',
            bar: 'foo'
        });
        assert.equal(hash.hash(), 'ZwY8Iaa', 'Should properly hash object');
    });
});
