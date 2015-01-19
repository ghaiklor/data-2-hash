#!/usr/bin/env node

var program = require('commander'),
    Hash = require('./../index'),
    pkg = require('./../package.json');

program
    .version(pkg.version)
    .usage("<hash-function> <data>")
    .option('-l, --list', 'Print all available hashing functions')
    .parse(process.argv);

if (!!program.list) {
    Hash.SUPPORTED_HASHES.forEach(function (hash) {
        console.log(hash);
    });
} else {
    console.log(new Hash(program.args[0], program.args[1]).digest());
}
