const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: SRC_DIR + '/js/App.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["react", "es2015", "stage-2"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['style-loader', 'css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
  ]
};
