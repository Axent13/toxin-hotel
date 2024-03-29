const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader',
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/colors-and-types/colors-and-types.pug',
      filename: 'colors-and-types.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/form-elements/form-elements.pug',
      filename: 'form-elements.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards/cards.pug',
      filename: 'cards.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/headers-and-footers/headers-and-footers.pug',
      filename: 'headers-and-footers.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/landing-page/landing-page.pug',
      filename: 'landing-page.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/search-room/search-room.pug',
      filename: 'search-room.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/room-details/room-details.pug',
      filename: 'room-details.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/registration/registration.pug',
      filename: 'registration.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/sign-in/sign-in.pug',
      filename: 'sign-in.html',
    }),
  ],
};
