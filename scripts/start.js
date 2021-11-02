const webpack = require('webpack');
const nodemon = require('nodemon');
const path = require('path');
const { paths } = require('../config/paths');
const clientConfig = require('../config/webpack.client');
const serverConfig = require('../config/webpack.server');

const clientCompiler = webpack(clientConfig);
clientCompiler.watch({}, () => {
  console.log('Client is ready');
});

const serverPromise = () =>
  new Promise((resolve) => {
    const serverCompiler = webpack(serverConfig);
    serverCompiler.watch({}, resolve);
  });

serverPromise().then(() => {
  nodemon({
    script: path.join(paths.serverDist, 'server.js'),
    ext: '.js',
    watch: [paths.serverDist],
  });

  nodemon
    .on('start', function () {
      console.log('Server has started');
    })
    .on('quit', function () {
      console.log('Server has quit');
      process.exit();
    })
    .on('restart', function (files) {
      console.log('Server restarted due to: ', files);
    });
});
