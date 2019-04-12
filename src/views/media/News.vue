<template>
  <router-view></router-view>
</template>

<script>
import { postNews } from 'api/index'
export default {
  components: {

  },
  data () {
    return {
      page: 1
    }
  },
  created () {
    this._getList()
  },
  methods: {
    _getList () {
      postNews('list', { page: this.page }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
