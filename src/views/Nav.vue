<template>
  <el-menu class="el-menu-demo"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           :default-active="$route.path"
           unique-opened
           router>
    <el-menu-item index="/">
      <i class="el-icon-menu" />
      <span slot="title">主页</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-phone-outline" />
        <span slot="title">组件通信</span>
      </template>
      <el-menu-item-group index="1-1">
        <template slot="title">父子通信</template>
        <el-menu-item index="1-1-1"
                      :route="{name: 'fatherToSon'}">
          父传子props
        </el-menu-item>
        <el-menu-item index="1-1-2"
                      :route="{name: 'sonToFather'}">
          子传父$emit
        </el-menu-item>
        <el-menu-item index="1-1-3"
                      :route="{name: 'secret'}">
          特性继承
        </el-menu-item>
      </el-menu-item-group>

      <el-submenu index="1-2">
        <template slot="title">祖孙通信</template>
        <el-menu-item index="1-4-1"
                      :route="{name: 'bubbing'}">冒泡与捕获</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-setting" />
        <span slot="title">常用组件</span>
      </template>
      <el-menu-item index="2-1" :route="{name: 'editor'}">富文本编辑器</el-menu-item>
    </el-submenu>

    <el-menu-item index="3">
      <i class="el-icon-edit-outline" />
      <span slot="title">element组件</span>
    </el-menu-item>

    <el-menu-item index="4">
      <i class="el-icon-document" />
      <span slot="title">ECharts</span>
    </el-menu-item>

    <el-menu-item index="5">
      <i class="el-icon-edit" />
      <span slot="title">vue实战经验</span>
    </el-menu-item>

    <el-menu-item index="6">
      <i class="el-icon-refresh" />
      <span slot="title">vue生命周期</span>
    </el-menu-item>

    <el-menu-item index="7">
      <i class="el-icon-setting" />
      <span slot="title">vue常用组件</span>
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
  width: 240px;
  min-height: 400px;
}
</style>

