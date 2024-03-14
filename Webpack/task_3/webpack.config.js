const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './js/dashboard_main.js',
    header: './js/header.js',
    body: './js/body.js',
    footer: './js/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML template
      filename: 'index.html', // Name of the generated HTML file
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8564,
    open: true,
  },
};