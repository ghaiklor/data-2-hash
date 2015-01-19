#!/usr/bin/env node

var program = require('commander'),
    Hash = require('./../index'),
    pkg = require('./../package.json');

program
    .version(pkg.version)
    .usage("<hash-function> <data>")
    .parse(process.argv);

console.log(new Hash(program.args[0]).update(program.args[1]).digest());
