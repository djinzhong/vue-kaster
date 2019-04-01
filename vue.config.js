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
      .set('assets', resolve('src/assets')) // 静态资源目录
      .set('components', resolve('src/components')) //公共组件位置
      .set('images', resolve('src/assets/images')) // 图片目录
      .set('style', resolve('src/assets/style')) // 样式文件管理
      .set('utils', resolve('src/assets/utils')) // 工具函数
      .set('router', resolve('src/router')) // 路由文件管理
      .set('store', resolve('src/store')) // vuex文件管理
      .set('views', resolve('src/views'))
      .set('pages', resolve('src/views/pages')) // 页面组件
  },

  lintOnSave: undefined
}