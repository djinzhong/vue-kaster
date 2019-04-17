<template>
  <div>
    <el-table :data="tableData"
              height="100%"
              style="width: 100%">
      <!-- 基础数据 -->
      <el-table-column type="index"
                       width="50" />
      <dj-table-column v-for="(item,index) in userTableList"
                       :key="index"
                       :item="item" />
      <!-- 操作 -->
      <el-table-column width="300"
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
                     class="handleButton"
                     @click="openDialog(scope.$index, 'user')">修改用户名</el-button>
          <el-button size="mini"
                     type="warning"
                     class="handleButton"
                     @click="openDialog(scope.$index, 'psw')">修改密码</el-button>
          <el-button size="mini"
                     type="info"
                     class="handleButton"
                     @click="openDialog(scope.$index, 'group')">修改权限</el-button>
          <el-button size="mini"
                     :type="+scope.row.status === 1 ? 'danger' : 'success'"
                     class="handleButton"
                     @click="statusChange(scope.$index, scope.row)">{{+scope.row.status === 1 ? '禁用' : '启用'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <user-dialog v-if="dialogVisible"
                 :handle="handle"
                 :data="data[index]"
                 :isDialog="dialogVisible"
                 @renewal="_getUserList"
                 @closeDialog="closeDialog" />
  </div>
</template>

<script>
import { postUser } from 'api/index'
import { userTableList } from './config/table.config.js'
import userDialog from './components/userDialog'

export default {
  components: {
    userDialog
  },
  data () {
    return {
      data: [],
      userTableList: userTableList,
      index: 0, // 当前修改项
      searchValue: '', // 检索词
      dialogVisible: false, // 控制dialog弹出
      handle: '' // 具体修改操作
    }
  },
  computed: {
    tableData: function () {
      return this.data.filter(data => !this.searchValue || data.nickname.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  },
  created () {
    this._getUserList()
  },
  methods: {
    _getUserList () {
      postUser('list').then(res => {
        if (res) this.data = res
      })
    },
    openDialog (index, handle) {
      this.dialogVisible = true
      this.index = index
      this.handle = handle
    },
    closeDialog () {
      this.dialogVisible = false
    },
    // 禁用
    statusChange (index, res) {
      let text = +res.status === 1 ? '禁用' : '启用'
      postUser('change', {
        acc_id: res.id,
        type: 3,
        status: +res.status === 1 ? 0 : 1
      }).then(res => {
        if (res) {
          this.$message.success(`${text}成功`)
          this.data[index].status = +this.data[index].status === 1 ? '0' : '1'
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.handleButton
  padding 7px 5px
</style>
