const path = require("path");
const cleanPLugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },

  devtool: "source-map", // Moved outside of the plugins array
  plugins: [
    new cleanPLugin.CleanWebpackPlugin(),
  ],
};
