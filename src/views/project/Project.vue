<template>
  <div class="project">
    <table-header @dataChang="dataChang" />
    <el-table :data="tableData"
              style="width: 100%"
              height="calc(100% - 80px)"
              class="project-table">
      <!-- 展开详情数据 -->
      <el-table-column type="expand">
        <template slot-scope="props">
          <project-details :data="props.row" />
        </template>
      </el-table-column>
      <el-table-column type="index"
                       width="50">
      </el-table-column>
      <!-- 基础数据 -->
      <dj-table-column v-for="(item,index) in projectTableList"
                       :key="index"
                       :item="item" />
      <!-- 方案状态 -->
      <status-column />
      <!-- 操作 -->
      <el-table-column width="180"
                       align="center"
                       fixed="right">
        <template slot="header"
                  slot-scope="scope">
          <el-input v-model="searchValue"
                    size="mini"
                    placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini"
                     @click.native.prevent="forbidRow(scope.row._id)"
                     type="danger">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { projectTableList } from './config/project.config.js' // 表格基础数据配置
import { postOkami } from 'api/index' // 请求接口
import tableHeader from './components/tableHeader' // 表格头部组件（时间检索）
import projectDetails from './components/projectDetails' // 方案详情
import statusColumn from './components/statusColumn' // 方案状态筛选
export default {
  components: {
    tableHeader, projectDetails, statusColumn
  },
  data () {
    return {
      data: [], // 表格数据
      projectTableList: projectTableList, // 表格配置
      page: 1, // 页码
      searchValue: '' // 比赛名称检索词
    }
  },
  computed: {
    // 对表格数据进行name检索
    tableData: function () {
      return this.data.filter(data => !this.searchValue || data.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  },
  created () {
    this._getList()
  },
  methods: {
    // 请求表格数据
    _getList () {
      postOkami('planList', { page: this.page }).then(res => {
        this.data = res
      })
    },
    // 时间区间检索
    dataChang (data1, data2) {
      if (data1 === 0 && data2 === 0) {
        this._getList()
      } else {
        postOkami('planList', { page: this.page, start_time: data1, end_time: data2 }).then(res => {
          this.data = res
        })
      }
    },
    // 禁用按钮
    forbidRow (id) {
      console.log(id)
    }
  }
}
</script>
