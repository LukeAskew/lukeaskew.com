/**
 * @file Empties the build destination folder
 */
const path = require('path');
const { emptyDir } = require('fs-extra');

module.exports = async function clean() {
  console.log('Started clean...');

  await emptyDir(path.resolve(__dirname, '../build'));

  console.log('Finished clean...');
};
