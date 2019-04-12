<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%"
              height="100%">
      <el-table-column type="index"
                       width="50" />
      <!-- 基础数据 -->
      <dj-table-column v-for="(item,index) in manitoTableList"
                       :key="index"
                       :item="item" />
      <!-- 操作 -->
      <el-table-column width="220"
                       align="right"
                       fixed="right">
        <template slot="header"
                  slot-scope="scope">
          <el-input v-model="searchValue"
                    size="mini"
                    placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini"
                     type="primary"
                     @click.native.prevent="$router.push({name: 'addManito', query: {id: scope.row._id}})"
                     v-if="+scope.row.type === 2">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     v-if="+scope.row.type === 2"
                     @click.native.prevent="delRow(scope.row._id)">删除</el-button>
          <el-button size="mini"
                     @click.native.prevent="forbidRow(scope.row._id, scope.row.status)"
                     :type="+scope.row.status === 1 ? 'info' : 'success'">{{+scope.row.status === 1 ? '禁用' : '启用'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { postOkami } from 'api/index'
import { manitoTableList } from '../config/manito.config.js'
export default {
  components: {

  },
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
      manitoTableList: manitoTableList,
      searchValue: ''
    }
  },
  computed: {
    // 对表格数据进行name检索
    tableData: function () {
      return this.data.filter(data => !this.searchValue || data.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  },
  methods: {
    delRow (id) {
      postOkami('del', { id: id }).then(res => {
        this.$emit('renewal')
        this.$message.success('删除成功')
      })
    },
    forbidRow (id, status) {
      postOkami('limit', { id: id, type: +status === 1 ? 1 : 2 }).then(res => {
        this.$emit('renewal')
        this.$message.success('禁用成功')
      })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
