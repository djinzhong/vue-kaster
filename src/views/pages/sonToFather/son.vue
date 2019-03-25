<template>
  <div class="son">
    <h2 class="box">我是子组件</h2>
    <el-form ref="form"
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
  </div>
</template>

<script>
import Vue from 'vue'
import { Form, FormItem, Input, Checkbox, CheckboxGroup } from 'element-ui'
Vue.use(Form).use(FormItem).use(Input).use(Checkbox).use(CheckboxGroup)
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      form: {
        name: this.message,
        type: this.list
      }
    }
  },
  methods: {
    updata () {
      this.$emit('updata', this.form)
    }
  }
}
</script>

<style lang='stylus' scoped>
.son
  margin 40px 0
  .box
    margin 20px 0
</style>
