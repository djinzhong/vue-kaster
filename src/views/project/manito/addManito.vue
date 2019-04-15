<template>
<div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'manitoList'}, name: '大神列表'
    },{
      router: {name: 'addManito', query: {id: 0}}, name: `${text}大神`
    }]" />
    <el-form :model="form"
           label-width="140px"
           class="form">
    <el-form-item label="名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="头像">
      <dj-upload ref="icon"
                 :filedata="filedata" />
    </el-form-item>
    <el-form-item label="标签">
      <dj-tag ref="tag"
              :tagsList="form.tag" />
    </el-form-item>
    <el-form-item label="简介">
      <el-input type="textarea"
                v-model="form.sign" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="onSubmit">立即{{text}}</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import { postOkami } from 'api/index'
import DjUpload from 'components/DjUpload'
import DjTag from 'components/DjTag'
export default {
  components: {
    DjUpload, DjTag
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      form: {
        name: '',
        icon: '',
        tag: [],
        sign: ''
      },
      filedata: [],
      id: this.$route.query.id,
      text: '添加'
    }
  },
  created () {
    if (+this.id !== 0) {
      this.text = '修改'
      let list = this.data.filter(item => item._id === this.id)
      if (list.length) {
        this.form.name = list[0].name
        this.form.icon = list[0].icon
        this.form.tag = list[0].tags
        this.form.sign = list[0].sign
        this.filedata = [{
          name: 'icon.img',
          url: this.form.icon
        }]
      }
    }
  },
  methods: {
    onSubmit () {
      // 将上传图片组件的图片解析到form对象中
      if (this.$refs.icon.fileList.length) {
        this.form.icon = this.$refs.icon.fileList[0].url || '1'
      } else {
        this.$message('请上传头像！')
        return false
      }
      // 将标签解析
      this.form.tag = this.$refs.tag.dynamicTags
      for (let item in this.form) {
        if (this.form[item] === '') {
          this.$message('请填写完整后创建！')
          return false
        }
      }
      postOkami('add', this.form).then(res => {
        this.$message.success(`${this.text}成功`)
        this.$router.push({ name: 'manitoList' })
        this.$emit('renewal')
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.form
  width 800px
  margin 20px 0
  text-align left
</style>
