<template>
  <el-date-picker v-model="data"
                  type="daterange"
                  align="right"
                  unlink-panels
                  @change="change"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
  </el-date-picker>
</template>

<script>
import Vue from 'vue'
import { DatePicker } from 'element-ui'
Vue.use(DatePicker)
export default {
  data () {
    return {
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      data: []
    }
  },
  methods: {
    change () {
      let data1 = 0
      let data2 = 0
      if (this.data) {
        data1 = parseInt(this.data[0] / 1000)
        data2 = parseInt(this.data[1] / 1000)
      }
      this.$emit('dataChang', data1, data2)
    }
  }
}
</script>

<style lang='stylus'>
.el-date-editor .el-range-separator
  width 20px
</style>
