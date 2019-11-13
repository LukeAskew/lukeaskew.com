const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');

const __DEV__ = process.env.NODE_ENV !== 'production';

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  index: path.resolve(__dirname, 'src/index.tsx'),
  html: path.resolve(__dirname, 'public/index.html'),
  output: path.resolve(__dirname, 'build'),
};

module.exports = {
  mode: __DEV__ ? 'development' : 'production',
  bail: !__DEV__,
  devtool: __DEV__ ? 'cheap-module-source-map' : false,
  entry: [
    __DEV__ && require.resolve('react-dev-utils/webpackHotDevClient'),
    PATHS.index,
  ].filter(Boolean),
  output: {
    path: !__DEV__ ? PATHS.output : undefined,
    pathinfo: __DEV__,
    publicPath: '/',
    filename: __DEV__ ? '[name].js' : '[name].[contenthash:8].js',
    chunkFilename: __DEV__
      ? '[name].chunk.js'
      : '[name].[contenthash:8].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  optimization: {
    minimize: !__DEV__,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        cache: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              cache: true,
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: __dirname,
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: PATHS.src,
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            include: PATHS.src,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              cacheDirectory: true,
              cacheCompression: false,
              compact: !__DEV__,
            },
          },
          // {
          //   test: /\.(js)$/,
          //   exclude: /@babel(?:\/|\\{1,2})runtime/,
          //   loader: require.resolve('babel-loader'),
          //   options: {
          //     babelrc: false,
          //     configFile: false,
          //     compact: false,
          //     presets: [
          //       [
          //         require.resolve('babel-preset-react-app/dependencies'),
          //         { helpers: true },
          //       ],
          //     ],
          //     cacheDirectory: true,
          //     cacheCompression: false,
          //     sourceMaps: false,
          //   },
          // },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
          },
        ],
      },
    ],
  },
  plugins: [
    __DEV__ && new webpack.HotModuleReplacementPlugin(),
    __DEV__ && new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: PATHS.html,
        },
        !__DEV__
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined
      )
    ),
    !__DEV__ &&
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
    new ForkTsCheckerWebpackPlugin({
      async: __DEV__,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      reportFiles: ['**', '!**/__tests__/**'],
      silent: true,
    }),
  ].filter(Boolean),
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
};
