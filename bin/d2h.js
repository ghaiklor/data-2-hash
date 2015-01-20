#!/usr/bin/env node

var program = require('commander'),
    Hash = require('./../index'),
    pkg = require('./../package.json');

program
    .version(pkg.version)
    .usage("[options] <hash-function> <data>")
    .option('-l, --list', 'Print all available hashing functions')
    .option('-f, --file', 'Hash file')
    .option('-t, --text', 'Hash text')
    .parse(process.argv);

if (!!program.list) {
    Hash.SUPPORTED_HASHES.forEach(function (hash) {
        console.log(hash);
    });
} else if (!!program.file) {
    new Hash(program.args[0], program.args[1], true).on('done', function (hash) {
        console.log(hash);
    });
} else {
    console.log(new Hash(program.args[0], program.args[1]).digest());
}
