const { paths } = require('./paths');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: paths.serverEntry,
  output: {
    path: paths.serverDist,
    filename: 'server.js',
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
            presets: [
              ['@babel/preset-env', { targets: { node: true } }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
};
