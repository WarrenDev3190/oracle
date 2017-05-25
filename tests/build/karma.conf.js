// tests/build/karma.conf.js

var webpackConf = require('../../build/webpack.base')

delete webpackConf.entry

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    files: [
      '../../node_modules/es6-promise/dist/es6-promise.auto.js',
      '../**/*.spec.js'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-babel-preprocessor',
      'karma-chai',
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      'testsPath': ['babel'],
      '../**/*.spec.js': ['webpack']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015', 'stage-0']
      }
    },
    reporters: ['mocha'],
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
