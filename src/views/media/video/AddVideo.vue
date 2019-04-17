<template>
  <div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'videoList'}, name: '视频列表'
    },{
      router: {name: 'addVideo', query: {id: $route.query.id}}, name: `${text}视频`
    }]" />
    <el-form :model="form"
             label-width="140px"
             :rules="videoRules"
             class="form">
      <el-form-item label="标题"
                    prop="title">
        <el-input v-model="form.title"
                  style="width: 600px" />
      </el-form-item>
      <el-form-item label="播放量">
        <el-input v-model="form.views" />
      </el-form-item>
      <el-form-item label="点赞数">
        <el-input v-model="form.praise" />
      </el-form-item>
      <el-form-item label="评论数">
        <el-input v-model="form.comment" />
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort" />
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.status"
                   active-value="1"
                   inactive-value="0">
        </el-switch>
      </el-form-item>
      <el-form-item label="上传视频"
                    prop="res_url">
        <dj-up-video ref="video"
                     :video="form.res_url" />
      </el-form-item>
      <el-form-item label="上传封面">
        <dj-upload ref="images"
                   :max='1'
                   :filedata="filedata" />
        <span class="explain">默认会选择视频中第三帧画面作为封面</span>
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
import Vue from 'vue'
import { postVideo } from 'api/index'
import { Switch } from 'element-ui'
import DjUpload from 'components/DjUpload' // 上传图片组件
import DjUpVideo from 'components/DjUpVideo' // 上传视频组件

Vue.use(Switch)
export default {
  components: {
    DjUpload, DjUpVideo
  },
  props: {
    // 所有视频列表数据
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    page: Number,
    allPage: Number
  },
  data () {
    return {
      text: '新增', // 面包屑导航文本描述
      // 视频表单默认内容
      form: {
        title: '',
        views: '100',
        praise: '100',
        comment: '100',
        sort: '1',
        status: '1',
        res_url: '',
        cover: ''
      },
      // 新增视频表单验证
      videoRules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        res_url: [{ required: true, trigger: 'blur' }]
      },
      filedata: [] // 封面列表
    }
  },
  computed: {
    id: function () {
      return +this.$route.query.id
    }
  },
  created () {
    if (this.id !== 0) {
      this.initVideoForm()
    }
  },
  methods: {
    // 修改视频时获取初始数据
    initVideoForm () {
      this.text = '修改'
      let list = this.data.filter(item => +item.id === this.id)
      if (list.length) {
        this.form = list[0]
        // 解析图片列表
        this.filedata = []
        if (this.form.cover !== '') this.filedata.push({ name: 'cover.png', url: this.form.cover })
      }
    },
    // 提交,整理数据
    onSubmit () {
      if (this.form.title === '') {
        this.$message.error('请填写标题!')
        return false
      }
      // 视频信息处理
      if (this.$refs.video.video_url !== '') {
        this.form.res_url = this.$refs.video.video_url
        this.form.cover = this.$refs.video.img_url
      } else {
        this.$message.error('请上传视频!')
        return false
      }

      // 封面信息处理
      let imagesList = this.$refs.images.fileList
      if (imagesList.length) {
        if (imagesList[0] && imagesList[0].url) this.form.cover = imagesList[0].url
      }
      this.postVideo()
    },
    // 发送请求
    postVideo () {
      postVideo('set', this.form).then(res => {
        if (res) {
          this.$message.success(`${this.text}成功`)
          // 修改后请求后台最新数据更新
          this.$emit('renewalVideo')
          // 跳转到视频列表
          this.$router.push({ name: 'videoList' })
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
</style>
