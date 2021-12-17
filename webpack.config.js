const path = require('path');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, 'server', 'public'),
    filename: 'bundle.js'
  },
  mode: 'development'
}