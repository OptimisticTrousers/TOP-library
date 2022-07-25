const path = require("path")

module.exports = {
  entry: './src/script.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  }
}