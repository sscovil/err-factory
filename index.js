'use strict';

/**
 * Factory function to generate a custom ErrorClass.
 *
 * @param {string} name - Name of the ErrorClass to create.
 * @returns {{new(*=): ErrorClass, new(*=): ErrorClass, name: string, message: string, stack?: string}}
 */
module.exports = function errFactory(name) {
  if (typeof name !== 'string') {
    throw new TypeError('First argument must be a string.')
  }

  const ErrorClass = class extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;

      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = (new Error(message)).stack;
      }
    }
  };

  Object.defineProperty(ErrorClass, 'name', { value: name });

  return ErrorClass;
};
