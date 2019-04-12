<template>
  <router-view v-if="data && tagList"
               @searchName="searchName"
               @truning="truning"
               :data="data"
               :page="page"
               :allPage="allPage"
               :tagList="tagList"></router-view>
</template>

<script>
import { postNews } from 'api/index'
export default {
  components: {

  },
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
    _getList () {
      postNews('list', { page: this.page }).then(res => {
        this.data = res.list
        if (res.allPage) {
          this.allPage = res.allPage
        }
      })
    },
    searchName (name) {
      postNews('list', { page: this.page = 1, title: name }).then(res => {
        this.data = res.list
        if (res.allPage) {
          this.allPage = res.allPage
        }
      })
    },
    _getTags () {
      postNews('type').then(res => {
        this.tagList = res
      })
    },
    truning (val) {
      this.page = val
      this._getList()
    }
  }
}
</script>

<style lang='stylus' scoped></style>
