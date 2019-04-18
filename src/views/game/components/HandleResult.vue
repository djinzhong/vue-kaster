<template>
  <el-form :model="ruleForm"
           label-width="100px"
           class="demo-ruleFrom">
    <div class="form-add">
      <div class="answer-title">比赛结果</div>
      <el-form-item label="第一名"
                    class="inline-block">
        <el-input v-model="ruleForm.value1"></el-input>
      </el-form-item>
      <el-form-item label="第二名"
                    class="inline-block">
        <el-input v-model="ruleForm.value2"></el-input>
      </el-form-item>
      <el-form-item label="第三名"
                    class="inline-block">
        <el-input v-model="ruleForm.value3"></el-input>
      </el-form-item>
      <el-form-item label="第四名"
                    class="inline-block">
        <el-input v-model="ruleForm.value4"></el-input>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
export default {
  props: {
    ruleForm: {
      type: Object,
      default: () => {
        return {
          value1: '',
          value2: '',
          value3: '',
          value4: ''
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.form-add
  position relative
.answer-title
  height 32px
  line-height 32px
  padding-left 10px
  margin-bottom 10px
  background #b3b3b3b3
.inline-block
  display inline-block
</style>
