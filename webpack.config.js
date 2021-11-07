const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Dev',
        }),
      ],
      module: {
        rules: [
          { //css loader
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
           { //Font Loader
             test: /\.(woff|woff2|eot|ttf|otf)$/i,
             type: 'asset/resource',
           },
        ],
      },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    //publicPath: '/',
  },

};