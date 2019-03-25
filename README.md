# 安装 Vue CLI3.0

> **node 版本要求**
> Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

可以通过下面安装命令进行

```
npm install -g @vue/cli
```

安装之后可以通过命令查看是或否安装成功

```
vue --version
```

# 创建一个项目

运行

```
vue create vue-kaster
```

可以选择默认配置，也可以根据自己的习惯进行配置，这里先选择默认配置

### 安装 vuex 和 vue-router

```
vue add router
vue add vuex
```

这个命令会自动帮你配置好 router.js 文件，也会更改你的某些文件，所以需要在确保你的项目已经备份后再进行安装

### 预处理器

```
#Sass
npm install -D sass-loader node-sass

#Less
npm install -D less-loader

#Stylus
npm install -D stylus-loader stylus
```

### 安装 element-ui

```
vue add element
```

安装后需要手动选择全局引入还是按需加载

### 文件目录配置

```
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('images', resolve('src/assets/images'))
      .set('views', resolve('src/views'))
      .set('pages', resolve('src/views/pages'))
  }
}
```
