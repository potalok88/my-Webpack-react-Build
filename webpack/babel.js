module.exports = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: 'happypack/loader',
                },
            ]
        }
    }
}