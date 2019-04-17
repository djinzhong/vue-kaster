<template>
  <div>
    <el-table :data="tableData"
              height="calc(100% - 80px)"
              style="width: 100%">
      <!-- 基础数据 -->
      <el-table-column type="index"
                       width="50" />
      <dj-table-column v-for="(item,index) in newsTableList"
                       :key="index"
                       :item="item">
      </dj-table-column>
      <!-- 操作 -->
      <el-table-column width="220"
                       align="right"
                       fixed="right">
        <template slot="header"
                  slot-scope="scope">
          <el-input v-model="searchValue"
                    @keyup.enter.native="$emit('searchName', searchValue)"
                    @blur="$emit('searchName', searchValue)"
                    size="mini"
                    placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini"
                     type="primary"
                     @click.native.prevent="$router.push({name: 'addNews', query: {id: scope.row.id}})">编辑</el-button>
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
import { postNews } from 'api/index'
import { newsTableList } from '../config/table.config.js'
import { mixin } from '../config/mixin.js'
import DjPagination from 'components/DjPagination'
export default {
  mixins: [mixin], // 将props和计算属性tagsList(标签列表)混入
  components: {
    DjPagination
  },
  computed: {
    tableData: function () {
      return this.data
    }
  },
  data () {
    return {
      newsTableList: newsTableList,
      searchValue: ''
    }
  },
  created () {
    this.setTags()
  },
  methods: {
    // 标签过滤与格式化
    setTags () {
      const siteNum = 7 // 配置表中标签的位置
      this.$set(this.newsTableList[siteNum], 'formatter', this.tagFormatter)
      this.$set(this.newsTableList[siteNum], 'filters', this.tagsList)
      this.$set(this.newsTableList[siteNum], 'filterMethod', this.tagFilter)
    },
    // 标签格式化
    tagFormatter (row) {
      let data = this.tagList.filter(a => row.tags.indexOf(a.id) !== -1).map(b => b.name)
      return data || []
    },
    // 标签过滤
    tagFilter (value, row) {
      return row.tags.indexOf(value) !== -1
    },
    // 删除新闻
    delRow (id) {
      postNews('del', { id: id }).then(res => {
        this.$message.success('刪除成功')
        this.$emit('truning', this.page)
      })
    },
    // 更新新闻页码
    truning (val) {
      this.$emit('truning', val)
    }
  }
}
</script>

<style lang='stylus' scoped></style>
