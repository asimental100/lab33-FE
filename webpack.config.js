/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const env = Object.entries({ ...require('dotenv').config(), ...process.env })
  .reduce((acc, [key, value]) => {
    acc[`process.env.${key}`] = value;
    return acc;
  }, {});

// eslint-disable-next-line
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 7891,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin(env),
    new CopyPlugin({
      patterns: [
        { from: 'public' },
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('postcss-import')(),
                  require('autoprefixer')(),
                  require('postcss-nested')(),
                  require('postcss-simple-vars')()
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
