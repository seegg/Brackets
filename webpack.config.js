const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./client/index.tsx'],
  output: {
    path: path.join(__dirname, 'server', 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  resolve: {
<<<<<<< HEAD
    extensions: ['.js', '.jsx', '.ts', '.tsx']
||||||| 4323a59
    extensions: ['.js', '.jsx']
=======
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
>>>>>>> cell
  },
  devtool: 'source-map'
}