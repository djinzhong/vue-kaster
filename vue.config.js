const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    devtool: 'cheap-module-eval-source-map'
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('images', resolve('src/assets/images'))
      .set('views', resolve('src/views'))
      .set('pages', resolve('src/views/pages'))
  },

  lintOnSave: undefined
}