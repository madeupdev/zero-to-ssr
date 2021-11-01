const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const nodemon = require('nodemon');
const path = require('path');
const { paths } = require('../config/paths');
const clientConfig = require('../config/webpack.client');
const serverConfig = require('../config/webpack.server');

const clientCompiler = webpack(clientConfig);
const devServerOptions = clientConfig.devServer;
const devServer = new WebpackDevServer(devServerOptions, clientCompiler);

devServer.start(devServerOptions.port, () => {
  console.log(
    `Dev server listening at http://localhost:${devServerOptions.port}`
  );
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
      console.log('App has started');
    })
    .on('quit', function () {
      console.log('App has quit');
      process.exit();
    })
    .on('restart', function (files) {
      console.log('App restarted due to: ', files);
    });
});
