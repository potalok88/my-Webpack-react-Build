const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['happypack/loader?id=css'],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('./css/[hash].css'),
    ],
  };
};
