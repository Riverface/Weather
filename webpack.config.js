const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: "development",
  target: 'node',
  entry: './src/main.js',
 
  output: {
 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './docs'
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      title: 'VirtualPet',
      template: './src/index.html',  
      inject: 'head'
    }),
    new Dotenv()
  ],
  
  module: {
 
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }


    ]
  }
};