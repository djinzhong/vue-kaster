<template>
  <el-submenu index="video">
    <template slot="title">
      <i class="el-icon- iconfont icon-shipin"></i>
      <span>热点视频</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="videoList"
                    :route="{name: 'videoList'}">视频列表</el-menu-item>
      <el-menu-item index="addVideo"
                    :route="{name: 'addVideo', query: {id: 0}}">添加视频</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>
