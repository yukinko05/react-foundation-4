const path = require("path");

module.exports = {
  entry: "./src/client/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
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
