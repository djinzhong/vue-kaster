<template>
  <el-menu class="el-menu-demo"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           :default-active="$route.name"
           unique-opened
           router>
    <nav-news />
    <nav-video />
    <nav-school />
    <nav-manito />
    <nav-project />
    <nav-task />
    <nav-jurisdiction />
    <el-menu-item index="exercise"
                  :route="{name: 'exercise'}">
      <i class="el-icon-printer"></i>
      <span slot="title">练习</span>
    </el-menu-item>
    <el-menu-item index="gengxinjindu">
      <i class="el-icon- iconfont icon-gengxinjindu"></i>
      <span slot="title">更新APP</span>
    </el-menu-item>
    <el-menu-item index="4"
                  :route="{name: 'login'}">
      <i class="el-icon- iconfont icon-dingbudaohang-zhangh"></i>
      <span slot="title">退出登录</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import navNews from './components/News'
import navVideo from './components/Video'
import navManito from './components/Manito'
import navProject from './components/Project'
import navSchool from './components/School'
import navTask from './components/Task'
import navJurisdiction from './components/Jurisdiction'
import Vue from 'vue'
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

Vue.use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup)
export default {
  components: {
    navNews, navVideo, navManito, navProject, navSchool, navTask, navJurisdiction
  },
  created () {
    let group = localStorage.getItem('group')
    console.log(group)
  }
}
</script>

<style lang='stylus' scoped>
.el-menu-demo
  text-align left
  width 230px
.el-menu-demo:not(.el-menu--collapse)
  width 230px
</style>
