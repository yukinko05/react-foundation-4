const path = require("path");
const externals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/server/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: [externals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // CSSをDOMに挿入
          "css-loader", // CSSをJavaScriptに変換
          "postcss-loader", // PostCSSを適用
        ],
      },
    ],
  },
};
