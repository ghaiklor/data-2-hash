#!/usr/bin/env node

var program = require('commander'),
    hashFactory = require('./../index'),
    pkg = require('./../package.json');

program
    .version(pkg.version)
    .usage("<hash-function> <data>");

program
    .command('bitwise [data]')
    .description('Convert data to 32bit integer via bitwise')
    .action(function (data) {
        console.log(hashFactory.create('bitwise', data).hash());
    });

program
    .command('short [data]')
    .description('Convert data to short hash string')
    .action(function (data) {
        console.log(hashFactory.create('short', data).hash());
    });

program.parse(process.argv);
