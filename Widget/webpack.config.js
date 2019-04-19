const path = require('path');

module.exports = {
  entry: './frontend/widgets.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './bundle.js'
  },
  devtool: 'inline-source-map',
  // devtool: "#inline-source-map",
  // mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/, //a regular expression that tests what kind of files to run through this loader.
        exclude: /(node_modules)/, //ignore these files
        use: {
          loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
          query: {
            // options for the loader
            presets: ['@babel/env', '@babel/react'] //transpile back to es 5 and convert jsx code
          }
        },
      }
    ]
  },
  resolve: {
    extensions: [".js", '.jsx', '*']
  }
}