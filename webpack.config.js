import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import postcssFocus from 'postcss-focus';
import postcssNext from 'postcss-cssnext';
import postcssReporter from 'postcss-reporter';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssMixins from 'postcss-mixins';


/**
 * Define entry
 * @param  {Boolean} isDev
 * @return {array}
 */
function getEntry(isDev) {

  const entry = ['./app/index'];

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

const cssLoaderOpts = 'css?importLoaders=1&sourceMap';

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
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?limit=10000&name=fonts/[name].[ext]&mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?limit=10000&name=fonts/[name].[ext]&mimetype=application/font-woff',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?limit=10000&name=fonts/[name].[ext]&mimetype=application/octet-stream',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?limit=10000&name=fonts/[name].[ext]',
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
