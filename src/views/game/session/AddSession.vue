<template>
  <div class="wrapper">
    <div class="session-handel">
      <el-breadcrumb style="padding:0 0 40px 20px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/gameList'}">比赛</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/gameSession', query : {id: this.$route.query.code}}">场次</el-breadcrumb-item>
        <el-breadcrumb-item>比赛配置</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form ref="form"
               :model="form"
               label-width="80px">
        <el-form-item label="比赛ID"
                      class="inline-block">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="场地ID"
                      class="inline-block">
          <el-input v-model="form.draw"></el-input>
        </el-form-item>

        <el-form-item label="开始时间"
                      class="inline-block">
          <el-date-picker v-model="value1"
                          type="datetime"
                          placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="场次"
                      class="inline-block">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="名字"
                      class="inline-block">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="班次"
                      class="inline-block">
          <el-input v-model="form.class"></el-input>
        </el-form-item>
        <el-form-item label="状态"
                      class="inline-block">
          <el-radio v-model="form.status"
                    label="0">停用</el-radio>
          <el-radio v-model="form.status"
                    label="1">启用</el-radio>
        </el-form-item>
      </el-form>
      <div class="main">
        <div class="form-title">比赛数据</div>
        <handle-session v-for="(item,index) in ruleFormChild"
                        :key="index"
                        :index="index"
                        :ref="`session${index}`"
                        :ruleForm="item"
                        @index="deleteFrom"></handle-session>
        <handle-result v-show="isResult"
                       ref="result"
                       :ruleForm="resultObj"></handle-result>
        <el-button icon="el-icon-circle-plus-outline"
                   @click="addAnswer">继续添加</el-button>
        <el-button icon="el-icon-circle-plus-outline"
                   @click="isResult = true">添加结果数据</el-button>
      </div>
    </div>
    <div style="margin: 40px 20px">
      <el-button type="primary"
                 @click="onSubmit">{{submitText}}</el-button>
      <el-button @click="$router.go(-1)">取消</el-button>
    </div>
  </div>
</template>

<script>
import { postGame } from 'api/index'
export default {
  components: {
    HandleSession: () => import('../components/HandleSession'),
    HandleResult: () => import('../components/HandleResult')
  },
  data () {
    return {
      form: {
        draw: '',
        begin_time: '',
        number: '',
        name: '',
        class: '',
        status: '1',
        data: '',
        finally: '',
        code: this.$route.query.code
      }, // 创建比赛需要的表单
      submitText: '立即创建',
      value1: '',
      ruleFormChild: [
        {
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: ''
        }
      ],
      isResult: false,
      resultObj: {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      },
      id: this.$route.query.id
    }
  },
  created () {
    if (this.$route.query.id > 0) {
      this.submitText = '立即修改'
      this._getSession()
    }
  },
  methods: {
    _getSession () {
      postGame('info', { id: this.id }).then(res => {
        if (res) this.getSession(res)
      })
    },
    getSession (res) {
      this.form.draw = res.draw
      this.form.name = res.name
      this.form.class = res.class
      this.form.status = res.status
      this.form.number = res.number
      this.value1 = new Date(res.begin_time * 1000)
      this.ruleFormChild = []
      res.data.map(item => {
        if (item !== '') {
          let strList = item.split('|')
          let obj = {
            value1: strList[0],
            value2: strList[1],
            value3: strList[2],
            value4: strList[3],
            value5: strList[4],
            value6: strList[5]
          }
          this.ruleFormChild.push(obj)
        }
      })
      if (res.finally.length > 0) {
        if (res.finally[0]) {
          this.isResult = true
          this.resultObj = {
            value1: res.finally[0].split('|')[0],
            value2: res.finally[1].split('|')[0],
            value3: res.finally[2].split('|')[0],
            value4: res.finally[3].split('|')[0]
          }
        }
      }
    },
    _postSession () {
      if (this.id > 0) this.form.id = this.id
      postGame('set', this.form).then(res => {
        if (res) this.postSession(res)
      })
    },
    postSession (res) {
      this.$message({
        type: 'success',
        message: res
      })
      this.$router.go(-1)
    },
    // 立即创建/修改
    onSubmit () {
      if (this.value1 !== '' && this.value1 != null) {
        this.form.begin_time = this.value1.getTime() / 1000
      } else {
        this.$message('请填写时间')
      }
      let data = ''
      let arrLength = this.ruleFormChild.length - 1
      this.ruleFormChild.map((item, index) => {
        for (let items in item) {
          if (item[items] === '') {
            this.$message(`请确认场次${index + 1}信息填写完整`)
            return
          } else {
            data += item[items] + '|'
          }
        }
        if (index !== arrLength) {
          data += ','
        }
      })
      this.form.data = data
      if (this.isResult) {
        let result = ''
        let index = 1
        for (let key in this.resultObj) {
          if (index !== 4) {
            result += this.resultObj[key] + '|' + index++ + ','
          } else {
            result += this.resultObj[key] + '|' + index++
          }
        }
        this.form.finally = result
      }

      this._postSession()
    },
    addAnswer () {
      this.ruleFormChild.push({
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: ''
      })
    },
    deleteFrom (index) {
      if (this.ruleFormChild.length === 1) {
        this.$message.error('请至少保留一条场次信息')
      } else {
        this.ruleFormChild.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.inline-block
  display inline-block
.wrapper
  .session-handel
    .main
      padding 0 20px
    .form-title
      height 32px
      line-height 32px
      padding-left 10px
      margin-bottom 10px
      background #b3b3b3b3
</style>
