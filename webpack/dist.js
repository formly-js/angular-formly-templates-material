var build = require('./build')('dist');

module.exports = {
    entry: build.entry,
    output: build.output(),
    module: {
        loaders: build.loaders()
    }
};