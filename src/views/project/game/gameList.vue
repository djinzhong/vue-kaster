<template>
  <el-table :data="tableData"
            style="width: 100%"
            height="calc(100% - 40px)">
    <el-table-column type="index"
                     width="50" />
    <!-- 基础数据 -->
    <dj-table-column v-for="(item,index) in gameTableList"
                     :key="index"
                     :item="item" />
    <el-table-column label="操作"
                     width="220"
                     align="center">
      <template slot="header"
                slot-scope="scope">
        <el-input v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button type="text"
                   size="mini"
                   @click="$router.push({name: 'gameProjectDetails', query: {id: scope.row.id}})">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { gameTableList } from '../config/project.config.js' // 表格基础数据配置
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      gameTableList: gameTableList,
      search: ''
    }
  },
  computed: {
    // 对表格数据track进行检索
    tableData: function () {
      return this.data.filter(data => !this.search || data.track.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>
