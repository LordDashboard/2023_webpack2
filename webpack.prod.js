const path = require("path") 
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'production',
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
            },
            {
              test: /\.scss$/,
             use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
          ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]

}