const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './js/index',
  },

  devtool: 'source-map',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
