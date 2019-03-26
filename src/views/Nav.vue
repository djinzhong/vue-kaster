<template>
  <el-menu class="el-menu-demo"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           :router="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location" />
        <span slot="title">父子通信</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/fatherToSon">
          父传子props
        </el-menu-item>
        <el-menu-item index="/sonToFather">
          子传父$emit
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu" />
      <span slot="title">兄弟通信</span>
    </el-menu-item>
    <el-menu-item index="3"
                  disabled>
      <i class="el-icon-document" />
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting" />
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import Vue from 'vue'
import { Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
Vue.use(Menu).use(MenuItem).use(MenuItemGroup).use(Submenu)
export default {
  data () {
    return {

    };
  },
  methods: {
  }
}
</script>
<style>
.el-menu-demo {
  text-align: left;
}
.el-menu-demo:not(.el-menu--collapse) {
  width: 210px;
  min-height: 400px;
}
</style>

