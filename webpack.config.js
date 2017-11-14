'use strict'

const webpack = require('webpack')

module.exports = {
  entry: './browser/app.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'stage-2']
        }
      }
    ]
  }
}
// create a public folder for index stylesheets
// stage-2 is more experimental than es2015
// regexr
