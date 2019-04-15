<template>
  <router-view v-if="data && tagList"
               @searchName="searchName"
               @truning="truning"
               @renewalTag="_getTags"
               @renewalNews="_getList"
               :data="data"
               :page="page"
               :allPage="allPage"
               :tagList="tagList"></router-view>
</template>

<script>
import { postNews } from 'api/index'
export default {
  data () {
    return {
      data: null, // 新闻数据 {Array}
      tagList: null,
      page: 1,
      allPage: 1
    }
  },
  created () {
    this._getList()
    this._getTags()
  },
  methods: {
    // 请求新闻列表
    _getList () {
      postNews('list', { page: this.page }).then(res => {
        if (res && res.list) this.data = res.list
        if (res && res.allPage) this.allPage = res.allPage
      })
    },
    // 检索name
    searchName (name) {
      postNews('list', { page: this.page = 1, title: name }).then(res => {
        if (res && res.list) this.data = res.list
        if (res && res.allPage) this.allPage = res.allPage
      })
    },
    // 请求标签信息
    _getTags () {
      postNews('type').then(res => {
        this.tagList = []
        this.tagList = res
      })
    },
    // 页面更新
    truning (val) {
      this.page = val
      this._getList()
    }
  }
}
</script>
