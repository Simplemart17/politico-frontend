const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');

module.exports = function () {
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
          use: {
            loader: 'babel-loader',
            loader: 'url-loader?limit=100000'
          },
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, './public', 'index.html'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],
    stats: {
      colors: true,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, '../public'),
      compress: true,
      port: 5000,
      watchContentBase: true,
      progress: true,
    },
  };
};
