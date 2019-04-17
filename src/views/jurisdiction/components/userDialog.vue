<template>
  <el-dialog title="提示"
             style="text-align: left"
             :before-close="handleClose"
             :visible.sync="dialogVisible">
    <el-form v-if="handle === 'user'"
             label-width="80px">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名"
                  maxlength="12"
                  v-model="inputuser" />
      </el-form-item>
      <el-form-item>
        <el-button size="mini"
                   style="margin-top: 10px"
                   @click="userHandle">提交修改</el-button>
      </el-form-item>
    </el-form>
    <el-form v-if="handle === 'psw'"
             label-width="80px">
      <el-form-item label="密码">
        <el-input placeholder="请输入密码"
                  maxlength="9"
                  v-model="inputplace"
                  show-password />
      </el-form-item>
      <el-form-item>
        <el-button size="mini"
                   style="margin-top: 10px"
                   @click="passwordHandle">提交修改</el-button>
      </el-form-item>
    </el-form>
    <el-form v-if="handle === 'group'"
             label-width="80px">
      <el-form-item label="权限">
        <dj-checkbox ref="groupCheckbox"
                     :checkedDetails="checkedDetails"
                     :cityOptions="groupList" />
      </el-form-item>
      <el-form-item>
        <el-button size="mini"
                   @click="groupHandle"
                   style="margin-top: 10px">提交修改</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { postUser } from 'api/index'
import Vue from 'vue'
import { groupList } from '../config/table.config.js'
import DjCheckbox from 'components/DjCheckbox'
import { Dialog } from 'element-ui'
Vue.use(Dialog)
export default {
  components: {
    DjCheckbox
  },
  props: {
    isDialog: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    handle: String,
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    dialogVisible () {
      return this.isDialog
    },
    checkedDetails () {
      return this.data.group ? this.data.group.map(a => +a) : []
    }
  },
  data () {
    return {
      groupList: groupList,
      inputuser: this.data.nickname,
      inputplace: ''
    }
  },
  methods: {
    handleClose () {
      this.$emit('closeDialog')
    },
    renewal () {
      this.$emit('renewal')
      this.handleClose()
    },
    // 修改密码
    userHandle () {
      postUser('change', {
        acc_id: this.data.id,
        type: 1,
        name: this.inputuser
      }).then(res => {
        if (res) {
          this.renewal()
          this.$message.success('修改用户名成功')
        }
      })
    },
    // 修改密码
    passwordHandle () {
      postUser('change', {
        acc_id: this.data.id,
        type: 2,
        pwd: this.inputplace
      }).then(res => {
        if (res) this.$message.success('修改密码成功')
      })
    },
    // 修改权限
    groupHandle () {
      postUser('setPower', {
        role_id: this.data.id,
        type: 2,
        module: this.$refs.groupCheckbox.checkedCities
      }).then(res => {
        if (res) {
          this.renewal()
          this.$message.success('修改权限成功')
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
