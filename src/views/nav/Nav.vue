<template>
  <el-menu class="el-menu-demo"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           :default-active="$route.path"
           unique-opened
           router>
    <media />
    <project />
    <el-menu-item index="3"
                  :route="{name: 'exercise'}">
      <i class="el-icon-printer"></i>
      <span slot="title">练习</span>
    </el-menu-item>
    <el-menu-item v-if="isLogin"
                  index="4"
                  :route="{name: 'login'}">
      <i class="el-icon- iconfont icon-dingbudaohang-zhangh"></i>
      <span slot="title">退出登录</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import media from './components/Media'
import project from './components/Project'
import Vue from 'vue'
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

Vue.use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup)
export default {
  components: {
    media, project
  },
  computed: {
    isLogin: function () {
      return localStorage.getItem('isLogin')
    }
  },
  methods: {
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
