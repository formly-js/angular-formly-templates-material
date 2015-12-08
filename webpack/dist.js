var webpack = require('webpack');
var build = require('./build')('dist');
var pkg = require('../package.json');

module.exports = {
    entry: build.entry,
    output: build.output(),
    module: {
        loaders: build.loaders()
    },
    plugins: [
        new webpack.BannerPlugin(pkg.name + " JavaScript Library v" + pkg.version + "\n" +
            "\n" +
            "@license MIT (http://license.angular-formly.com)\n" +
            "\n" +
            "built with ♥ by " + pkg.author)
    ]
};