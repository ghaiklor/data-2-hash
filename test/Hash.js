var assert = require('assert');
var Hash = require('../');

describe('Hash', function () {
  it('Should create empty Hash instance', function () {
    var hash = new Hash('sha');
    assert(hash instanceof Hash, 'Should be instance of Hash');
  });

  it('Should properly create empty crypto instance', function () {
    var hash;

    hash = new Hash('sha1');
    assert.equal(hash.update('test').digest(), 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3');

    hash = new Hash('md5');
    assert.equal(hash.update('test').digest(), '098f6bcd4621d373cade4e832627b4f6');

    hash = new Hash('whirlpool');
    assert.equal(hash.update('test').digest(), 'b913d5bbb8e461c2c5961cbe0edcdadfd29f068225ceb37da6defcf89849368f8c6c2eb6a4c4ac75775d032a0ecfdfe8550573062b653fe92fc7b8fb3b7be8d6');
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

  it('Should properly digest file', function (done) {
    new Hash('sha1', 'LICENSE', true).on('done', function (digest) {
      assert.equal(digest, 'ac90363e76a56d55aa5113463f78e65aa8c76d79');
      done();
    });
  });

  it('Should properly throws exceptions', function () {
    assert.throws(function () {
      new Hash('wrong-hash-bla-bla');
    }, Error);

    assert.throws(function () {
      new Hash('sha', 'But file is not exists', true);
    }, Error);
  });
});
