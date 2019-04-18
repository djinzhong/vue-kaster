<template>
  <div>
    <el-breadcrumb style="padding:0 0 40px 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{name: 'caballero'}">骑师/练马师</el-breadcrumb-item>
      <el-breadcrumb-item>骑师/练马师配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="名称"
                    class="inline-block">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="类型"
                    class="inline-block">
        <el-select v-model="form.type"
                   style="width: 182px"
                   placeholder="请选择">
          <el-option label="骑师"
                     value="1"></el-option>
          <el-option label="练马师"
                     value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="独赢"
                    class="inline-block">
        <el-input v-model="form.win"></el-input>
      </el-form-item>

      <el-form-item label="位置"
                    class="inline-block">
        <el-input v-model="form.place"></el-input>
      </el-form-item>
      <el-form-item label="出场总数"
                    class="inline-block">
        <el-input v-model="form.total"></el-input>
      </el-form-item>
      <el-form-item label="排名"
                    class="inline-block">
        <el-input v-model="form.rank"></el-input>
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
      <!-- 富文本编辑 -->
      <dj-ueditor v-if="form.desc"
                    ref="ueditor"
                    :content="form.desc" />
      <el-form-item>
        <el-button type="primary"
                   class="primary-button"
                   @click="onSubmit">{{submitText}}</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import { postTj } from 'api/index'
import { baseUrl } from 'api/helpers'
import DjUeditor from 'components/DjUEditor'
import axios from 'axios'
export default {
  components: {
    DjUeditor
  },
  data () {
    return {
      ini: {
        horse_url: `${baseUrl}/upload.php?c=Upload&a=index&type=4`,
        del_url: `${baseUrl}/upload.php?c=Upload&a=del&res=`
      },
      form: {
        name: '',
        win: '',
        place: '',
        total: '',
        icon: '',
        rank: '',
        first: '',
        second: '',
        third: '',
        desc: ''
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
      this._getCaballero()
    } else {
      this.form.desc = ' '
    }
  },
  methods: {
    _getCaballero () {
      this.form.id = this.id
      postTj('info', this.form).then(res => {
        if (res) this.getCaballero(res)
      })
    },
    getCaballero (res) {
      this.form = res
      this.fileList.push({
        name: 'icon.png',
        url: this.form.icon
      })
    },
    _postCaballero () {
      this.form.desc = this.$refs.ueditor.msg
      postTj('set', this.form).then(res => {
        if (res) this.postCaballero(res)
      })
    },
    postCaballero (res) {
      this.$message({
        type: 'success',
        message: '添加成功'
      })
      this.$router.push({ name: 'caballero' })
    },
    onSubmit () {
      for (let item in this.form) {
        if (this.form[item] === '') {
          this.form[item] = 0
        }
      }
      this._postCaballero()
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
.quill-editor
  height 400px
.primary-button
  margin-top 70px
</style>
