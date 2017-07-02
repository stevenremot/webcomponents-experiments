var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'dashboard': './js/dashboard',
    'elements/random-sentence': './js/dashboard-elements/random-sentence',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
