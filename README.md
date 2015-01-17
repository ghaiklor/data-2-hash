# data-2-hash [![Build Status](https://travis-ci.org/ghaiklor/data-2-hash.svg)](https://travis-ci.org/ghaiklor/data-2-hash)

Collection of hashing functions for NodeJS and any data

## Getting Started

Install last version of `data-2-hash` by executing

```shell
npm install data-2-hash # Local
npm install -g data-2-hash # Global (will be available CLI)
```

You can require `data-2-hash` in your NodeJS project and use it like this

```javascript
var d2h = require('data-2-hash');
console.log(d2h.create('short', 'some data here').hash());
```

## CLI

If you install `data-2-hash` as globule module, you can use CLI.

```shell
data-2-hash bitwise "some data here"
data-2-hash short "some data here"
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
