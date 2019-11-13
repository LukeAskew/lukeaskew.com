/**
 * @file Starts a local development environment
 */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const openBrowser = require('react-dev-utils/openBrowser');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const config = require('../webpack.config');
const clean = require('./clean');

const PORT = 3000;
const HOST = process.env.HOST || 'localhost';

async function start() {
  await clean();

  const compiler = webpack(config);

  compiler.hooks.compile.tap('DevServer', () => {
    console.log('Started bundling...');
  });

  compiler.hooks.done.tap('DevServer', stats => {
    const { errors, warnings } = formatWebpackMessages(stats.toJson({}, true));

    if (errors.length) {
      console.log(['Webpack errors:', ...errors].join('\n\n'));
    }

    if (warnings.length) {
      console.log(['Webpack warnings:', ...warnings].join('\n\n'));
    }

    console.log('Finished bundling...');
  });

  const devServerConfig = {
    clientLogLevel: 'none',
    compress: true,
    contentBase: path.resolve(__dirname, '../public'),
    watchContentBase: true,
    hot: true,
    host: HOST,
    publicPath: '/',
    historyApiFallback: {
      disableDotRule: true,
    },
    quiet: true,
    port: PORT,
    overlay: false,
    before: app => {
      app.use(errorOverlayMiddleware());
    },
  };

  const devServer = new WebpackDevServer(compiler, devServerConfig);

  devServer.listen(PORT, HOST, () => {
    openBrowser(`http://${HOST}:${PORT}`);
  });
}

try {
  start();
} catch (error) {
  console.error(error);
}
