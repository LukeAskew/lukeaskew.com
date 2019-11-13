/**
 * @file Creates an optimized build of the application.
 */
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const clean = require('./clean');
const copy = require('./copy');
const config = require('../webpack.config');

async function build() {
  try {
    await clean();
    await copy();

    await new Promise((resolve, reject) => {
      webpack(config).run((err, stats) => {
        if (err) {
          return reject(err);
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
          return reject(info.errors);
        }

        if (stats.hasWarnings()) {
          return resolve(info.warnings);
        }

        return resolve();
      });
    });

    console.log('Finished bundling...');
  } catch (error) {
    console.error(error);
  }
}

build();
