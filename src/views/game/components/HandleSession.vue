<template>
  <el-form :model="ruleForm"
           label-width="100px"
           class="demo-ruleFrom">
    <div class="form-add">
      <div class="answer-title">马匹{{index + 1}}</div>
      <el-form-item label="马匹ID"
                    class="inline-block">
        <el-input v-model="ruleForm.value1"></el-input>
      </el-form-item>
      <el-form-item label="骑师ID"
                    class="inline-block">
        <el-input v-model="ruleForm.value2"></el-input>
      </el-form-item>
      <el-form-item label="练马师ID"
                    class="inline-block">
        <el-input v-model="ruleForm.value3"></el-input>
      </el-form-item>
      <el-form-item label="负重"
                    class="inline-block">
        <el-input v-model="ruleForm.value4"></el-input>
      </el-form-item>
      <el-form-item label="栏位"
                    class="inline-block">
        <el-input v-model="ruleForm.value5"></el-input>
      </el-form-item>
      <el-form-item label="马匹编号"
                    class="inline-block">
        <el-input v-model="ruleForm.value6"></el-input>
      </el-form-item>
      <el-button class="detal-button"
                 type="primary"
                 size="small"
                 icon="el-icon-delete"
                 @click="deleteAnswer">删除</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  props: {
    ruleForm: Object,
    index: Number
  },
  created () {
    this.ruleForm.value6 = this.index + 1
  },
  methods: {
    deleteAnswer () {
      this.$emit('index', this.index)
    }
  }
}
</script>

<style lang="stylus">
.form-add
  position relative
  .detal-button
    position absolute
    top 0px
    right 0px
.answer-title
  height 32px
  line-height 32px
  padding-left 10px
  margin-bottom 10px
  background #b3b3b3b3
.inline-block
  display inline-block
</style>
