const webpack = require('webpack')
const config={
    mode: 'production',
    entry: './index.js',
    output: {
        path: __dirname + '/public',
        filename: 'cutcopy.js',
        libraryTarget: "umd",
        globalObject: "this",
        library: "copy"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
}
module.exports = config