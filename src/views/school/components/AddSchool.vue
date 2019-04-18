<template>
  <div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'schoolList'}, name: '学堂列表'
    },{
      router: {name: 'addSchool', query: {id: $route.query.id}}, name: `${text}学堂`
    }]" />
    <el-form :model="form"
             label-width="140px"
             :rules="schoolRules"
             class="form">
      <el-form-item label="标题"
                    prop="title">
        <el-input v-model="form.title"
                  style="width: 600px" />
      </el-form-item>
      <el-form-item label="排序"
                    prop="sort">
        <el-input v-model="form.sort" />
      </el-form-item>
      <el-form-item v-if="isHandle"
                    label="类型">
        <el-radio-group v-model="type">
          <el-radio label="1">新增详情</el-radio>
          <el-radio label="2">新增菜单</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="导航菜单">
        <el-radio-group v-model="form.type">
          <el-radio v-for="item in typeList"
                    :key="item.value"
                    :label="item.value.toString()">{{item.text}}</el-radio>
        </el-radio-group>
        <span v-if="type === '1'"
              class="explain">备注:如果没有找到相应的菜单,请选择新增菜单进行增加</span>
        <span v-else
              class="explain">备注:目前只支持添加速度赛马和马业</span>
      </el-form-item>
      <el-form-item v-if="type === '1'"
                    label="图片菜单">
        <el-radio-group v-model="form.code">
          <el-radio v-for="item in codeList"
                    :key="item.value"
                    :label="item.value.toString()">{{item.text}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="type === '2'"
                    label="code">
        <el-input v-model="form.code" />
        <i class="el-icon-warning"
           @click="isExplain = !isExplain" />
        <span class="explain"
              v-if="!isExplain">点击查看已有code</span>
        <span class="explain"
              v-if="isExplain">{{codeList}}</span>
      </el-form-item>
      <el-form-item v-if="type === '2'"
                    label="上传封面">
        <dj-upload ref="images"
                   :max='1'
                   :filedata="filedata" />
      </el-form-item>
      <el-form-item v-if="type === '1'"
                    label="详情内容">
        <dj-ueditor ref="ueditor"
                    :content="form.content" />
      </el-form-item>
      <el-form-item>
        <el-button type='primary'
                   size="mini"
                   @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postSchool } from 'api/index'
import { typeList } from '../config/table.config.js'
import DjUpload from 'components/DjUpload' // 上传图片组件
import DjUeditor from 'components/DjUEditor' // 富文本编辑器
export default {
  components: {
    DjUpload, DjUeditor
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    // 导航菜单
    typeList: function () {
      switch (this.type) {
        case '1':
          return typeList.filter(item => item.value !== 5)
        case '2':
          return typeList.filter(item => item.value === 3 || item.value === 4)
        default:
          return typeList
      }
    },
    // 速度赛马菜单
    speed: function () {
      let catalogueList = this.data.filter(item => +item.type === 3)
      let catalogue = catalogueList.map(item => {
        return {
          text: item.title,
          value: +item.code
        }
      })
      return catalogue
    },
    // 马业菜单
    industry: function () {
      let catalogueList = this.data.filter(item => +item.type === 4)
      let catalogue = catalogueList.map(item => {
        return {
          text: item.title,
          value: +item.code
        }
      })
      return catalogue
    },
    // 图片菜单
    codeList: function () {
      switch (this.form.type) {
        case '1':
          return [{ text: '马球运动', value: '1000' }]
        case '2':
          return [{ text: '马术比赛', value: '999' }]
        case '3':
          return this.speed
        case '4':
          return this.industry
        case '5':
          return this.speed.concat(this.industry)
        default:
          return []
      }
    },
    id () {
      return +this.$route.query.id
    },
    // 修改还是新增
    isHandle () {
      return this.id === 0
    }
  },
  data () {
    return {
      // 学堂配置
      form: {
        operate_type: 1, // 新增还是修改
        title: '',
        type: '1',
        code: '1000',
        sort: '',
        content: '',
        icon: ''
      },
      type: '1', // 配置类型(1: 详情, 2: 图片菜单)
      text: '新增',
      // 新增视频表单验证
      schoolRules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        sort: [{ required: true, message: '请输入排序号', trigger: 'blur' }]
      },
      filedata: [], // 上传图片列表
      isExplain: false // 是否显示code码
    }
  },
  created () {
    if (!this.isHandle) {
      this.initSchoolForm()
    }
  },
  methods: {
    // 修改 初始化
    initSchoolForm () {
      this.text = '修改'
      let list = this.data.filter(item => +item.id === this.id)
      if (list.length) {
        this.form = list[0]
        this.form.operate_type = 2
        // 修改菜单
        if (this.form.type === '3' || this.form.type === '4') {
          this.type = '2'
          // 解析图片列表
          this.filedata = []
          if (this.form.icon) this.filedata.push({ name: 'icon.png', url: this.form.icon })
        }
      }
    },
    // 提交按钮
    onSubmit () {
      if (this.form.title === '' || this.form.sort === '') {
        this.$message.error('请填写信息完整')
        return false
      }
      if (this.type === '1') {
        // 新增详情
        if (this.form.type === '3' || this.form.type === '4') this.form.type = '5'
        if (this.$refs.ueditor && this.$refs.ueditor.msg) this.form.content = this.$refs.ueditor.msg
      } else {
        // 新增菜单
        // code
        let isCode = this.speed.concat(this.industry).some(item => item.value === +this.form.code)
        if (isCode) {
          this.$message.error('请不要填写重复的code')
          return false
        }
        // 封面信息处理
        let imagesList = this.$refs.images.fileList
        if (imagesList.length) {
          if (imagesList[0] && imagesList[0].url) this.form.icon = imagesList[0].url
        } else {
          this.$message.error('请上传菜单封面')
          return false
        }
      }
      this.postSchool()
    },
    // 发送提交请求
    postSchool () {
      postSchool('operate', this.form).then(res => {
        if (res) {
          this.$message.success(`${this.text}成功`)
          // 更新新闻列表
          this.$emit('renewalSchool')
          this.$router.push({ name: 'schoolList' })
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
  >>> .el-radio
    line-height 40px
  .el-input
    width 200px
    text-align left
.inline-block
  display inline-block
.explain
  display inline-block
  font-size 14px
  line-height 40px
  margin-left 20px
  color #b3b3b3
.el-icon-warning
  font-size 24px
  line-height 40px
  vertical-align middle
  margin-left 10px
  cursor pointer
</style>
