const path = require("path");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              limit: 10000,
              mimetype: "application/font-woff"
            }
          }
        ]
      },
      {
        test: /\.scss?$|\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
