<template>
  <div>
    <ul v-for="i in 6"
        :key="i">
      <li>
        <el-button type="text"
                   v-if="i % 2 === 0"
                   @click="dialogVisible = true">点击打开 Dialog</el-button>
      </li>
    </ul>

    <el-dialog title="提示"
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { dialog } from 'element-ui'
Vue.use(dialog)
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
