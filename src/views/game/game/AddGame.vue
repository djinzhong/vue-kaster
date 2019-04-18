<template>
  <div>
    <el-breadcrumb style="padding:0 0 40px 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{name: 'gameList'}">比赛</el-breadcrumb-item>
      <el-breadcrumb-item>比赛配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="地区名称"
                    class="inline-block">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="开始时间"
                    class="inline-block">
        <el-date-picker v-model="value1"
                        type="datetime"
                        placeholder="选择开始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间"
                    class="inline-block">
        <el-date-picker v-model="value2"
                        type="datetime"
                        placeholder="选择结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="赛事名称"
                    class="inline-block">
        <el-input v-model="form.track"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio v-model="form.status"
                  label="0">停用</el-radio>
        <el-radio v-model="form.status"
                  label="1">启用</el-radio>
        <el-radio v-model="form.status"
                  label="2">结束</el-radio>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio v-model="form.type"
                  label="1">香港赛事</el-radio>
        <el-radio v-model="form.type"
                  label="2">国际赛事</el-radio>
      </el-form-item>

      <el-form-item label="赛事类别">
        <el-radio v-model="form.desc"
                  label="1">越洋转播赛事</el-radio>
        <el-radio v-model="form.desc"
                  label="2">世界短途挑战赛</el-radio>
        <el-radio v-model="form.desc"
                  label="3">三冠大赛</el-radio>
        <el-radio v-model="form.desc"
                  label="4">香港速度系列</el-radio>
        <el-radio v-model="form.desc"
                  label="5">四岁马系列</el-radio>
        <el-radio v-model="form.desc"
                  label="6">越洋转播赛事日</el-radio>
        <el-radio v-model="form.desc"
                  label="0">其他</el-radio>
      </el-form-item>
      <el-form-item label="长度"
                    class="inline-block">
        <el-input v-model="form.length"></el-input>
      </el-form-item>
      <el-form-item label="图标"
                    class="inline-block">
        <el-input v-model="form.icon"></el-input>
      </el-form-item>
      <!-- 上传封面 -->
      <el-form-item label="上传封面">
        <el-upload :action="ini.horse_url"
                   list-type="picture-card"
                   :limit="1"
                   name="img"
                   :file-list="fileList"
                   :on-remove="handleRemove"
                   :on-preview="handlePictureCardPreview"
                   :on-success="handleSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt>
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">{{submitText}}</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import { postSchedule } from 'api/index'
import { baseUrl } from 'api/helpers'
import axios from 'axios'
export default {
  data () {
    return {
      ini: {
        horse_url: `${baseUrl}/upload.php?c=Upload&a=index&type=4`,
        del_url: `${baseUrl}/upload.php?c=Upload&a=del&res=`
      },
      form: {
        name: '',
        begin_time: '',
        end_time: '',
        icon: '',
        track: '',
        status: '1',
        type: '1',
        length: '',
        desc: ''
      }, // 比赛需要的表单数据
      fileList: [], // 默认图片
      dialogVisible: false, // 图片加载动画
      dialogImageUrl: '',
      value1: '', // 开始时间
      value2: '', // 结束时间
      submitText: '立即创建',
      id: this.$route.query.id
    }
  },
  created () {
    if (this.$route.query.id > 0) {
      this.submitText = '立即修改'
      this._getaddGame()
    }
  },
  methods: {
    // 请求后台要修改数据
    _getaddGame () {
      this.form.id = this.id
      postSchedule('info', this.form).then(res => {
        if (res) this.getaddGame(res)
      })
    },
    // 请求成功后对数据进行处理（时间与图片需要额外处理）
    getaddGame (res) {
      this.form = res
      this.value1 = new Date(res.begin_time * 1000)
      this.value2 = new Date(res.end_time * 1000)
      this.fileList.push({
        name: 'icon.png',
        url: this.form.icon
      })
    },
    // 请求修改
    _postaddGame () {
      postSchedule('set', this.form).then(res => {
        if (res) this.postaddGame(res)
      })
    },
    // 修改成功
    postaddGame (res) {
      this.$message({
        type: 'success',
        message: res
      })
      this.$router.push({ name: 'gameList' })
    },
    // 提交修改（新增）
    onSubmit () {
      if (this.value1 !== '' && this.value1 != null) {
        this.form.begin_time = this.value1.getTime() / 1000
      } else {
        this.$message('请选择开始时间')
        return
      }

      if (this.value2 !== '' && this.value2 != null) {
        this.form.end_time = this.value2.getTime() / 1000
      } else {
        this.$message('请选择结束时间')
        return
      }
      this._postaddGame()
    },
    // 删除图片请求
    handleRemove (file, fileList) {
      axios
        .post(
          `${this.ini.del_url}${file.response.data.img_url}`
        )
        .then(res => {
          delete this.imagesObj[file.name]
          // console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 上传图片动画
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 上传成功
    handleSuccess (response, file, fileList) {
      this.form.icon = response.data.img_url
    }
  }
}
</script>

<style lang="stylus" scoped>
.inline-block
  display inline-block
</style>
