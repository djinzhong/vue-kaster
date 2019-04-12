<template>
  <el-form ref="form"
           class="project-form"
           :model="form"
           label-width="80px">
    <el-form-item label="玩法">
      <el-radio-group v-model="form.playMethod">
        <el-radio v-for="play in playList"
                  :key="play.id"
                  :label="play.id">{{play.name}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="推荐理由">
      <el-input type="textarea"
                v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 size="mini"
                 @click="$emit('onSubmit', form)">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { playList } from '../config/play.config.js'
export default {
  data () {
    return {
      playList: playList, // 玩法配置
      form: {
        playMethod: 0,
        desc: ''
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.project-form
  margin 20px 0
  >>> .el-radio
    line-height 40px
</style>
