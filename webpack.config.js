/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('webpack').WebpackOptionsNormalized} */
module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'src/index.scss'), path.resolve(__dirname, 'src/index.tsx')],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin()],
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), '...'],
  },
  stats: { modules: false },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    proxy: { '/api': { target: 'http://localhost:3000', pathRewrite: { '^/api': '' } } },
  },
};
