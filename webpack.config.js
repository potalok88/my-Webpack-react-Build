const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack');
const devserver = require('./webpack/devserver')
const babel = require('./webpack/babel')
const css = require('./webpack/styles/css')
const cssProd = require('./webpack/styles/css.prod')
const unglifyJs = require('./webpack/js.unglify')


const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};


const getStyleLoaders = (env) => {
    if(env === 'production'){
        return 'css-loader?modules&importLoaders=2&sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
    }
    return 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded&sourceMap'
}

const common = (env) => {

    return merge({
            entry: {
                'main': [
                    './src/client.js',
                ]
            },
            output: {
                path: PATHS.build,
                filename: 'js/[hash].js'
            },

            resolve: {
                modules: ['node_modules'],
                extensions: [".js", ".json", ".jsx", ".css"]
            },
            plugins: [
                new HappyPack({
                    id: 'babel',
                    threads: 4,
                    loaders: ['babel-loader']
                }),
                new HappyPack({
                    id: 'css',
                    threads: 4,
                    loaders: [getStyleLoaders(env)]
                }),
                new HtmlWebpackPlugin({
                    template: 'src/index.ejs',
                    filename: 'index.html',
                }),
            ]
        },
        babel(),
    )
}

module.exports = function (env) {
    if (env === 'production') {

        return merge([
            common(),
            cssProd(),
            unglifyJs()
        ])
    }
    if (env === 'development') {
        return merge([
            common(),
            css(),
            devserver()
        ])
    }

}