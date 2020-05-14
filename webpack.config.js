const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const path = require("path");
const entryPoints = require("./lib/entry");
// const entryPoints = require("./configure/entry");

module.exports = {
  entry: entryPoints,
  output: {
    publicPath: "/",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "tapcart-dashboard-components",
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        loader: "url-loader?limit=30000&name=[name]-[hash].[ext]",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
