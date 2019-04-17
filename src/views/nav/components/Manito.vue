<template>
  <el-submenu index="manito">
    <template slot="title">
      <i class="el-icon- iconfont icon-zhuanjiarenzheng"></i>
      <span>大神推荐</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="manitoList"
                    :route="{name: 'manitoList'}">大神列表</el-menu-item>
      <el-menu-item index="addManito"
                    :route="{name: 'addManito', query: {id: 0}}">添加大神</el-menu-item>
      <el-menu-item index="applyList"
                    :route="{name: 'applyList'}">大神申请列表</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  props: {
    index: String
  }
}
</script>
