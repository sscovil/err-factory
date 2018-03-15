# Node.js Error Factory
A super simple ES6 class factory for extending Error.

## Install

```bash
$ npm install --save err-factory
```

## Usage

Pass a single error class name:

```js
const errFactory = require('err-factory');

const MyCustomError = errFactory('MyCustomError');
const err = new MyCustomError('This is a custom error!');

console.log(err instanceof MyCustomError); // true
console.log(err instanceof Error); // true
console.log(err.constructor.name); // 'MyCustomError'
console.log(err.stack); // MyCustomError: This is a custom error! ...
```

Pass an array of error class names:

```js
const errFactory = require('err-factory');

const errors = errFactory(['MyCustomError', 'AnotherError']);
const err1 = new errors.MyCustomError('This is a custom error!');
const err2 = new errors.AnotherError('This is another error!');

console.log(err1 instanceof errors.MyCustomError); // true
console.log(err1 instanceof Error); // true
console.log(err1.constructor.name); // 'MyCustomError'
console.log(err1.stack); // MyCustomError: This is a custom error! ...

console.log(err2 instanceof errors.AnotherError); // true
console.log(err2 instanceof Error); // true
console.log(err2.constructor.name); // 'AnotherError'
console.log(err2.stack); // AnotherError: This is another error! ...
```

## Tests

```bash
$ npm test
```
