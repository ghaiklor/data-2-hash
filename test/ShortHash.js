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
        console.log(hash.hash());

        hash.setData(['some', 'data']);
        console.log(hash.hash());

        hash.setData({
            foo: 'bar',
            bar: 'foo'
        });
        console.log(hash.hash());
    });
});
