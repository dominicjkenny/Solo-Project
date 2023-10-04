const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {env} = require('process');

module.exports = {
  entry: {
    index: './client/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-env', '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './client/index.html'
    })
  ],
  devServer: {
    static: {
        directory: path.resolve(__dirname),
    },
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    },
  }
}