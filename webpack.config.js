const webpack = require('webpack');

const babelLoader = {
  loader: 'babel-loader',
  test: /\.jsx?$/,
  exclude: /node_modules/
}

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
  output: {
    comments: false,
  },
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      babelLoader
    ]
  },
  plugins: [
    uglifyJsPlugin
  ]
};
