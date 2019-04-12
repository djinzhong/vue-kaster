<template>
  <div>
   <el-upload :action="baseUrl"
               accept="image/*"
               name="img"
               :data="upData"
               list-type="picture-card"
               :limit="max"
               :file-list="fileList"
               :http-request="upRequest"
               :on-preview="handlePictureCardPreview"
               :on-success="upWin"
               :on-exceed="upExceed"
               :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%"
           :src="dialogImageUrl"
           alt="">
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { baseUrl } from 'api/helpers'
import { Upload, Dialog } from 'element-ui'

Vue.use(Upload).use(Dialog)
export default {
  props: {
    type: {
      type: String,
      default: 'image' // video
    },
    max: {
      type: Number,
      default: 1
    },
    // { name: '', url: '' }
    filedata: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      fileList: this.filedata,
      baseUrl: `${baseUrl}upload.php`,
      upData: {
        c: 'Upload',
        a: 'index',
        type: 5
      },
      dialogImageUrl: '',
      dialogVisible: false

    }
  },
  methods: {
    // 覆盖默认的上传行为，可以自定义上传的实现
    upRequest (res) {
      // 表单数据的键值对的构造方式
      let formData = new FormData()
      formData.append(res.filename, res.file)
      for (let item in res.data) {
        formData.append(item, res.data[item])
      }
      axios.post(res.action, formData).then(res.onSuccess).catch(this.upLoser)
    },
    // 上传成功的钩子
    upWin (res, file) {
      if (res.data.data) {
        this.fileList.push({
          name: file.name,
          url: res.data.data.img_url
        })
      } else {
        this.upLoser(res)
      }
    },
    upLoser (res) {
      if (res.data) {
        this.$message.error(res.data)
      } else {
        this.$message.error(res)
      }
    },
    // 文件删除钩子
    handleRemove (file, fileList) {
      let formData = new FormData()
      formData.append('c', 'Upload')
      formData.append('a', 'del')
      formData.append('res', file.url)
      axios.post(this.baseUrl, formData).then(res => {
        this.$message('删除成功')
      }).catch(() => {
        this.$message.error('删除失败')
      })
      this.fileList = fileList
    },
    // 点击放大图片钩子
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    upExceed () {
      this.$message(`最多上传${this.max}张图片`)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
