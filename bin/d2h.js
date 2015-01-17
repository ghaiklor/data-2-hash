#!/usr/bin/env node

var program = require('commander'),
    hashFactory = require('./../index'),
    pkg = require('./../package.json');

function bitwise(data) {
    return hashFactory.create('bitwise', data).hash();
}

function short(data) {
    return hashFactory.create('short', data).hash();
}

program
    .version(pkg.version)
    .usage("<hash-function> <data>");

program
    .command('bitwise [data]', 'Convert data to 32bit integer via bitwise')
    .action(bitwise);

program
    .command('short [data]', 'Convert data to short string')
    .action(short);

program.parse(process.argv);
