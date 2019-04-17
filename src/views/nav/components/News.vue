<template>
  <el-submenu index="news">
    <template slot="title">
      <i class="el-icon- iconfont icon-xinwen"></i>
      <span>新闻中心</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="newsList"
                    :route="{name: 'newsList'}">新闻列表</el-menu-item>
      <el-menu-item index="addNews"
                    :route="{name: 'addNews', query: {id: 0}}">添加新闻</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>
