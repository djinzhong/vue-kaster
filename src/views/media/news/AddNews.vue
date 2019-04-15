<template>
  <div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'newsList'}, name: '新闻列表'
    },{
      router: {name: 'addNews', query: {id: $route.query.id}}, name: `${text}新闻`
    }]" />
    <el-form :model="form"
             label-width="140px"
             :rules='addNewsRules'
             class="form">
      <el-form-item label="标题"
                    prop="title">
        <el-input v-model="form.title"
                  style="width: 600px" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="优先级">
        <el-input v-model="form.sort" />
        <!-- <span class="explain">如果不填默认为1</span> -->
      </el-form-item>
      <el-form-item label="阅读量">
        <el-input v-model="form.views" />
      </el-form-item>
      <el-form-item label="点赞数">
        <el-input v-model="form.praise" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc" />
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.status"
                   active-value="1"
                   inactive-value="0">
        </el-switch>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="form.type">
          <el-radio v-for="item in typeList"
                    :key="item.value"
                    :label="item.value.toString()">{{item.text}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上传封面">
        <dj-upload ref="images"
                   :max='3'
                   :filedata="filedata" />
      </el-form-item>
      <el-form-item label="标签"
                    prop="checkedDetails">
        <dj-checkbox class="inline-block"
                     ref="tagsCheckbox"
                     :cityOptions="tagsList"
                     :checkedDetails="checkedDetails" />
        <tags-handle class="inline-block"
                     :tagsList="tagList"
                     @renewalTag="$emit('renewalTag')" />
      </el-form-item>
      <el-form-item label="新闻内容">
        <dj-ueditor v-if="form.content"
                    ref="ueditor"
                    :content="form.content" />
      </el-form-item>
      <el-form-item>
        <el-button type='primary'
                   size="mini"
                   @click="addNews">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { postNews } from 'api/index'
import { Switch } from 'element-ui'
import { detailsNewsForm, typeList } from '../config/table.config.js'
import { mixin } from '../config/mixin.js'
import DjUpload from 'components/DjUpload' // 上传图片组件
import DjCheckbox from 'components/DjCheckbox'
import DjUeditor from 'components/DjUEditor'
import tagsHandle from '../components/tagsHandle'

Vue.use(Switch)
export default {
  mixins: [mixin], // 将props和计算属性tagsList(标签列表)混入
  components: {
    DjUpload, DjCheckbox, DjUeditor, tagsHandle
  },
  data () {
    return {
      form: {}, // 新闻表单信息
      typeList: typeList, // 类型
      filedata: [], // 封面列表
      checkedDetails: [], // 标签默认选中
      // 新增新闻表单
      addNewsRules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        checkedDetails: [{ required: true, trigger: 'blur' }]
      },
      text: '新增'
    }
  },
  computed: {
    id: function () {
      return this.$route.query.id
    }
  },
  created () {
    for (let key in detailsNewsForm) {
      this.form[key] = detailsNewsForm[key]
    }
    if (+this.id === 0) {
      this.text = '新增'
      this.form.content = ' '
    } else {
      this.text = '修改'
      let newsData = this.data.filter(item => item.id === this.id)[0]
      if (newsData) {
        for (let key in this.form) {
          this.form[key] = newsData[key]
        }
      }
      postNews('get', { id: this.id }).then(res => {
        if (res) {
          this.form.content = res.content || ' '
        }
      })
      // 解析标签字符串并去除最后一个空元素
      let tagDetailslist = this.form.tags.split('|')
      tagDetailslist.pop()
      this.checkedDetails = tagDetailslist

      // 解析图片列表
      this.filedata = []
      if (this.form.cover_1 !== '') this.filedata.push({ name: 'cover_1.png', url: this.form.cover_1 })
      if (this.form.cover_2 !== '') this.filedata.push({ name: 'cover_2.png', url: this.form.cover_2 })
      if (this.form.cover_3 !== '') this.filedata.push({ name: 'cover_3.png', url: this.form.cover_3 })

      console.log(this.form)
    }
  },
  methods: {
    // 提交新闻
    addNews () {
      if (this.form.title === '') {
        this.$message.error('请填写标题好吗')
        return false
      }

      // 标签信息处理
      let tagsList = this.$refs.tagsCheckbox.checkedCities
      if (tagsList.length) {
        this.form.tags = tagsList.join('|') + '|'
      } else {
        this.$message.error('请至少选择一种标签吧')
        return false
      }

      // 封面信息处理
      let imagesList = this.$refs.images.fileList
      if (imagesList.length) {
        if (imagesList[0] && imagesList[0].url) this.form.cover_1 = imagesList[0].url
        if (imagesList[1] && imagesList[1].url) this.form.cover_2 = imagesList[1].url
        if (imagesList[2] && imagesList[2].url) this.form.cover_3 = imagesList[2].url
      } else {
        this.$message.error('请上传新闻封面')
        return false
      }

      // 文本信息处理
      let content = this.$refs.ueditor.msg
      this.form.content = content

      this.postNews()
    },
    // 发送新增请求
    postNews () {
      if (+this.id !== '0') {
        postNews('set', this.form).then(res => {
          this.$message.success('修改成功')
          // 更新新闻列表
          this.$emit('renewalNews')
          this.$router.push({ name: 'newsList' })
        })
      }
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
</style>
