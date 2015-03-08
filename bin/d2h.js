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
    .parse(process.argv);

if (!!program.list) {
    for (var i = 0; i < Hash.SUPPORTED_HASHES.length; i++) {
        var hash = Hash.SUPPORTED_HASHES[i];
        process.stdout.write(chalk.yellow(hash) + ' -- ' + chalk.blue('d2h ' + hash + ' <data>') + ' || ' + chalk.blue('d2h ' + hash + ' <file> --file\n'));
    }

    process.exit(0);
} else if (!!program.file) {
    process.stdout.write('Calculating...\n');

    return new Hash(program.args[0], program.args[1], true).on('done', function (hash) {
        process.stdout.write(hash + '\n');
        process.exit(0);
    });
} else {
    process.stdout.write(new Hash(program.args[0], program.args[1]).digest() + '\n');
    process.exit(0);
}
