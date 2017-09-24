const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const pug = require('./webpack/pug')
const devserver = require('./webpack/devserver')
const sass = require('./webpack/sass')
const css = require('./webpack/css')
const extractCss = require('./webpack/css.extract')
const unglifyJs = require('./webpack/js.unglify')
const images = require('./webpack/images')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge({
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'blog': PATHS.source + '/pages/blog/blog.js',
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug',
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: PATHS.source + '/pages/blog/blog.pug',
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug(),
    images()
)


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
            devserver(),
            sass(),
            css()
        ])
    }

}