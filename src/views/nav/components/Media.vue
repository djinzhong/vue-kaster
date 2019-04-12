<template>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-tickets"></i>
      <span>新闻视频</span>
    </template>
    <el-menu-item-group>
      <template slot="title">新闻</template>
      <el-menu-item index="1-1"
                    :route="{name: 'newsList'}">新闻列表</el-menu-item>
      <el-menu-item index="1-2"
                    :route="{name: 'addNews', query: {id: 0}}">添加新闻</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <template slot="title">视频</template>
      <el-menu-item index="1-3"
                    :route="{name: 'videoList'}">视频列表</el-menu-item>
      <el-menu-item index="1-4"
                    :route="{name: 'addVideo', query: {id: 0}}">添加视频</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>
