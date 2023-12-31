const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {env} = require('process');

module.exports = {
  entry: path.resolve(__dirname, 'client'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'client', 'index.html')
    })
  ],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
    proxy: {
      '/recipes': 'http://localhost:3000'
    },
  }
}