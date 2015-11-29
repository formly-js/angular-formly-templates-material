var webpack = require('webpack');
var build = require('./build')('prod');

module.exports = {
    entry: build.entry,
    output: build.output(),
    devtool: 'source-map',
    module: {
        loaders: build.loaders()
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};