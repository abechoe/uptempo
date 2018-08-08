const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve('dist');
const CLIENT_DIR = path.resolve('src');

module.exports = {
  context: path.join(CLIENT_DIR, 'entries'),
  entry: {
    main: './main.jsx',
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      CLIENT_DIR,
      path.resolve('node_modules'),
    ],
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('index.html'),
      inject: true,
    })
  ],
}