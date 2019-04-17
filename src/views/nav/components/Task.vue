<template>
  <el-submenu index="task">
    <template slot="title">
      <i class="el-icon- iconfont icon-renwu"></i>
      <span>日常任务</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="sign"
                    :route="{name: 'sign'}">签到配置</el-menu-item>
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
