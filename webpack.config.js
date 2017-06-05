const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/AppBundle/Resources/js/index.js'
  },
  output: {
    path: './web/dist/js',
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
    modules: [
      './src/AppBundle/Resources/js/',
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: false
};
