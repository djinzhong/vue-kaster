<template>
  <div>
    <el-button type="primary"
               @click="$router.push({name: 'addSite', query: {id: 0}})"
               icon="el-icon-circle-plus-outline">增加</el-button>
    <el-table :data="siteData"
              class="site-table"
              height="calc(100% - 100px)"
              style="width: 100%">
      <el-table-column type="index"
                       width="50"></el-table-column>
      <el-table-column prop="name"
                       width="100"
                       label="名称">
      </el-table-column>
      <el-table-column prop="length"
                       label="长度">
      </el-table-column>
      <el-table-column prop="id"
                       width="50"
                       label="ID">
      </el-table-column>
      <el-table-column label="类型"
                       width="120">
        <template slot-scope="scope">
          {{scope.row.type}}
        </template>
      </el-table-column>
      <!-- <el-table-column label="栏位1">
        <template slot-scope="scope">
          {{scope.row.draw1}}
        </template>
      </el-table-column>
      <el-table-column label="栏位2">
        <template slot-scope="scope">
          {{scope.row.draw2}}
        </template>
      </el-table-column>
      <el-table-column label="栏位3">
        <template slot-scope="scope">
          {{scope.row.draw3}}
        </template>
      </el-table-column>
      <el-table-column label="栏位4">
        <template slot-scope="scope">
          {{scope.row.draw4}}
        </template>
      </el-table-column>
      <el-table-column label="栏位5">
        <template slot-scope="scope">
          {{scope.row.draw5}}
        </template>
      </el-table-column>
      <el-table-column label="栏位6">
        <template slot-scope="scope">
          {{scope.row.draw6}}
        </template>
      </el-table-column>
      <el-table-column label="栏位7">
        <template slot-scope="scope">
          {{scope.row.draw7}}
        </template>
      </el-table-column>
      <el-table-column label="栏位8">
        <template slot-scope="scope">
          {{scope.row.draw8}}
        </template>
      </el-table-column>
      <el-table-column label="栏位9">
        <template slot-scope="scope">
          {{scope.row.draw9}}
        </template>
      </el-table-column>
      <el-table-column label="栏位10">
        <template slot-scope="scope">
          {{scope.row.draw10}}
        </template>
      </el-table-column>
      <el-table-column label="栏位11">
        <template slot-scope="scope">
          {{scope.row.draw11}}
        </template>
      </el-table-column>
      <el-table-column label="栏位12">
        <template slot-scope="scope">
          {{scope.row.draw12}}
        </template>
      </el-table-column>
      <el-table-column label="栏位13">
        <template slot-scope="scope">
          {{scope.row.draw13}}
        </template>
      </el-table-column>
      <el-table-column label="栏位14">
        <template slot-scope="scope">
          {{scope.row.draw14}}
        </template>
      </el-table-column> -->
      <el-table-column fixed="right"
                       label="操作"
                       width="180">
        <template slot-scope="scope">
          <el-button @click="$router.push({name: 'addSite', query: {id: scope.row.id}})"
                     type="text"
                     size="small">编辑</el-button>
          <el-button @click="delClick(scope.row.id)"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="site-pagination">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="total"
                     @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { postDraw } from 'api/index'
export default {
  data () {
    return {
      siteData: [], // 场地列表
      page: 1, // 页码
      currentPage1: 10, // 每页个数
      allPage: 0 // 总页数
    }
  },
  computed: {
    total () {
      return this.currentPage1 * this.allPage - 1 // 总数 插件计算页码数用
    }
  },
  created () {
    this._getSite()
  },
  methods: {
    // 请求场地列表
    _getSite () {
      postDraw('lists', { page: this.page }).then(res => {
        if (res) this.getSite(res)
      })
    },
    // 场地列表请求成功
    getSite (res) {
      this.siteData = res.list
      if (res.allPage) {
        this.allPage = res.allPage
      }
    },
    // 删除场地
    _delSite (id) {
      postDraw('del', { id: id }).then(res => {
        if (res) this.delSite()
      })
    },
    // 删除成功
    delSite (res) {
      this.$message({
        type: 'success',
        message: '删除成功'
      })
      this._getSite()
    },
    // 删除成功
    delClick (id) {
      this._delSite(id)
    },
    // 改变页数
    handleCurrentChange (val) {
      this.page = val
      this._getSite()
    }
  }
}
</script>

<style lang='stylus' scoped>
.site-table
  margin-top 20px
.site-pagination
  position fixed
  padding 10px
  bottom 10px
</style>
