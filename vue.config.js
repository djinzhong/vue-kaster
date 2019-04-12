const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets')) // 静态资源目录
      .set('config', resolve('src/assets/config')) // 配置文件
      .set('font', resolve('src/assets/font')) // 字体文件
      .set('images', resolve('src/assets/images')) // 图片文件
      .set('utils', resolve('src/assets/utils')) // 工具函数
      .set('api', resolve('src/assets/api')) // 后台调用接口
      .set('style', resolve('src/assets/style')) // 样式文件
      .set('components', resolve('src/components')) // 公共组件位置
      .set('router', resolve('src/router')) // 路由配置
      .set('views', resolve('src/views')) // 组件页面
  },
  lintOnSave: undefined
}
