#!/usr/bin/env node

var program = require('commander'),
    hashFactory = require('./../index'),
    pkg = require('./../package.json');


function bitwise() {
    return hashFactory.create('bitwise').hash();
}

function short() {
    return hashFactory.create('short').hash();
}

program.version(pkg.version);
program.usage('[options]');
program.command('bitwise').action(bitwise);
program.command('short').action(short);

program.parse(process.argv);
