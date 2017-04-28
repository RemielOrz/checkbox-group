const path = require('path')
const webpack = require('webpack')
const srcPath = path.join(__dirname, '../src')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    index: path.join(srcPath, 'index.tsx')
  },
  output: {
    path: path.join(__dirname, '../lib'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    library: 'WebForm',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [ '.js', '.ts', '.tsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        include: srcPath
      }, {
        test: /\.scss?$/,
        loader: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'sass-loader'
        ],
      }, {
        test: /\.css?$/,
        loader: [
          'style-loader?sourceMap',
          'css-loader',
        ],
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProd ? '"production"' : '"development"'
      }
    })
  ]
}

// add hot-reload related code to entry chunks
if (!isProd) {
  config.entry = {
    index: path.join(srcPath, 'demo/index.tsx')
  }
  Object.keys(config.entry).forEach(function (name) {
    config.entry[name] = ['./scripts/dev-client'].concat(config.entry[name])
  })
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
  config.plugins.push(new FriendlyErrorsPlugin())
  config.plugins.push(new HTMLPlugin({
    template: 'src/demo/index.html'
  }));
} else {
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    mobx: 'mobx',
    'mobx-react': 'mobx-react'
  }
}

module.exports = config
