#!/usr/bin/env node

var program = require('commander'),
    chalk = require('chalk'),
    Hash = require('../'),
    pkg = require('../package.json');

program
    .version(pkg.version)
    .usage('<hash-function> <data> [options]')
    .option('-l, --list', 'Print all available hash functions')
    .option('-f, --file', 'Execute hashing of file')
    .option('-t, --text', 'Execute hashing of text')
    .parse(process.argv);

if (!!program.list) {
    Hash.SUPPORTED_HASHES.forEach(function (hash) {
        console.log(chalk.yellow(hash) + ' - ' + chalk.blue('d2h ' + hash + ' <data>') + ' | ' + chalk.blue('d2h ' + hash + ' <file> --file'));
    });
} else if (!!program.file) {
    new Hash(program.args[0], program.args[1], true).on('done', function (hash) {
        console.log(hash);
    });
} else {
    console.log(new Hash(program.args[0g], program.args[1]).digest());
}
