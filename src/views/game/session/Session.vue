<template>
  <div>
    <el-breadcrumb style="padding:0 0 40px 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{name: 'gameList'}">比赛</el-breadcrumb-item>
      <el-breadcrumb-item>场次</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary"
               @click="$router.push({name: 'addSession', query: {id: 0, code: id}})"
               icon="el-icon-circle-plus-outline">增加</el-button>
    <el-table :data="SessionData"
              class="Session-table"
              height="calc(100% - 160px)"
              style="width: 100%">
      <el-table-column type="index"
                       width="50"></el-table-column>
      <el-table-column prop="number"
                       label="场次">
      </el-table-column>
      <el-table-column width="180"
                       label="时间">
        <template slot-scope="scope">
          {{scope.row.begin_time | capitalize}}
        </template>
      </el-table-column>
      <el-table-column prop="name"
                       label="名字">
      </el-table-column>
      <el-table-column prop="draw"
                       label="赛道">
      </el-table-column>
      <el-table-column prop="class"
                       label="班次">
      </el-table-column>
      <el-table-column prop="status"
                       label="状态">
      </el-table-column>
      <el-table-column prop="data"
                       label="比赛数据">
      </el-table-column>
      <el-table-column prop="finally"
                       label="结果数据">
      </el-table-column>
      <el-table-column prop="code"
                       label="对应比赛ID">
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="$router.push({name: 'addSession', query: {id: scope.row.id, code: id}})"
                     type="text"
                     size="small">编辑</el-button>
          <el-button @click="delClick(scope.row.id)"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="Session-pagination">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="total"
                     @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { postGame } from 'api/index'
export default {
  components: {

  },
  data () {
    return {
      SessionData: [], // 场次列表
      page: 1, // 页码
      currentPage1: 10, // 一页数量
      allPage: 0, // 总页码
      id: this.$route.query.id // id
    }
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
  computed: {
    total () {
      return this.currentPage1 * this.allPage - 1
    }
  },
  created () {
    // 如果没有进入路由没有检测到id那么回到比赛配置
    if (this.$route.query.id) {
      this._getSession()
    } else {
      this.$router.push('/gameList')
    }
  },
  methods: {
    // 获取场次列表
    _getSession () {
      postGame('lists', { page: this.page, code: this.id }).then(res => {
        if (res) this.getSession(res)
      })
    },
    // 请求成功
    getSession (res) {
      this.SessionData = res.list
      if (res.allPage) {
        this.allPage = res.allPage
      }
    },
    // 删除场次请求
    _delSession (id) {
      postGame('del', { id: id }).then(res => {
        if (res) this.delSession(res)
      })
    },
    // 删除成功
    delSession (res) {
      this.$message({
        type: 'success',
        message: '删除成功'
      })
      this._getSession()
    },
    // 删除点击
    delClick (id) {
      this._delSession(id)
    },
    // 翻页
    handleCurrentChange (val) {
      this.page = val
      this._getSession()
    }
  }
}
</script>

<style lang='stylus' scoped>
.Session-table
  margin-top 20px
.Session-pagination
  position fixed
  padding 10px
  bottom 10px
</style>
