const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV } = process.env
const path = require('path')
const pkg = require('./package.json')

const isDev = !NODE_ENV
const isProd = NODE_ENV === 'production'

module.exports = {
  entry: [
    './dev'
  ],
  devtool: isDev ? '#eval' : false,
  watch: isDev,

  output: {

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },

  resolve: {
    alias: {

    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'${NODE_ENV}'`,
      },
      __pkgVer: `'${pkg.version}'`,
    }),

    new HtmlWebpackPlugin({
      title: pkg.name,
      template: './dev/index.html',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}
