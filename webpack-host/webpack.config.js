const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ModuleFederationPlugin } = require('@module-federation/enhanced');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'host',
    //   remotes: {
    //     remote: {
    //       external: 'http://localhost:5000/remoteEntry.js',
    //       format: 'manifest',
    //     },
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
