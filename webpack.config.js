require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const devserver = require('./webpack/devserver');
const babel = require('./webpack/babel');
const css = require('./webpack/styles/css');
const cssProd = require('./webpack/styles/css.prod');
const unglifyJs = require('./webpack/js.unglify');


const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const isVendorModule = module =>
  // returns true for everything in node_modules
  module.context && module.context.indexOf('node_modules') !== -1;


const getStyleLoaders = (env) => {
  if (env === 'production') {
    return 'css-loader?modules&importLoaders=2&sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true';
  }
  return 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded&sourceMap';
};

const common = env => merge(
  {
    entry: {
      main: ['babel-polyfill', './src/client.js'],
    },
    output: {
      path: PATHS.build,
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[chunkhash].js',
    },

    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.json', '.jsx', '.css'],
    },
    plugins: [
      new HappyPack({
        id: 'babel',
        threads: 4,
        loaders: ['babel-loader'],
      }),
      new HappyPack({
        id: 'css',
        threads: 4,
        loaders: [getStyleLoaders(env)],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        filename: 'index.html',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: isVendorModule,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      }),
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        exclude: [/vendor(.*?)\.js$/, /manifest(.*?)\.js$/],
      }),
    ],
  },
  babel(),
);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common(),
      cssProd(),
      unglifyJs(),
    ]);
  }
  return merge([
    common(),
    css(),
    devserver(),
  ]);
};
