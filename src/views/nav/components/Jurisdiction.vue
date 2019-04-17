<template>
  <el-submenu index="jurisdiction">
    <template slot="title">
      <i class="el-icon- iconfont icon-quanxianziyuanguanli"></i>
      <span>权限管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="userList"
                    :route="{name: 'userList'}">用户列表</el-menu-item>
      <el-menu-item index="addUser"
                    :route="{name: 'addUser'}">添加用户</el-menu-item>
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
