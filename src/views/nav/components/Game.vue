<template>
  <el-submenu index="game">
    <template slot="title">
      <i class="el-icon- iconfont icon-zhuanjiarenzheng"></i>
      <span>比赛中心</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="horse"
                    :route="{name: 'horse'}">骏马列表</el-menu-item>
      <el-menu-item index="caballero"
                    :route="{name: 'caballero'}">骑师练马师</el-menu-item>
      <el-menu-item index="gameList"
                    :route="{name: 'gameList'}">比赛列表</el-menu-item>
      <el-menu-item index="site"
                    :route="{name: 'site'}">场地列表</el-menu-item>
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
