/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').WebpackOptionsNormalized} */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  stats: { modules: false },
  module: {
    rules: [
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
