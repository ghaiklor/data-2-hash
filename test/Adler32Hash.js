var assert = require('assert'),
    Adler32Hash = require('./../lib/Adler32Hash');

describe('Adler32Hash', function () {
    it('Should properly create instance', function () {
        var hash = new Adler32Hash('test');
        assert(hash instanceof Adler32Hash, 'Should be instance of Adler32Hash');
    });

    it('Should properly hash data', function () {
        var hash = new Adler32Hash();

        hash.setData('some data');
        assert.equal(hash.hash(), '293667695', 'Should properly hash string');
    });
});
