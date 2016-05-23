import express from 'express';
import path from 'path';
import compression from 'compression';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import rawConfig from'./webpack.config';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';
import routes from './app/routes';
import Layout from './app/views/Layout';

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
  })
}

// start express app
function startServer() {
  app.listen(port, () => {
    console.log('Site running...');
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


// handle requests
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    // TODO add custom templates
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const html = renderToStaticMarkup(<Layout><RouterContext {...renderProps} /></Layout>);
      res.status(200).send(`<!doctype html>${html}`);
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
