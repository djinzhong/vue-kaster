<template>
  <div>
    <el-table :data="tableData"
              height="calc(100% - 80px)"
              style="width: 100%">
      <!-- 基础数据 -->
      <el-table-column type="index"
                       width="50" />
      <dj-table-column v-for="(item,index) in videoTableList"
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
                     @click.native.prevent="$router.push({name: 'addVideo', query: {id: scope.row.id}})">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click.native.prevent="delRow(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dj-pagination :allPage="allPage"
                   :page="page"
                   @truning="truning" />
  </div>
</template>

<script>
import { videoTableList } from '../config/table.config.js'
import DjPagination from 'components/DjPagination'
export default {
  components: {
    DjPagination
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    page: Number,
    allPage: Number
  },
  computed: {
    tableData: function () {
      return this.data.filter(data => !this.searchValue || data.title.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  },
  data () {
    return {
      videoTableList: videoTableList,
      searchValue: ''

    }
  },
  methods: {
    // 删除视频
    delRow (id) {
      console.log(id)
    },
    truning () {

    }
  }
}
</script>

<style lang='stylus' scoped></style>
