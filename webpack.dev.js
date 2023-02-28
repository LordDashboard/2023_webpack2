const path = require("path") 
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: './dist',
  },
    entry: './src/client/index.js',
    output: {
        filename: 'main.js'
      },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
          // Simulate the removal of files
          dry: true,
          // Write Logs to Console
          verbose: true,
          // Automatically remove all unused webpack assets on rebuild
          cleanStaleWebpackAssets: true,
          protectWebpackAssets: false
  })
    ]

}