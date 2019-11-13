/**
 * @file Copies static files to build artifacts folder.
 */
const fs = require('fs-extra');

module.exports = async function copy() {
  console.log('Starting copy...');

  await fs.copy('public', 'build', {
    dereference: true,
    filter: file => !file.match(/\.html$/),
  });

  console.log('Finished copy...');
};
