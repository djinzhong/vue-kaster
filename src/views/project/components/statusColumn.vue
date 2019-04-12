<template>
  <!-- 表格状态列 -->
  <el-table-column prop="status"
                   label="方案状态"
                   width="100"
                   :filters="statusList"
                   :filter-method="filterStatus"
                   :formatter="statusFilter">
  </el-table-column>
</template>

<script>
import Vue from 'vue'
import { scrollbar } from 'element-ui'
Vue.use(scrollbar)
export default {
  data () {
    return {
      statusList: [
        { text: '禁用', value: -1 },
        { text: '未开奖', value: 0 },
        { text: '命中', value: 1 },
        { text: '未命中', value: 2 }
      ]
    }
  },
  methods: {
    // 状态筛选
    filterStatus (value, row) {
      return row.status === value
    },
    // 格式化状态
    statusFilter (row, column) {
      let list = this.statusList.filter(item => item.value === +row.status)
      return list[0].text ? list[0].text : '未知'
    }
  }
}
</script>
