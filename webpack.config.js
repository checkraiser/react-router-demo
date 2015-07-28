var webpack = require('webpack');
var path = require('path');
var vendor_dir = path.join(__dirname, 'vendor');
var node_modules_dir = path.join(__dirname, 'node_modules');
var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(path);
  },
  context: __dirname ,
  entry: "./src/client.js",
  devtool: 'inline-source-map',
  output: {
      path: __dirname + '/dist',
      filename: "build.js"
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: "babel", exclude: [vendor_dir]},
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {}
  }
}

module.exports = config;
