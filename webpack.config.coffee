path = require 'path'
webpack = require 'webpack'

module.exports =
  entry: './src/f-editor.coffee'
  devtool: 'source-map'
  devServer: open: yes
  plugins: [new webpack.optimize.UglifyJsPlugin minimize: yes]
  output:
    path: path.join __dirname, 'dist/'
    publicPath: 'dist/'
    filename: 'f-editor.js'
  resolve:
    extensions: ['', '.js', '.cjsx', '.coffee', '.styl']
  module:
    loaders: [
      # { test: /\.cjsx$/, loaders: ['coffee', 'cjsx'] }
      { test: /\.coffee$/, loader: 'coffee' }
    ]
