var Hash = require('../');

var licenseHash = new Hash('sha', 'LICENSE', true);
licenseHash.on('done', function (sha) {
  console.log(sha);
});
