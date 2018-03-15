'use strict';

/**
 * Factory function to generate a custom Error class.
 *
 * @param {string} name - Name of the Error class to create.
 * @returns {{new(*=): ErrorClass, new(*=): ErrorClass, name: string, message: string, stack?: string}}
 * @throws {TypeError} - If @name is not a string.
 * @private
 */
function buildErrorClass(name) {
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
}

/**
 * Public API for error factory.
 *
 * @param {string|[string]} names - Name (or array of names) of Error class(es) to generate.
 * @returns {object} - Custom Error class, or map of custom Error classes if @names is an array.
 * @throws {TypeError} - If @name is not a string or array of strings.
 */
module.exports = function errFactory(names) {
  if (Array.isArray(names)) {
    const errors = {};

    names.forEach((name) => {
      errors[name] = buildErrorClass(name);
    });

    return errors;
  }

  return buildErrorClass(names);
};
