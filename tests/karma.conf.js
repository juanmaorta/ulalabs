var path = require('path');

// Karma configuration
module.exports = function(config) {
    'use strict';

    config.set({

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['angular', 'jasmine'],

        angular: ['mocks'],

        // list of files / patterns to load in the browser
        files: [
            '../node_modules/babel-polyfill/dist/polyfill.js',
            '**/*.spec.js',
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap'],
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                root: [
                    path.resolve(__dirname, '../src'),
                ],
            },
            module: {
                preLoaders: [
                    {
                        test: /\.js$/,
                        exclude: [/node_modules/, /\.spec\.js/],
                        loader: 'isparta-instrumenter-loader',
                    },
                ],
                loaders: [
                    {
                        test: /\.js$/,
                        include: [ path.join(__dirname, '../src')],
                        loader: 'babel-loader',
                    },
                    {
                        test:   /\.json/,
                        loader: 'json',
                    },
                ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage'],

        coverageReporter: {
            type : 'html',
            dir : '../build/',
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
    });
};