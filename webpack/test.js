module.exports = {
    entry: './tests/index-spec.js',
    module: {
        loaders: [
            // transpile all files except testing sources with babel as usual
            {
                test: /\-spec.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            // transpile and instrument only testing sources with isparta
            {
                test: /\.js$/,
                exclude: /node_modules|\-spec.js$/,
                loader: 'isparta'
            }
        ]
    }
};