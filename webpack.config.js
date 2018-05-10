const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/observables/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }]
  },
  watch: true,
  output: {
    filename: './bundle.js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin()
  ]
};
