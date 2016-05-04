var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './public/js');
var APP_DIR = path.resolve(__dirname, './src');

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:9090',
        APP_DIR + '/app.js',
    ],

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/js/'
    },

    resolve: {
        root: [
            path.resolve(__dirname, './src'),
        ],
    },

    module: {
        loaders: [
            {
                test : /\.js/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test:   /\.json/,
                loader:'json',
            },
            {
                test:   /\.scss/,
                loaders: ['style', 'css', 'sass'],
            },
            {
                test:   /\.html/,
                loader:'html',
            },
        ]
    },

    devServer: {
        port: 9090,
        hot: true,
        contentBase: 'public/',
        stats: { colors: true },
        historyApiFallback: true,
    },


};
