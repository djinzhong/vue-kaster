<template>
  <el-submenu index="school">
    <template slot="title">
      <i class="el-icon- iconfont icon-xuetang"></i>
      <span>新手学堂</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="schoolList"
                    :route="{name: 'schoolList'}">学堂列表</el-menu-item>
      <el-menu-item index="addSchool"
                    :route="{name: 'addSchool', query: {id: 0}}">添加学堂</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>
