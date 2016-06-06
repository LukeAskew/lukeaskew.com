import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import rawConfig from '../webpack.config';
import React from 'react';
import { match } from 'react-router';
import Helmet from 'react-helmet';
import AsyncProps, { loadPropsOnServer } from 'async-props';
import { renderToStaticMarkup } from 'react-dom/server';
import cache from 'memory-cache';
import routes from './routes';
import Layout from './views/Layout';

// get environment variables
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production';

// configure webpack
const webpackConfig = rawConfig(isDev);
const compiler = webpack(webpackConfig);

// create app
const app = express();

// run webpack
function bundle() {
  return new Promise((resolve, reject) => {
    compiler.run((err) => {
      if (err) {
        console.error(err);
        return reject();
      }
      console.log('Assets bundled...');
      return resolve();
    });
  });
}

// start express app
function startServer() {
  app.listen(port, () => {
    console.log(`Site running on port ${port}...`);
  });
}


// apply middleware
if (isDev) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(compression());
  app.use(express.static(webpackConfig.output.path));
}

// serve fonts
app.use('/fonts', express.static(path.resolve(__dirname, '..', 'app/fonts')));

// serve favicon
app.use(favicon(path.resolve(__dirname, '..', 'app/favicon.ico')));

// handle requests
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    // TODO add custom templates
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      // pull page from cache if its available
      const cached = cache.get(renderProps.location.pathname);

      if (!isDev && cached) {
        res.status(200).send(cached);
      } else {
        loadPropsOnServer(renderProps, {}, (err, asyncProps) => {
          const pageProps = Object.assign(renderProps, asyncProps);
          const body = renderToStaticMarkup(React.createElement(AsyncProps, pageProps));
          const head = Helmet.rewind();
          const html = renderToStaticMarkup(React.createElement(Layout, { head, body }));
          const doc = `<!doctype html>${html}`;
          res.status(200).send(doc);
          cache.put(renderProps.location.pathname, doc, 3.6e+6);
        });
      }

    } else {
      res.status(404).send('Not found');
    }
  });
});


// start server
if (isDev) {
  startServer();
} else {
  bundle().then(startServer);
}
