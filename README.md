# Node.js Simple Error Factory
A super simple ES6 class factory for extending Error.

## Install

```bash
$ npm install --save simple-error-factory
```

## Usage:

```js
const errorFactory = require('simple-error-factory');

const MyCustomError = errorFactory('MyCustomError');
const err = new MyCustomError('This is a custom error!');

console.log(err instanceof MyCustomError); // true
console.log(err instanceof Error); // true
console.log(err.constructor.name); // 'MyCustomError'
console.log(err.stack); // MyCustomError: This is a custom error! ...
```

## Tests

```bash
$ npm test
```
