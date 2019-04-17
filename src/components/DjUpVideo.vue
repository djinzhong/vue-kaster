<template>
  <div class="upVideo">
    <!-- 文件选择 -->
    <input type="file"
           ref="upVideo"
           @change="upVideo"
           accept="Video/*"
           class="up-input" />
    <!-- 按钮 -->
    <el-button slot="trigger"
               v-if="video_url === ''"
               class="up-button"
               @click="selectFile"
               icon="el-icon-upload"
               size="small"
               type="primary">上传视频</el-button>
    <!-- 进度条 -->
    <el-progress class="up-progress"
                 v-if="isProgress"
                 :percentage="upProgress"
                 :status="upStatus"></el-progress>
    <el-button v-if="video_url != ''"
               @click="deleteFile"
               class="up-button"
               icon="el-icon-delete"
               size="small"
               type="primary">删除</el-button>
    <video v-if="video_url != ''"
           class="video-avatar"
           :src="video_url"
           controls="controls">您的浏览器不支持视频播放</video>
  </div>
</template>

<script>
import Vue from 'vue'
import { Progress } from 'element-ui'
import { baseUrl } from 'api/helpers' // 后台地址
import axios from 'axios'

Vue.use(Progress)
export default {
  props: {
    video: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      baseUrl: `${baseUrl}upload.php`, // 上传地址
      isProgress: false, // 是否显示进度条
      upProgress: 0, // 进度
      upStatus: null, // 进度条样式
      timer: null, // 定时器
      video_url: this.video,
      img_url: ''
    }
  },
  methods: {
    // 手动触发input选择文件
    selectFile () {
      this.$refs.upVideo.dispatchEvent(new MouseEvent('click'))
      this.upStatus = null
      this.upProgress = 0
      this.isProgress = false
    },
    // input文件选择中内容发生变化时触发
    upVideo () {
      // 判断input内容变化后是否还有内容
      if (this.$refs.upVideo.value === '') {
        return false
      }
      this.isProgress = true
      this.timer = setInterval(() => {
        if (++this.upProgress === 80) {
          window.clearInterval(this.timer)
        }
      }, 10)
      // 表单数据的键值对的构造方式
      let formData = new FormData()
      // 后台接收上传文件名为：img
      formData.append('img', this.$refs.upVideo.files[0])
      formData.append('c', 'Upload')
      formData.append('a', 'index')
      formData.append('type', '3')
      // 发生post请求
      axios
        .post(this.baseUrl, formData)
        .then(this.upVideoSuccess)
        .catch(this.upVideoErroe)
    },
    // 上传请求成功
    upVideoSuccess (res) {
      if (res.data.msg === null) {
        this.upVideoErroe()
        return
      }
      window.clearInterval(this.timer)
      this.upProgress = 100
      this.upStatus = 'success'
      this.video_url = res.data.data.img_url
      this.img_url = res.data.data.cover
    },
    // 上传失败
    upVideoErroe () {
      // 清楚加载动画定时器，加载进度条显示失败图案，清空input,提示上传失败
      window.clearInterval(this.timer)
      this.$message.error('上传失败')
      this.upStatus = 'exception'
      this.$refs.upVideo.value = ''
    },
    // 删除视频
    deleteFile () {
      // 表单数据的键值对的构造方式
      let formData = new FormData()
      formData.append('c', 'Upload')
      formData.append('a', 'del')
      formData.append('res', this.video_url)
      axios.post(this.baseUrl, formData).then(res => {
        this.isProgress = false
        this.upProgress = 0
        this.upStatus = null
        this.video_url = ''
        this.$refs.upVideo.value = ''
        this.$message('删除成功')
      }).catch(() => {
        this.$message.error('删除失败')
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.up-input
  opacity 0
  width 0
  height 0
.up-button
  display inline-block
.up-progress
  display inline-block
  width 200px
  margin-left 20px
.video-avatar
  display block
  width 400px
  height 200px
  margin-top 20px
</style>
