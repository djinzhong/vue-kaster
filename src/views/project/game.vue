<template>
  <router-view :data="data"></router-view>
</template>

<script>
import { postGame } from 'api/index' // 请求接口
export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    this._getList()
  },
  methods: {
    // 请求即时比赛数据
    _getList () {
      postGame('nowGame').then(res => {
        // type = 2 为无赛程比赛故而过滤掉
        this.data = res.filter(item => +item.type === 1)
      })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
