// test/js/index.js

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

var testsContext = require.context('..', true, '**/*.spec.js')

testsContext.keys().forEach(testsContext)
module.exports = testsContext
