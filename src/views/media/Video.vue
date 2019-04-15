<template>
  <router-view v-if="data"
               :data="data"
               :page="page"
               :allPage="allPage"></router-view>
</template>

<script>
import { postVideo } from 'api/index'
export default {
  components: {

  },
  data () {
    return {
      data: null,
      page: 1,
      allPage: 1
    }
  },
  created () {
    this._getList()
  },
  methods: {
    _getList () {
      postVideo('lists', { page: this.page }).then(res => {
        if (res && res.list) this.data = res.list
        if (res && res.allPage) this.allPage = res.allPage
      })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
