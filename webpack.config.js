const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssFocus = require('postcss-focus');
const postcssNext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssMixins = require('postcss-mixins');


/**
 * Define entry
 * @param  {Boolean} isDev
 * @return {array}
 */
function getEntry(isDev) {

  const entry = ['./app/client'];

  if (isDev) {
    entry.push('webpack-hot-middleware/client');
  }

  return entry;

}


/**
 * Define plugins
 * @param  {Boolean} isDev
 * @return {array}
 */
function getPlugins(isDev) {

  // base plugins
  const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CONTENTFUL_ACCESS_TOKEN: JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
      },
    }),
  ];

  // environment-specific plugins
  if (isDev) {

    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    );

  } else {

    plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      // use hot-reloading css in dev, produce a file in prod.
      new ExtractTextPlugin('./main.css', {
        allChunks: true,
      })
    );

  }

  return plugins;

}

// FIXME add sourcemaps when css-loader url resolving issue is fixed
const cssLoaderOpts = 'css?importLoaders=1';

// export configuration
module.exports = (isDev) => ({
  entry: getEntry(isDev),
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'main.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  progress: true,
  target: 'web',
  devtool: (isDev) ? 'inline-source-map' : undefined,
  plugins: getPlugins(isDev),
  module: {
    loaders: [{
      test: /(\.js$|\.jsx$)/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: (isDev) ? ['react-hmre'] : undefined,
      },
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: (isDev) ? `style!${cssLoaderOpts}!postcss-loader` : ExtractTextPlugin.extract('style', `${cssLoaderOpts}?minimize=true!postcss-loader`),
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
      loader: 'url?limit=10000',
    }],
  },
  postcss: (wp) => ([
    postcssImport({
      addDependencyTo: wp,
    }),
    postcssCustomProperties(),
    postcssCustomMedia(),
    postcssMixins(),
    postcssNested(),
    postcssFocus(),
    postcssNext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ]),
});
