const path = require('path');
const webpack = require('webpack');

const BASE_SRC_PATH = path.resolve(__dirname, 'src/AppBundle/Resources/js');

module.exports = {
  entry: {
    'polyfill': 'babel-polyfill',
    'app': path.resolve(BASE_SRC_PATH, 'app/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'web/dist/js'),
    filename: '[name].bundle.js'
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
      test: /\.json$/,
      loader: "json-loader"
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  resolve: {
    alias: {
      main: BASE_SRC_PATH
    },
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: false
};
