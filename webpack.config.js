const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
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
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env'],
                plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-classes", "@babel/plugin-transform-modules-commonjs"]
              }
            }
          }
        ]
      }
}