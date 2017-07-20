/* global module, require, process __dirname */

const path = require('path')
const webpack = require('webpack')

const BASE_PATH       = path.resolve(__dirname, 'src/AppBundle/Resources')
const BASE_MODEL_PATH = path.resolve(__dirname, 'app/Resources/models')
const BASE_SRC_PATH   = path.resolve(BASE_PATH, 'js')

module.exports = {
  entry: {
    polyfills: 'babel-polyfill',
    app: path.resolve(BASE_SRC_PATH, 'app/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'web/dist/js'),
    filename: '[name].bundle.js',
    publicPath: 'dist/js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.(js|json)$/,
      include: [
        BASE_MODEL_PATH
      ],
      use: [
        'json-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.bundle.js',
      minChunks: 2,
    })
  ],
  resolve: {
    alias: {
      main: BASE_SRC_PATH,
      models: BASE_MODEL_PATH
    },
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: false,
  devServer: {
    contentBase: 'web',
  }
}
