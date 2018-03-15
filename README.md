# Node.js Error Factory
A super simple ES6 class factory for extending Error.

## Install

```bash
$ npm install --save simple-error-factory
```

## Usage:

```js
const errFactory = require('err-factory');

const MyCustomError = errFactory('MyCustomError');
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
