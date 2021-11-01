const path = require('path');
const cwd = process.cwd();

const resolveLocation = (...location) => path.join(cwd, ...location);

const paths = {
  clientDist: resolveLocation('dist', 'client'),
  clientSrc: resolveLocation('src', 'client'),
  clientEntry: resolveLocation('src', 'client', 'entry'),
  serverDist: resolveLocation('dist', 'server'),
  serverSrc: resolveLocation('src', 'server'),
  serverEntry: resolveLocation('src', 'server', 'entry'),
  config: resolveLocation('config'),
};

module.exports = { paths };
