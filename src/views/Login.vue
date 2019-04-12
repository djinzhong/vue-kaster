<template>
  <el-form :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px"
           class="demo-ruleForm">
    <el-form-item label="账号"
                  prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码"
                  prop="pwd">
      <el-input placeholder="请输入密码"
                v-model="ruleForm.pwd"
                show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="submitForm('ruleForm')">立即登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { postLogin } from 'api/index'
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }

    }
  },
  created () {
    localStorage.clear()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          postLogin(this.ruleForm).then(
            res => {
              this.$message.success('登录成功，正在为您跳转！')
              localStorage.setItem('ssId', res.ss_id)
              localStorage.setItem('uid', res.uid)
              localStorage.setItem('isLogin', true)
              setTimeout(() => {
                this.$router.push({ name: 'home' })
              }, 500)
            }
          )
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.demo-ruleForm
  width 400px
  margin 40px auto
  text-align left
</style>
