module.exports = {
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ["", ".js", ".html"]
    },
    externals: {
        angular: 'angular'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'html'
            }
        ]
    }
};