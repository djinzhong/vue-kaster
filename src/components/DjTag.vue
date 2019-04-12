<template>
  <div>
    <el-tag :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm">
    </el-input>
    <el-button v-else
               class="button-new-tag"
               size="small"
               @click="showInput">新增标签</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tag } from 'element-ui'

Vue.use(Tag)
export default {
  props: {
    tagsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      dynamicTags: this.tagsList, // 默认标签内容
      inputVisible: false, // 是否显示输入框
      inputValue: '' // 输入框内容
    }
  },
  methods: {
    // 删除标签
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    // 展示输入框
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 确认输入框内容
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang='stylus' scoped>
.el-tag + .el-tag
  margin-left 10px
.button-new-tag
  margin-left 10px
  height 32px
  line-height 30px
  padding-top 0
  padding-bottom 0
.input-new-tag
  width 90px
  margin-left 10px
  vertical-align bottom
</style>
