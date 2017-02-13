const webpackConf = require('./webpack.config')

module.exports = (config) => {
  config.set({
    basePath: __dirname,

    frameworks: ['jasmine'],

    files: [
      'src/__tests__/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/__tests__/*.spec.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          ...webpackConf.module.rules,
          {
            test: /\.js$/,
            include: /src/,
            exclude: /(node_modules|bower_components|__tests__)/,
            use: ['babel-istanbul-loader'],
          }
        ]
      }
    },

    reporters: ['mocha', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,
    concurrency: Infinity
  })
}
