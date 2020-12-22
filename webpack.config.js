const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './main.js',
    output: {
        path: __dirname + '/public',
        filename: 'cutcopy.js',
        // libraryTarget: "umd",
        // globalObject: "this",
        // library: "cutcopy"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
}