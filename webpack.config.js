const path = require("path");
const buildMode = require("yargs").argv.env == "dev" ? "development" : "production";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: buildMode,
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        library: "$",
        libraryTarget: "umd",
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: ['/node_modules/'],
            use: {
              loader: "babel-loader"
            }
          }
        ]
      }
}