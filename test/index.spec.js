'use strict';

const errorFactory = require('../index');
const { expect } = require('chai');

it('returns an error class with the name passed in as the first argument', function() {
  let err;
  let message;

  const MyError = errorFactory('MyError');
  message = 'This is a customer error!';
  err = new MyError(message);

  expect(err).to.be.instanceof(MyError);
  expect(err).to.be.instanceof(Error);
  expect(err.constructor.name).to.equal('MyError');
  expect(err.message).to.equal(message);

  const MyOtherError = errorFactory('MyOtherError')
  message = 'This is another customer error!';
  err = new MyOtherError(message);

  expect(err).to.be.instanceof(MyOtherError);
  expect(err).to.be.instanceof(Error);
  expect(err.constructor.name).to.equal('MyOtherError');
  expect(err.message).to.equal(message);
});

it ('throws a TypeError if first argument is not a string', function() {
  const args = [undefined, null, 123, true, [1,2,3], {}, NaN, () => {}];

  args.forEach((arg) => {
    expect(() => errorFactory(arg)).to.throw(TypeError);
  });
});
