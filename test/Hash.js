var assert = require('assert'),
    Hash = require('./../index');

describe('Hash', function () {
    it('Should create empty Hash instance', function () {
        var hash = new Hash('sha1');
        assert(hash instanceof Hash, 'Should be instance of Hash');
    });

    it('Should properly digest hash', function () {
        var hash;

        hash = new Hash('sha1', 'test');
        assert.equal(hash.digest(), 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3');

        hash = new Hash('md5', 'test');
        assert.equal(hash.digest(), '098f6bcd4621d373cade4e832627b4f6');

        hash = new Hash('whirlpool', 'test');
        assert.equal(hash.digest(), 'b913d5bbb8e461c2c5961cbe0edcdadfd29f068225ceb37da6defcf89849368f8c6c2eb6a4c4ac75775d032a0ecfdfe8550573062b653fe92fc7b8fb3b7be8d6');
    });
});