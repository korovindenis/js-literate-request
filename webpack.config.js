const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
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
          },
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
        ]
      }
}