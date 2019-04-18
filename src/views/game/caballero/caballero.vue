<template>
  <div>
    <div class="caballero-menu">
      <el-button type="primary"
                 @click="$router.push({name: 'addcaballero', query: {id: 0}})"
                 icon="el-icon-circle-plus-outline">增加</el-button>
      <el-radio-group v-model="radio3"
                      @change="radioChange">
        <el-radio-button label="1">骑师</el-radio-button>
        <el-radio-button label="2">练马师</el-radio-button>
      </el-radio-group>
      <el-input v-model="search"
                class="menu-search"
                @keyup.enter.native.stop="searchKeyup"
                placeholder="输入关键字搜索" />
    </div>
    <el-table :data="caballeroData"
              class="caballero-table"
              height="calc(100% - 120px)"
              style="width: 100%">
      <el-table-column type="index"
                       :index="indexMethod"
                       width="50"></el-table-column>
      <el-table-column prop="name"
                       width="100"
                       label="名称"></el-table-column>
      <el-table-column width="100"
                       label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.icon"
               alt=""
               width="50px"
               height="50px">
        </template>
      </el-table-column>
      <el-table-column prop="id"
                       width="50"
                       label="ID"></el-table-column>
      <el-table-column width="200"
                       label="描述">
        <template slot-scope="scope">
          <el-popover width="600"
                      trigger="click">
            <div v-html="scope.row.desc"></div>
            <el-button slot="reference">查看详情</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="类型">
        <template slot-scope="scope">
          {{scope.row.type | typeFilters}}
        </template>
      </el-table-column>
      <el-table-column prop="win"
                       label="连赢胜率"></el-table-column>
      <el-table-column prop="place"
                       label="位置胜率"></el-table-column>
      <el-table-column prop="total"
                       label="出场总数"></el-table-column>
      <el-table-column prop="rank"
                       label="排名"></el-table-column>
      <el-table-column prop="first"
                       label="第一"></el-table-column>
      <el-table-column prop="second"
                       label="第二"></el-table-column>
      <el-table-column prop="third"
                       label="第三"></el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="120">
        <template slot-scope="scope">
          <el-button @click="$router.push({name: 'addcaballero', query: {id: scope.row.id}})"
                     type="text"
                     size="small">编辑</el-button>
          <el-button @click="delClick(scope.row.id)"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="caballero-pagination">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="total"
                     :current-page="page"
                     @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { postTj } from 'api/index'
export default {
  data () {
    return {
      caballeroData: [],
      page: 1,
      currentPage1: 10,
      allPage: 0,
      search: '',
      radio3: '1'
    }
  },

  computed: {
    total: function () {
      return this.currentPage1 * this.allPage - 1
    }
  },
  filters: {
    typeFilters: function (value) {
      if (!value) return ''
      if (+value === 1) {
        return '骑师'
      } else {
        return '练马师'
      }
    }
  },
  created () {
    this._getCaballero()
  },
  methods: {
    _getCaballero () {
      postTj('lists', {
        page: this.page,
        type: this.radio3,
        name: this.search
      }).then(res => {
        this.getCaballero(res)
      })
    },
    getCaballero (res) {
      this.caballeroData = res.list
      if (res.allPage) {
        this.allPage = res.allPage
      }
    },
    delClick (id) {
      this._delCaballero(id)
    },
    _delCaballero (id) {
      postTj('del', { id: id }).then(res => {
        this.delCaballero(res)
      })
    },
    delCaballero (res) {
      this.$message.error('删除成功')
      this._getCaballero()
    },
    handleCurrentChange (val) {
      this.page = val
      this._getCaballero()
    },
    indexMethod (index) {
      return (this.page - 1) * 10 + index + 1
    },
    searchKeyup () {
      this._getCaballero(this.search)
    },
    radioChange () {
      this.page = 1
      this._getCaballero()
    },
    onError (e) {
      this.$message('Failed to copy texts')
    }
  }
}
</script>

<style lang='stylus' scoped>
.caballero-menu
  display flex
  justify-content space-between
  align-items center
  .menu-search
    width 200px
.caballero-table
  margin-top 20px
.caballero-pagination
  position fixed
  padding 10px
  bottom 10px
</style>
