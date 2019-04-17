<template>
  <router-view v-if="data"
               @renewalVideo="_getList"
               @truning="truning"
               :data="data"
               :page="page"
               :allPage="allPage"></router-view>
</template>

<script>
import { postVideo } from 'api/index' // 后台接口方法
export default {
  data () {
    return {
      data: null, // 视频列表数据
      page: 1, // 页码
      allPage: 1 // 页码总数
    }
  },
  created () {
    this._getList()
  },
  methods: {
    // 请求视频列表内容
    _getList () {
      postVideo('lists', { page: this.page }).then(res => {
        if (res && res.list) this.data = res.list
        if (res && res.allPage) this.allPage = res.allPage
      })
    },
    truning (val) {
      this.page = val
      this._getList()
    }
  }
}
</script>
