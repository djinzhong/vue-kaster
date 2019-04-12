<template>
  <div>
    <dj-breadcrumb :routerList="[{
      router: {name: 'newsList'}, name: '新闻列表'
    },{
      router: {name: 'addNews', query: {id: $route.query.id}}, name: '新增新闻'
    }]" />
    <el-form :model="form"
             label-width="140px"
             class="form">
      <el-form-item label="标题">
        <el-input v-model="form.title"
                  style="width: 600px" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="优先级">
        <el-input v-model="form.sort" />
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
                    :label="item.value">{{item.text}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上传封面">
        <dj-upload ref="images"
                   :max='3'
                   :filedata="filedata" />
      </el-form-item>
      <el-form-item label="标签">
         <dj-checkbox :cityOptions="tagsList" :checkedDetails="checkedDetails" />
      </el-form-item>
      <el-form-item label="新闻内容">

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Switch } from 'element-ui'
import { typeList } from '../config/table.config.js'
import { mixin } from '../config/mixin.js'
import DjUpload from 'components/DjUpload'
import DjCheckbox from 'components/DjCheckbox '

Vue.use(Switch)
export default {
  mixins: [mixin], // 将props和计算属性tagsList(标签列表)混入
  components: {
    DjUpload, DjCheckbox
  },
  data () {
    return {
      form: {},
      typeList: typeList, // 类型
      filedata: [], // 封面列表
      checkedDetails: [] // 默认选中
    }
  },
  methods: {

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
</style>
