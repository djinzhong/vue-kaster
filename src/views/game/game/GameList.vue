<template>
  <div>
    <el-button type="primary"
               @click="$router.push({name: 'addgameList', query: {id: 0}})"
               icon="el-icon-circle-plus-outline">增加</el-button>
    <el-table :data="gameListData"
              class="game-list-table"
              height="calc(100% - 120px)"
              style="width: 100%">
      <el-table-column type="index"
                       width="50"></el-table-column>
      <el-table-column prop="id"
                       width="50"
                       label="ID">
      </el-table-column>
      <el-table-column prop="name"
                       width="100"
                       label="名称">
      </el-table-column>
      <el-table-column prop="type"
                       width="80"
                       label="类型">
      </el-table-column>
      <el-table-column width="100"
                       label="图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon"
               alt=""
               width="50px"
               height="50px">
        </template>
      </el-table-column>
      <el-table-column width="200"
                       label="开始时间">
        <template slot-scope="scope">
          {{scope.row.begin_time | capitalize}}
        </template>
      </el-table-column>
      <el-table-column width="200"
                       label="结束时间">
        <template slot-scope="scope">
          {{scope.row.end_time | capitalize}}
        </template>
      </el-table-column>
      <el-table-column prop="desc"
                       width="80"
                       label="赛事级别">
      </el-table-column>
      <el-table-column prop="track"
                       label="赛事名称">
      </el-table-column>

      <el-table-column fixed="right"
                       label="操作"
                       width="160">
        <template slot-scope="scope">
          <el-button @click="$router.push({name: 'addgameList', query: {id: scope.row.id}})"
                     type="text"
                     size="small">编辑</el-button>
          <el-button type="text"
                     size="small"
                     @click="$router.push({name: 'gameSession', query: {id: scope.row.id}})">配置场次</el-button>
          <el-button @click="delClick(scope.row.id)"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="game-list-pagination">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="total"
                     @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { postSchedule } from 'api/index'
export default {
  components: {

  },
  data () {
    return {
      gameListData: [], // 比赛列表
      page: 1, // 页码
      currentPage1: 10, // 一页数量
      allPage: 0 // 总页数
    }
  },
  computed: {
    total () {
      return this.currentPage1 * this.allPage - 1
    }
  },
  created () {
    this._getgameList()
  },
  filters: {
    capitalize (timestamp) {
      timestamp += ''
      var date
      if (timestamp.length === 13) {
        date = new Date(+timestamp)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      } else if (timestamp.length < 13) {
        date = new Date(timestamp * 1000)
      }
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
      let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
      let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
      // let s = date.getSeconds()
      // alert(timestamp)
      if (timestamp === '' || timestamp === undefined) {
        return
      }
      return Y + M + D + ' ' + h + ':' + m
    }
  },
  methods: {
    //
    _getgameList () {
      postSchedule('lists', { page: this.page }).then(res => {
        if (res) this.getgameList(res)
      })
    },
    getgameList (res) {
      this.gameListData = res.list
      if (res.allPage) {
        this.allPage = res.allPage
      }
    },
    _delgameList (id) {
      postSchedule('del', { id: id }).then(res => {
        if (res) this.delgameList(res)
      })
    },
    delgameList (res) {
      this.$message({
        type: 'success',
        message: '删除成功'
      })
      this._getgameList()
    },
    delClick (id) {
      this._delgameList(id)
    },
    handleCurrentChange (val) {
      this.page = val
      this._getgameList()
    }
  }
}
</script>

<style lang='stylus' scoped>
.game-list-table
  margin-top 20px
.game-list-pagination
  position fixed
  padding 10px
  bottom 10px
</style>
