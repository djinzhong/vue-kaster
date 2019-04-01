<template>
  <div class="son">
    <h2 class="box">我是子组件</h2>
    <h3 class="box"
        style="text-align:left">响应式更新</h3>
    <el-form ref="form"
             class="box"
             :model="form"
             label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"
                  @change="updata"></el-input>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type"
                           @change="updata">
          <el-checkbox label="美食/餐厅线上活动"
                       name="type"></el-checkbox>
          <el-checkbox label="地推活动"
                       name="type"></el-checkbox>
          <el-checkbox label="线下主题活动"
                       name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光"
                       name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <h3 class="box"
        style="text-align:left">
      非响应是更新</h3>
    <el-form ref="form"
             class="box"
             :model="form1"
             label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form1.name"></el-input>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form1.type">
          <el-checkbox label="美食/餐厅线上活动"
                       name="type"></el-checkbox>
          <el-checkbox label="地推活动"
                       name="type"></el-checkbox>
          <el-checkbox label="线下主题活动"
                       name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光"
                       name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-button type="success"
                 @click="updata1">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Form, FormItem, Input, Checkbox, CheckboxGroup } from 'element-ui'
Vue.use(Form).use(FormItem).use(Input).use(Checkbox).use(CheckboxGroup)
export default {
  props: {
    dataprops: {
      type: Object,
      default: () => {
        return {
          name: '',
          type: []
        }
      }
    }
  },
  watch: {
    // 监听父组件数据变化
    dataprops: function (val) {
      this.form = val
    }
  },
  data () {
    return {
      form: {
        name: '',
        type: []
      },
      form1: {
        name: '',
        type: []
      }
    }
  },
  methods: {
    // 响应更新
    updata () {
      this.$emit('updata', this.form)
    },
    // 触发事件手动更新
    updata1 () {
      this.$emit('updata', this.form1)
    }
  }
}
</script>

<style lang='stylus' scoped>
.son
  margin 40px 0
  .box
    margin 20px
</style>
