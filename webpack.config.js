const path = require('path')

module.exports = {
  mode: 'development',
  entry: './lib/index.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'demo')
  }
}