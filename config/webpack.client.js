const { paths } = require('./paths');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    app: paths.clientEntry,
  },
  output: {
    path: paths.clientDist,
  },
  devServer: {
    port: 3001,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
