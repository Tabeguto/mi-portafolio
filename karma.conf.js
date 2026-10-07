module.exports = function (config) {

  config.set({

    basePath: '',

    frameworks: [
      'jasmine'
    ],

    files: [
      'src/tests/**/*.test.js'
    ],

    reporters: [
      'progress',
      'coverage'
    ],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: [
      'ChromeHeadless'
    ],

    singleRun: true,

    concurrency: Infinity

  });

};