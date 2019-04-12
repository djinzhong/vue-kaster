<template>
  <el-pagination background
  class="pagination"
                 layout="prev, pager, next"
                 :total="total"
                 :current-page="page"
                 @current-change="handleCurrentChange" />
</template>

<script>
import Vue from 'vue'
import { Pagination } from 'element-ui'
Vue.use(Pagination)
export default {
  props: {
    page: Number,
    allPage: Number
  },
  computed: {
    total () {
      return this.currentPage1 * this.allPage // 页码 * 总页数 = 总数
    }
  },
  data () {
    return {
      currentPage1: 10 // 一页显示个数
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('truning', val)
    }
  }
}
</script>

<style lang='stylus' scoped>
.pagination
  text-align left
  margin 10px 20px
</style>
