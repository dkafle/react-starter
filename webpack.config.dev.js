import path from 'path';
import Webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  target: 'web',

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],

  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },

  plugins: [
    // Create HTML file that include reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }
};
