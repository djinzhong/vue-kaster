<template>
  <div id="login">
    <div class="login-box">
      <h1 class="title">懂马帝后台管理系统</h1>
      <el-card shadow="always"
               class="login-form">
        <div slot="header"
             class="form-title">
          <span>密码登录</span>
        </div>
        <el-form :model="loginForm"
                 :rules="rules"
                 ref="loginForm"
                 status-icon
                 class="form-model">
          <el-form-item prop="name">
            <el-input type="text"
                      v-model="loginForm.name"
                      auto-complete="off"
                      placeholder="请输入登录账号"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password"
                      v-model="loginForm.pwd"
                      auto-complete="off"
                      placeholder="请输入登录密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="form-sub"
                       type="primary"
                       @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { postLogin } from 'api/index'
export default {
  data () {
    return {
      loginForm: {
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
  methods: {
    submitForm () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.postLogin()
        } else {
          this.$message.error('账号或密码不能为空')
          return false
        }
      })
    },
    postLogin () {
      postLogin(this.loginForm).then(
        res => {
          if (res) {
            this.$store.dispatch('setToken', res).then(() => {
              this.$message.success('登录成功，正在为您跳转！')
              this.$router.push({ name: 'home' })
            }).catch(err => {
              this.$message.error(err)
            })
          }
        }
      )
    }
  }
}
</script>

<style lang='stylus' scoped>
#login
  width 100%
  height 100%
  background-color #2d3a4b
  text-align left
  .login-box
    display flex
    width 990px
    margin 120px auto
    height 388px
    .title
      font-size 36px
      font-weight 600
      color #ffffff
      width 500px
    .login-form
      width 380px
      height 325px
      margin-top 10px
      .form-title
        font-size 18px
        font-weight 400
      .form-model
        .form-sub
          width 100%
</style>
