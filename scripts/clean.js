const { join } = require('path');
const exec = require('./exec');

(async () => {
  await Promise.all([
    exec(`rm -rf ${join(__dirname, '/../.next')}`),
    exec(`rm -rf ${join(__dirname, '/../node_modules')}`),
    exec(`rm -rf ${join(__dirname, '/../*lock.json')}`),
    exec(`rm -rf ${join(__dirname, '/../yarn.lock')}`),
  ]);
})();
