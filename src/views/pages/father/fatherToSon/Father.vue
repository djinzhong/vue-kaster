<template>
  <div class="father-son">
    <header class="header">
      <h1>我是父组件</h1>
      <el-form ref="form"
               :model="form"
               class="box"
               label-width="120px">
        <el-form-item label="父组件同步数据">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
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
      <div class="box">
        <el-button type="success"
                   @click="creation">新创建对象</el-button>
      </div>
    </header>
    <div class="content">
      <son-left class="content-son"
                :list="form.type"
                :form="form"
                :name="form.name"
                :newObj="newObj" />
      <son-right class="content-son"
                 v-bind="dataProps" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Form, FormItem, Input, Checkbox, CheckboxGroup } from 'element-ui'
Vue.use(Form).use(FormItem).use(Input).use(Checkbox).use(CheckboxGroup)
const SonLeft = () => import('pages/father/fatherToSon/son1')
const SonRight = () => import('pages/father/fatherToSon/son2')
export default {
  components: {
    SonLeft: SonLeft,
    SonRight: SonRight
  },
  data () {
    return {
      form: {
        name: '',
        type: []
      },
      newObj: {},
      list: []
    }
  },
  computed: {
    dataProps: function () {
      return {
        form: this.form,
        list: this.form.type
      }
    }
  },
  methods: {
    creation () {
      this.newObj = {
        name: '我是新创建的对象数据'
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.header
  .box
    width 40%
    margin 20px auto
.content
  display flex
  .content-son
    flex 1
</style>
