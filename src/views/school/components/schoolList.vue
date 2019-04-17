<template>
  <div>
    <el-table :data="tableData"
              height="100%"
              style="width: 100%">
      <!-- 基础数据 -->
      <el-table-column type="index"
                       width="50" />
      <dj-table-column v-for="(item,index) in schoolTableList"
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
                     @click.native.prevent="$router.push({name: 'addSchool', query: {id: scope.row.id}})">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click.native.prevent="delRow(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { postSchool } from 'api/index'
import { schoolTableList } from '../config/table.config.js'
import { typeFormatter } from 'utils/formatter'
import { tableFilter } from 'utils/filter'
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
  computed: {
    // title检索
    tableData: function () {
      return this.data.filter(data => !this.searchValue || data.title.toLowerCase().includes(this.searchValue.toLowerCase()))
    },
    // 将目录配置的code 筛选出来
    codeList: function () {
      let list = [
        { text: '马球运动', value: 1000 },
        { text: '马术比赛', value: 999 }
      ]
      let catalogueList = this.data.filter(item => +item.type === 3 || +item.type === 4)
      let catalogue = catalogueList.map(item => {
        return {
          text: item.title,
          value: +item.code
        }
      })
      return list.concat(catalogue)
    }
  },
  data () {
    return {
      schoolTableList: schoolTableList, // 表格配置
      searchValue: '' // 搜索词
    }
  },
  created () {
    this.setCode()
  },
  methods: {
    // code 过滤与格式化
    setCode () {
      const siteNum = 3
      this.$set(this.schoolTableList[siteNum], 'formatter', typeFormatter('code', this.codeList))
      this.$set(this.schoolTableList[siteNum], 'filters', this.codeList)
      this.$set(this.schoolTableList[siteNum], 'filterMethod', tableFilter('code'))
    },
    delRow (id) {
      postSchool('operate', {
        id: id,
        operate_type: 3
      }).then(res => {
        if (res) {
          this.$message.success('删除成功')
          this.$emit('renewalSchool')
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
