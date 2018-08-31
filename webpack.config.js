const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve('dist');
const CLIENT_DIR = path.resolve('src');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    context: path.join(CLIENT_DIR, 'entries'),
    mode: 'development',
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
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      port: 9000,
      hotOnly: true,
    },
  };
};