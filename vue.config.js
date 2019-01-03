var path = require('path');

module.exports = {
    devServer: {
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'node_modules')],
        disableHostCheck: true
    }
  }