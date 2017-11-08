module.exports = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: 'happypack/loader?id=css',
        },
      ],
    },
  };
};
