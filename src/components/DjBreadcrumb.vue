<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in routerList"
                        :key="index"
                        :to="item.router">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import Vue from 'vue'
import { Breadcrumb, BreadcrumbItem } from 'element-ui'

Vue.use(Breadcrumb).use(BreadcrumbItem)
export default {
  props: {
    routerList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
