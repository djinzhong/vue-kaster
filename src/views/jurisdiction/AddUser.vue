<template>
  <div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'userList'}, name: '用户列表'
    },{
      router: {name: 'addUser'}, name: '添加用户'
    }]" />
    <el-form :model="form"
             :rules="rules"
             ref="ruleForm"
             class="form"
             label-width="140px">
      <div class="none">
        <el-input />
        <el-input show-password />
      </div>
      <el-form-item label="用户名"
                    prop="name">
        <el-input v-model="form.name"
                  autocomplete="off"
                  style="width: 600px"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="pwd">
        <el-input placeholder="请输入密码"
                  style="width: 600px"
                  v-model="form.pwd"
                  show-password></el-input>
      </el-form-item>
      <el-form-item label="权限">
        <dj-checkbox ref="groupCheckbox"
                     :cityOptions="groupList" />
      </el-form-item>
      <el-form-item>
        <el-button size="mini"
                   type="primary"
                   @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postUser } from 'api/index'
import { groupList } from './config/table.config.js'
import DjCheckbox from 'components/DjCheckbox'
export default {
  components: {
    DjCheckbox
  },
  data () {
    return {
      form: {
        name: '',
        pwd: ''
      },
      groupList: groupList,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { max: 8, message: '长度在 8 个字符以内', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, message: '您输入的密码太简单了吧', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          postUser('add', {
            name: this.form.name,
            pwd: this.form.pwd,
            group: this.$refs.groupCheckbox.checkedCities
          }).then(res => {
            if (res) {
              this.$message.success('创建成功')
              this.$router.push({ name: 'userList' })
            }
          })
        } else {
          this.$message.error('请填写信息完整后提交')
          return false
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.form
  margin 20px 0
  >>> .el-form-item__content
    text-align left
  .el-input
    width 200px
    text-align left
.inline-block
  display inline-block
.explain
  font-size 10px
  color #b3b3b3
  padding 0 20px
.none
  height 0
  opacity 0
  position absolute
  left -1000px
</style>
