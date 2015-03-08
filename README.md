# data-2-hash

![Build Status](https://img.shields.io/travis/ghaiklor/data-2-hash.svg) ![Coverage](https://img.shields.io/coveralls/ghaiklor/data-2-hash.svg) ![Downloads](https://img.shields.io/npm/dm/data-2-hash.svg) ![npm version](https://img.shields.io/npm/v/data-2-hash.svg) ![dependencies](https://img.shields.io/david/ghaiklor/data-2-hash.svg) ![dev dependencies](https://img.shields.io/david/dev/ghaiklor/data-2-hash.svg) ![License](https://img.shields.io/npm/l/data-2-hash.svg)

The main approach of this module is CLI interface for `crypto`. But you can include it and use as another module.

## Getting Started

Install last version of `data-2-hash` by executing:

```shell
npm install data-2-hash --save # Local
npm install -g data-2-hash # Global (will be available CLI)
```

You can require `data-2-hash` in your NodeJS project and use it.

```javascript
var Hash = require('data-2-hash');

// Create empty hash instance
var shasum = new Hash('sha');
console.log(shasum.update('test').digest());

// Create hash instance with predefined data
console.log(new Hash('md5', 'test').digest());

// Calculate hash for some file
new Hash('md5', 'file.md', true).on('done', function(digest) {
    console.log(digest);
});
```

## CLI

If you install `data-2-hash` as global module, you can use CLI.

```shell
d2h --help # Usage
d2h --list # Print all supported hashes
```

## License

The MIT License (MIT)

Copyright (c) 2015 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
