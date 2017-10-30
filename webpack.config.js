const HappyPack = require('happypack');
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devserver = require('./webpack/devserver')
const babel = require('./webpack/babel')
const css = require('./webpack/css')
const extractCss = require('./webpack/css.extract')
const unglifyJs = require('./webpack/js.unglify')


const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge({
        entry: {
            'main': [
                './src/client.js',
            ]
        },
        output: {
            path: PATHS.build,
            filename: 'js/bundle.js'
        },

        resolve: {
            modules: ['node_modules'],
            extensions: [".js", ".json", ".jsx", ".css"]
        },
        module: {

        },
        plugins: [
            new HappyPack({
                loaders: ['babel-loader']
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/index.html',
            }),
        ]
    },
    babel()
)

console.log(common)


module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            extractCss(),
            unglifyJs()
        ])
    }

    if (env === 'development') {
        return merge([
            common,
            devserver()
        ])
    }

}