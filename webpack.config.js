const path = require("path");
const webpack = require('webpack');
const cleanPLugin = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 8080,
    hot: true,

},
  

  devtool: 'cheap-module-source-map', // Moved outside of the plugins array
  plugins: [
    new cleanPLugin.CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.SourceMapDevToolPlugin({}), // Uncomment this if you want to use it
  ],
};