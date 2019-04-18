<template>
  <el-menu class="el-menu-demo"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           :default-active="$route.name"
           unique-opened
           router>
    <nav-news v-if="isNews" />
    <nav-video v-if="isVideo" />
    <nav-school v-if="isSchool" />
    <nav-manito v-if="isManito" />
    <nav-project v-if="isProject" />
    <nav-game />
    <nav-task />
    <nav-jurisdiction v-if="isReport" />
    <el-menu-item index="exercise"
                  :route="{name: 'exercise'}">
      <i class="el-icon-printer"></i>
      <span slot="title">练习</span>
    </el-menu-item>
    <el-menu-item index="gengxinjindu">
      <i class="el-icon- iconfont icon-gengxinjindu"></i>
      <span slot="title">更新APP</span>
    </el-menu-item>
    <el-menu-item :index="null"
                  @click="loginOut">
      <i class="el-icon- iconfont icon-dingbudaohang-zhangh"></i>
      <span slot="title">退出登录</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import Cookies from 'js-cookie'
import navNews from './components/News'
import navVideo from './components/Video'
import navManito from './components/Manito'
import navProject from './components/Project'
import navGame from './components/Game'
import navSchool from './components/School'
import navTask from './components/Task'
import navJurisdiction from './components/Jurisdiction'
import Vue from 'vue'
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

const groudData = {
  news: 101,
  school: 102,
  video: 103,
  game: 104,
  project: 109,
  okami: 110,
  sys: 111,
  report: 112
}

Vue.use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup)
export default {
  components: {
    navNews,
    navVideo,
    navManito,
    navProject,
    navSchool,
    navTask,
    navJurisdiction,
    navGame
  },
  methods: {
    loginOut () {
      Cookies.remove('token')
      location.reload()
    }
  },
  computed: {
    group () {
      if (this.$store.getters.group.length) return this.$store.getters.group
      return [101, 102, 103, 104, 109, 110, 111, 112]
    },
    isNews () {
      return this.group.some(a => +a === groudData.news)
    },
    isVideo () {
      return this.group.some(a => +a === groudData.video)
    },
    isSchool () {
      return this.group.some(a => +a === groudData.school)
    },
    isManito () {
      return this.group.some(a => +a === groudData.okami)
    },
    isProject () {
      return this.group.some(a => +a === groudData.project)
    },
    isSys () {
      return this.group.some(a => +a === groudData.sys)
    },
    isReport () {
      return this.group.some(a => +a === groudData.report)
    }
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
