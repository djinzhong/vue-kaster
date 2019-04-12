<template>
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-tickets"></i>
      <span>大神方案</span>
    </template>
    <el-menu-item-group>
      <template slot="title">大神</template>
      <el-menu-item index="2-1"
                    :route="{name: 'manitoList'}">大神列表</el-menu-item>
      <el-menu-item index="2-2"
                    :route="{name: 'addManito', query: {id: 0}}">添加大神</el-menu-item>
      <el-menu-item index="2-3"
                    :route="{name: 'applyList'}">大神申请列表</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <template slot="title">方案</template>
      <el-menu-item index="2-3"
                    :route="{name: 'project'}">方案列表</el-menu-item>
      <el-menu-item-group>
        <template slot="title">创建方案</template>
        <el-menu-item index="2-4"
                      :route="{name: 'gameProjectList'}">即时比赛</el-menu-item>
      </el-menu-item-group>
    </el-menu-item-group>
  </el-submenu>
</template>
