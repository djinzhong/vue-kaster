<template>
  <el-submenu index="project">
    <template slot="title">
      <i class="el-icon- iconfont icon-fanganguanli-"></i>
      <span>比赛方案</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="project"
                    :route="{name: 'project'}">方案列表</el-menu-item>
      <el-menu-item index="gameProjectList"
                    :route="{name: 'gameProjectList'}">即时比赛</el-menu-item>
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
