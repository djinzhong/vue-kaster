<template>
  <div style="text-align: left">
    <el-breadcrumb style="padding:0 0 40px 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/horse'}">马匹</el-breadcrumb-item>
      <el-breadcrumb-item>马匹配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="马匹名称"
                    class="inline-block">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄"
                    class="inline-block">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="体重"
                    class="inline-block">
        <el-input v-model="form.h_weight"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.sex"
                  label="1">公</el-radio>
        <el-radio v-model="form.sex"
                  label="2">母</el-radio>
        <el-radio v-model="form.sex"
                  label="3">阉</el-radio>
        <el-radio v-model="form.sex"
                  label="4">隐睾</el-radio>
      </el-form-item>
      <el-form-item label="体重变化"
                    class="inline-block">
        <el-input v-model="form.w_change"></el-input>
      </el-form-item>
      <el-form-item label="能力(1-12)"
                    class="inline-block">
        <el-input v-model="form.ability"></el-input>
      </el-form-item>
      <el-form-item label="状态(1-12)"
                    class="inline-block">
        <el-input v-model="form.condition"></el-input>
      </el-form-item>
      <el-form-item label="评分"
                    class="inline-block">
        <el-input v-model="form.score"></el-input>
      </el-form-item>
      <el-form-item label="独赢比例"
                    class="inline-block">
        <el-input v-model="form.win"></el-input>
      </el-form-item>
      <el-form-item label="位置比例"
                    class="inline-block">
        <el-input v-model="form.place"></el-input>
      </el-form-item>
      <el-form-item label="第一"
                    class="inline-block">
        <el-input v-model="form.first"></el-input>
      </el-form-item>
      <el-form-item label="第二"
                    class="inline-block">
        <el-input v-model="form.second"></el-input>
      </el-form-item>
      <el-form-item label="第三"
                    class="inline-block">
        <el-input v-model="form.third"></el-input>
      </el-form-item>
      <el-form-item label="跑的场数"
                    class="inline-block">
        <el-input v-model="form.total"></el-input>
      </el-form-item>
      <el-form-item label="归属"
                    class="inline-block">
        <el-input v-model="form.attach"></el-input>
      </el-form-item>
      <el-form-item label="评语">
        <el-input type="textarea"
                  v-model="form.comment"></el-input>
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
import { postHorse } from 'api/index'
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
        age: '',
        sex: '',
        h_weight: '',
        w_change: '',
        ability: '',
        condition: '',
        score: '',
        win: '',
        place: '',
        first: '',
        second: '',
        third: '',
        total: '',
        attach: '',
        icon: '',
        comment: ''
      },
      fileList: [],
      dialogVisible: false,
      dialogImageUrl: '',
      submitText: '立即创建',
      id: this.$route.query.id
    }
  },
  created () {
    if (this.$route.query.id > 0) {
      this.submitText = '立即修改'
      this._getHorse()
    }
  },
  methods: {
    _getHorse () {
      this.form.id = this.id
      postHorse('info', this.form).then(res => {
        if (res) this.getHorse(res)
      })
    },
    getHorse (res) {
      this.form = res
      this.fileList.push({
        name: 'icon.png',
        url: this.form.icon
      })
    },
    _postHorse () {
      postHorse('set', this.form).then(res => {
        if (res) this.postHorse(res)
      })
    },
    postHorse (res) {
      this.$message({
        type: 'success',
        message: '添加成功'
      })
      this.$router.push({ name: 'horse' })
    },
    onSubmit () {
      for (let item in this.form) {
        if (this.form[item] === '') {
          this.form[item] = 0
        }
      }
      this._postHorse()
    },
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
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
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
