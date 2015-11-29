module.exports = function (type) {
    return {
        entry: './src/index.js',
        output: output,
        loaders: loaders
    };

    function output() {
        return {
            filename: 'dist/formly-material' + (type === 'prod' ? '.min.js' : '.js'),
            libraryTarget: 'umd',
            library: 'ngFormlyMaterial'
        }
    }

    function loaders() {
        return [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ];
    }
};