<template>
  <div>
    <div class='horse-menu'>
      <el-button type='primary'
                 @click="$router.push({name: 'addhorse', query: {id: 0}})"
                 icon='el-icon-circle-plus-outline'>增加</el-button>
      <el-input v-model='search'
                size='mini'
                class='menu-search'
                @keyup.enter.native.stop='searchKeyup'
                placeholder='输入关键字搜索' />
    </div>
    <el-table :data='horseData'
              class='horse-table'
              height='calc(100% - 120px)'
              style='width: 100%'>
      <el-table-column type='index'
                       :index='indexMethod'
                       width='50'></el-table-column>
      <el-table-column prop='id'
                       width='50'
                       label='ID'>
      </el-table-column>
      <el-table-column prop='name'
                       width='100'
                       label='名称'>
      </el-table-column>
      <el-table-column width='100'
                       label='战衣'>
        <template slot-scope='scope'>
          <img :src='scope.row.icon'
               alt=''
               width='50px'
               height='50px'>
        </template>
      </el-table-column>
      <el-table-column width='200'
                       label='评语'>
        <template slot-scope='scope'>
          <el-popover width='200'
                      trigger='click'>
            <div v-html='scope.row.comment'></div>
            <el-button slot='reference'>查看详情</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop='age'
                       width='50'
                       label='年龄'>
      </el-table-column>
      <el-table-column width='50'
                       label='性别'>
        <template slot-scope='scope'>
          {{scope.row.sex | typeFilter}}
        </template>
      </el-table-column>
      <el-table-column label='体重(榜)'
                       width='120'>
        <template slot-scope='scope'>
          {{scope.row.h_weight}}（{{scope.row.w_change}}）
        </template>
      </el-table-column>
      <el-table-column prop='ability'
                       label='能力'>
      </el-table-column>
      <el-table-column prop='condition'
                       label='状态'>
      </el-table-column>
      <el-table-column prop='score'
                       label='评分'>
      </el-table-column>
      <el-table-column prop='win'
                       label='独赢比例'>
      </el-table-column>
      <el-table-column prop='place'
                       label='位置比例'>
      </el-table-column>
      <el-table-column prop='first'
                       label='第一'>
      </el-table-column>
      <el-table-column prop='second'
                       label='第二'>
      </el-table-column>
      <el-table-column prop='third'
                       label='第三'>
      </el-table-column>
      <el-table-column prop='total'
                       label='场数'>
      </el-table-column>
      <el-table-column fixed='right'
                       label='操作'
                       width='120'>
        <template slot-scope='scope'>
          <el-button @click="$router.push({name: 'addhorse', query: {id: scope.row.id}})"
                     type='text'
                     size='small'>编辑</el-button>
          <el-button @click='delClick(scope.row.id)'
                     type='text'
                     size='small'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class='horse-pagination'>
      <el-pagination background
                     layout='prev, pager, next'
                     :total='total'
                     @current-change='handleCurrentChange'></el-pagination>
    </div>
  </div>
</template>

<script>
import { postHorse } from 'api/index'
export default {
  data () {
    return {
      horseData: [], // 马匹列表
      page: 1, // 页码
      currentPage1: 10, // 一页总数
      allPage: 0, // 总页数
      search: '' // 检索词
    }
  },
  computed: {
    total () {
      return this.currentPage1 * this.allPage - 1
    }
  },
  created () {
    this._getHorse()
  },
  filters: {
    // 马匹性别解析
    typeFilter: function (value) {
      if (!value) return ''
      switch (+value) {
        case 1:
          return '公'
        case 2:
          return '母'
        case 3:
          return '阉'
        default:
          return '未知'
      }
    }
  },
  methods: {
    // 请求马匹列表数组
    _getHorse () {
      postHorse('lists', {
        name: this.search,
        page: this.page
      }).then(res => {
        if (res) this.getHorse(res)
      })
    },
    // 请求马匹列表成功
    getHorse (res) {
      this.horseData = res.list
      if (res.allPage) {
        this.allPage = res.allPage
      }
    },
    // 删除马匹
    _delHorse (id) {
      postHorse('del', { id: id }).then(res => {
        if (res) this.delHorse(res)
      })
    },
    // 删除成功
    delHorse (res) {
      this.$message({
        type: 'success',
        message: '删除成功'
      })
      this._getHorse()
    },
    // 删除按钮点击
    delClick (id) {
      this._delHorse(id)
    },
    // 页码改变
    handleCurrentChange (val) {
      this.page = val
      this._getHorse()
    },
    // 搜索回车事件
    searchKeyup () {
      this._getHorse()
    },
    // 计算序号
    indexMethod (index) {
      return (this.page - 1) * 10 + index + 1
    }
  }
}
</script>

<style lang='stylus' scoped>
.horse-menu
  display flex
  justify-content space-between
  align-items center
  .menu-search
    width 200px
.horse-table
  margin-top 20px
.horse-pagination
  position fixed
  padding 10px
  bottom 10px
</style>
