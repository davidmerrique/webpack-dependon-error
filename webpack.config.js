const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js",
    home: {
      import: "./src/home.js",
      dependOn: "app",
    },
  },
  output: {
    path: path.resolve("./dist"),
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [new HtmlWebpackPlugin({ minify: false })],
};
