import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CSSTreeShakePlugin from 'css-tree-shake-plugin';

export default {
  debug: false,
  devtool: 'cheap-module-source-map',
  noInfo: false,
  target: 'web',

  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    //Generate external CSS file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    //Cachebust by changing filename using MD5 Hash
    new WebpackMd5Hash(),

    //Chunk bundle to multiple files
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    //Create HTML file that include reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true
      },
      inject: true,
      heapToken: '2663632632'
    }),

    //Remove duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Build for production
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // Minify
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // Treeshaking CSS
    new CSSTreeShakePlugin()
  ],

  module: {
    options: {
      presets: [
        [ 'es2015', { modules: false } ]
      ]
    },

    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')}
    ]
  }
};
